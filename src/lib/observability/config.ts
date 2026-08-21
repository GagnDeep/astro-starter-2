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
  PUBLIC_OO_ORGANIZATION,
  PUBLIC_OO_PRIVACY_LEVEL,
  PUBLIC_OO_SERVICE,
  PUBLIC_OO_SITE,
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
  applicationId: string;
  site: string;
  organizationIdentifier: string;
  service: string;
  env: string;
  version: string;
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
  respectDoNotTrack: true,

  clientToken: PUBLIC_OO_CLIENT_TOKEN || "",
  applicationId: PUBLIC_OO_APPLICATION_ID || "udocumentview",
  site: PUBLIC_OO_SITE || "data.markremover.com",
  organizationIdentifier: PUBLIC_OO_ORGANIZATION || "default",
  service: PUBLIC_OO_SERVICE || "udocumentview",
  env: PUBLIC_OO_ENV || "development",
  version: PUBLIC_OO_VERSION || "0.0.1",
  apiVersion: PUBLIC_OO_API_VERSION,
  insecureHTTP: false,

  trackResources: true,
  trackLongTasks: true,
  trackUserInteractions: true,
  forwardErrorsToLogs: true,

  defaultPrivacyLevel: PUBLIC_OO_PRIVACY_LEVEL as PrivacyLevel,
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,

  allowedTracingUrls: parseTracingUrls(""),
};

/** The origin RUM/log events are shipped to — handy for `<link rel=preconnect>`. */
export function observabilityOrigin(config: ObservabilityConfig = observabilityConfig): string {
  return `${config.insecureHTTP ? "http" : "https"}://${config.site}`;
}
