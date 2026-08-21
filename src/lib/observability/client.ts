/**
 * OpenObserve RUM + Logs client.
 *
 * Design goals for this starter:
 *  - **Zero config in code.** Everything comes from `config.ts` (i.e. `.env`).
 *  - **Zero cost when disabled.** The SDKs are `import()`ed lazily, so a build
 *    with `PUBLIC_OO_ENABLED=false` never downloads or parses them.
 *  - **Safe to call from anywhere.** `trackEvent`/`log*`/`identifyUser` are
 *    no-ops before init and on the server, never throwing in user code.
 *  - **Idempotent.** Multiple imports / view transitions only ever init once.
 *
 * Usage from a component or island:
 * ```ts
 * import { trackEvent, logError } from "../lib/observability/client";
 * trackEvent("signup_clicked", { plan: "pro" });
 * ```
 */
import { observabilityConfig, type ObservabilityConfig } from "./config";

type RumModule = typeof import("@openobserve/browser-rum");
type LogsModule = typeof import("@openobserve/browser-logs");

export interface ObservabilityUser {
  id: string;
  name?: string;
  email?: string;
  [key: string]: unknown;
}

let initPromise: Promise<Sdk | null> | null = null;

interface Sdk {
  rum: RumModule["openobserveRum"];
  logs: LogsModule["openobserveLogs"];
}

/** True when RUM should run in this browser right now. */
export function shouldInitialize(config: ObservabilityConfig = observabilityConfig): boolean {
  if (typeof window === "undefined") return false; // SSR / build time
  if (!config.enabled) return false;
  if (!config.clientToken || !config.site) return false;
  if (config.respectDoNotTrack && doNotTrackEnabled()) return false;
  return true;
}

function doNotTrackEnabled(): boolean {
  const nav = navigator as Navigator & {
    doNotTrack?: string;
    msDoNotTrack?: string;
    globalPrivacyControl?: boolean;
  };
  const win = window as Window & { doNotTrack?: string };
  const signal = nav.doNotTrack ?? win.doNotTrack ?? nav.msDoNotTrack;
  return signal === "1" || signal === "yes" || nav.globalPrivacyControl === true;
}

/**
 * Initialize RUM + Logs. Resolves to the SDK handles, or `null` when
 * observability is disabled or unavailable. Safe to call repeatedly.
 */
export function initObservability(
  config: ObservabilityConfig = observabilityConfig,
): Promise<Sdk | null> {
  if (initPromise) return initPromise;

  if (!shouldInitialize(config)) {
    initPromise = Promise.resolve(null);
    return initPromise;
  }

  initPromise = Promise.all([
    import("@openobserve/browser-rum"),
    import("@openobserve/browser-logs"),
  ])
    .then(([{ openobserveRum }, { openobserveLogs }]) => {
      const common = {
        clientToken: config.clientToken,
        site: config.site,
        organizationIdentifier: config.organizationIdentifier,
        service: config.service,
        env: config.env,
        version: config.version,
        apiVersion: config.apiVersion,
        insecureHTTP: config.insecureHTTP,
      };

      openobserveRum.init({
        ...common,
        applicationId: config.applicationId ?? "unknown",
        trackResources: config.trackResources,
        trackLongTasks: config.trackLongTasks,
        trackUserInteractions: config.trackUserInteractions,
        defaultPrivacyLevel: config.defaultPrivacyLevel,
        sessionSampleRate: config.sessionSampleRate,
        sessionReplaySampleRate: config.sessionReplaySampleRate,
        // Only pass tracing config when origins are actually configured;
        // an empty array would silently disable propagation anyway.
        ...(config.allowedTracingUrls.length
          ? { allowedTracingUrls: config.allowedTracingUrls }
          : {}),
      });

      openobserveLogs.init({
        ...common,
        forwardErrorsToLogs: config.forwardErrorsToLogs,
      });

      if (config.sessionReplaySampleRate > 0) {
        openobserveRum.startSessionReplayRecording();
      }

      return { rum: openobserveRum, logs: openobserveLogs } satisfies Sdk;
    })
    .catch((error) => {
      // Never let telemetry break the page.
      console.warn("[observability] OpenObserve failed to initialize:", error);
      return null;
    });

  return initPromise;
}

/** Run `fn` once the SDK is ready; silently skipped when disabled. */
function withSdk(fn: (sdk: Sdk) => void): void {
  const pending = initPromise ?? Promise.resolve(null);
  void pending.then((sdk) => {
    if (sdk) fn(sdk);
  });
}

/** Custom RUM action, e.g. `trackEvent("cta_clicked", { id: "hero" })`. */
export function trackEvent(name: string, context?: Record<string, unknown>): void {
  withSdk(({ rum }) => rum.addAction(name, context));
}

/** Report a handled error to RUM (unhandled ones are captured automatically). */
export function trackError(error: unknown, context?: Record<string, unknown>): void {
  withSdk(({ rum }) => rum.addError(error, context));
}

/** Attach a key to every subsequent RUM event (e.g. an A/B variant). */
export function setGlobalContext(key: string, value: unknown): void {
  withSdk(({ rum }) => rum.setGlobalContextProperty(key, value));
}

export function logInfo(message: string, context?: Record<string, unknown>): void {
  withSdk(({ logs }) => logs.logger.info(message, context));
}

export function logWarn(message: string, context?: Record<string, unknown>): void {
  withSdk(({ logs }) => logs.logger.warn(message, context));
}

export function logError(message: string, context?: Record<string, unknown>, error?: Error): void {
  withSdk(({ logs }) => logs.logger.error(message, context, error));
}

/** Identify the signed-in user so sessions are searchable in OpenObserve. */
export function identifyUser(user: ObservabilityUser): void {
  withSdk(({ rum, logs }) => {
    rum.setUser(user);
    logs.setUser(user);
  });
}

/** Clear user identity on sign-out. */
export function clearUser(): void {
  withSdk(({ rum, logs }) => {
    rum.clearUser();
    logs.clearUser();
  });
}
