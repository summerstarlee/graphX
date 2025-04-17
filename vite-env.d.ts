/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_BASE_URL: string;
	readonly VITE_IMG_BASE_URL: string;
	readonly VITE_DOMAIN_URL: string;
	readonly VITE_APP_AI: string;
	readonly VITE_APP_SERVICE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
declare const __APP_VERSION__: string;
