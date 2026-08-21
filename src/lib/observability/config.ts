/**
 * OpenObserve configuration.
 *
 * Single source of truth for RUM + Logs settings. Every value comes from a
 * typed `astro:env` client variable declared in `astro.config.mjs`, so a new
 * project changes `.env` only — never this file and never `client.ts`.
 *
 * Import this module from client code only; it is bundled into the browser.
 */
import {
  PUBLIC_OO_API_VERSION,
  PUBLIC_OO_APPLICATION_ID,
  PUBLIC_OO_CLIENT_TOKEN,
  PUBLIC_OO_ENABLED,
  PUBLIC_OO_ENV,
  PUBLIC_OO_FORWARD_ERRORS_TO_LOGS,
  PUBLIC_OO_INSECURE_HTTP,
  PUBLIC_OO_ORGANIZATION,
  PUBLIC_OO_PRIVACY_LEVEL,
  PUBLIC_OO_RESPECT_DO_NOT_TRACK,
  PUBLIC_OO_SERVICE,
  PUBLIC_OO_SESSION_REPLAY_SAMPLE_RATE,
  PUBLIC_OO_SESSION_SAMPLE_RATE,
  PUBLIC_OO_SITE,
  PUBLIC_OO_TRACING_URLS,
  PUBLIC_OO_TRACK_LONG_TASKS,
  PUBLIC_OO_TRACK_RESOURCES,
  PUBLIC_OO_TRACK_USER_INTERACTIONS,
  PUBLIC_OO_VERSION,
} from "astro:env/client";

export type PrivacyLevel = "allow" | "mask-user-input" | "mask";

export interface TracingUrlMatcher {
  match: string;
  propagatorTypes: Array<"openobserve" | "tracecontext" | "b3" | "b3multi" | "datadog">;
}

export interface ObservabilityConfig {
  enabled: boolean;
  respectDoNotTrack: boolean;
  clientToken: string;
  applicationId?: string;
  site: string;
  organizationIdentifier: string;
  service?: string;
  env?: string;
  version?: string;
  apiVersion: string;
  insecureHTTP: boolean;
  trackResources: boolean;
  trackLongTasks: boolean;
  trackUserInteractions: boolean;
  forwardErrorsToLogs: boolean;
  defaultPrivacyLevel: PrivacyLevel;
  sessionSampleRate: number;
  sessionReplaySampleRate: number;
  allowedTracingUrls: TracingUrlMatcher[];
}

/** "https://a.com/api, https://b.com" -> tracing matchers (empty = disabled). */
function parseTracingUrls(raw: string): TracingUrlMatcher[] {
  return raw
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)
    .map((match) => ({
      match,
      propagatorTypes: ["openobserve", "tracecontext"] as TracingUrlMatcher["propagatorTypes"],
    }));
}

export const observabilityConfig: ObservabilityConfig = {
  enabled: PUBLIC_OO_ENABLED,
  respectDoNotTrack: PUBLIC_OO_RESPECT_DO_NOT_TRACK,

  clientToken: PUBLIC_OO_CLIENT_TOKEN,
  applicationId: PUBLIC_OO_APPLICATION_ID,
  site: PUBLIC_OO_SITE,
  organizationIdentifier: PUBLIC_OO_ORGANIZATION,
  service: PUBLIC_OO_SERVICE,
  env: PUBLIC_OO_ENV,
  version: PUBLIC_OO_VERSION,
  apiVersion: PUBLIC_OO_API_VERSION,
  insecureHTTP: PUBLIC_OO_INSECURE_HTTP,

  trackResources: PUBLIC_OO_TRACK_RESOURCES,
  trackLongTasks: PUBLIC_OO_TRACK_LONG_TASKS,
  trackUserInteractions: PUBLIC_OO_TRACK_USER_INTERACTIONS,
  forwardErrorsToLogs: PUBLIC_OO_FORWARD_ERRORS_TO_LOGS,

  defaultPrivacyLevel: PUBLIC_OO_PRIVACY_LEVEL as PrivacyLevel,
  sessionSampleRate: PUBLIC_OO_SESSION_SAMPLE_RATE,
  sessionReplaySampleRate: PUBLIC_OO_SESSION_REPLAY_SAMPLE_RATE,

  allowedTracingUrls: parseTracingUrls(PUBLIC_OO_TRACING_URLS),
};

/** The origin RUM/log events are shipped to — handy for `<link rel=preconnect>`. */
export function observabilityOrigin(config: ObservabilityConfig = observabilityConfig): string {
  return `${config.insecureHTTP ? "http" : "https"}://${config.site}`;
}
