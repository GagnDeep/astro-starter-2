declare module 'astro:env/client' {
	export const PUBLIC_OO_APPLICATION_ID: string;
	export const PUBLIC_OO_SERVICE: string;
	export const PUBLIC_OO_ENV: string;
	export const PUBLIC_OO_VERSION: string;
	export const PUBLIC_OO_CLIENT_TOKEN: string;
	export const PUBLIC_OO_SITE: string;
	export const PUBLIC_OO_ORGANIZATION: string;
	export const PUBLIC_OO_API_VERSION: string;
	export const PUBLIC_OO_INSECURE_HTTP: boolean;
	export const PUBLIC_OO_ENABLED: boolean;
	export const PUBLIC_OO_SESSION_SAMPLE_RATE: number;
	export const PUBLIC_OO_SESSION_REPLAY_SAMPLE_RATE: number;
	export const PUBLIC_OO_PRIVACY_LEVEL: 'allow' | 'mask-user-input' | 'mask';
	export const PUBLIC_OO_TRACK_RESOURCES: boolean;
	export const PUBLIC_OO_TRACK_LONG_TASKS: boolean;
	export const PUBLIC_OO_TRACK_USER_INTERACTIONS: boolean;
	export const PUBLIC_OO_FORWARD_ERRORS_TO_LOGS: boolean;
	export const PUBLIC_OO_RESPECT_DO_NOT_TRACK: boolean;
	export const PUBLIC_OO_TRACING_URLS: string;
}