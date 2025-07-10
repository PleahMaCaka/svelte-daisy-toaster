
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const LSCOLORS: string;
	export const npm_command: string;
	export const WINDOWID: string;
	export const COLORTERM: string;
	export const GTK_THEME: string;
	export const CSF_MDTVTexturesDirectory: string;
	export const HYPRLAND_CMD: string;
	export const LESS: string;
	export const XDG_SESSION_PATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const GTK_IM_MODULE: string;
	export const XDG_BACKEND: string;
	export const CSF_DrawPluginDefaults: string;
	export const NODE: string;
	export const CSF_LANGUAGE: string;
	export const CSF_MIGRATION_TYPES: string;
	export const ZEPHYR_SDK: string;
	export const npm_config_local_prefix: string;
	export const XMODIFIERS: string;
	export const DESKTOP_SESSION: string;
	export const __ETC_PROFILE_NIX_SOURCED: string;
	export const CSF_OCCTResourcePath: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const XCURSOR_SIZE: string;
	export const CSF_STEPDefaults: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const DRAWHOME: string;
	export const _: string;
	export const CSF_StandardLiteDefaults: string;
	export const QT_STYLE_OVERRIDE: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const WAYLAND_DISPLAY: string;
	export const NIX_SSL_CERT_FILE: string;
	export const MANROFFOPT: string;
	export const XDG_SEAT_PATH: string;
	export const EXTENSIONS_GALLERY: string;
	export const CSF_ShadersDirectory: string;
	export const CSF_EXCEPTION_PROMPT: string;
	export const YSU_VERSION: string;
	export const CSF_XmlOcafResource: string;
	export const npm_lifecycle_script: string;
	export const CSF_SHMessage: string;
	export const XDG_SESSION_CLASS: string;
	export const ANDROID_HOME: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const ZSH: string;
	export const USER: string;
	export const NDK_HOME: string;
	export const CSF_StandardDefaults: string;
	export const CSF_IGESDefaults: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const MANPAGER: string;
	export const DISPLAY: string;
	export const CSF_XCAFDefaults: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const PAGER: string;
	export const QT_IM_MODULE: string;
	export const XDG_VTNR: string;
	export const CSF_PluginDefaults: string;
	export const CSF_TObjMessage: string;
	export const XDG_SESSION_ID: string;
	export const EMSDK_NODE: string;
	export const npm_config_user_agent: string;
	export const CASROOT: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const CSF_XSMessage: string;
	export const MMGT_CLEAR: string;
	export const XDG_DATA_DIRS: string;
	export const PATH: string;
	export const CSF_TObjDefaults: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const MAIL: string;
	export const EMSDK: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const DRAWDEFAULT: string;
	export const ZED_TERM: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const npm_node_execpath: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const OLDPWD: string;
	export const HYPRCURSOR_SIZE: string;
	export const TERM_PROGRAM: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		LSCOLORS: string;
		npm_command: string;
		WINDOWID: string;
		COLORTERM: string;
		GTK_THEME: string;
		CSF_MDTVTexturesDirectory: string;
		HYPRLAND_CMD: string;
		LESS: string;
		XDG_SESSION_PATH: string;
		TERM_PROGRAM_VERSION: string;
		GTK_IM_MODULE: string;
		XDG_BACKEND: string;
		CSF_DrawPluginDefaults: string;
		NODE: string;
		CSF_LANGUAGE: string;
		CSF_MIGRATION_TYPES: string;
		ZEPHYR_SDK: string;
		npm_config_local_prefix: string;
		XMODIFIERS: string;
		DESKTOP_SESSION: string;
		__ETC_PROFILE_NIX_SOURCED: string;
		CSF_OCCTResourcePath: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		XCURSOR_SIZE: string;
		CSF_STEPDefaults: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		NIX_PROFILES: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		DRAWHOME: string;
		_: string;
		CSF_StandardLiteDefaults: string;
		QT_STYLE_OVERRIDE: string;
		MOTD_SHOWN: string;
		HOME: string;
		LANG: string;
		LS_COLORS: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		WAYLAND_DISPLAY: string;
		NIX_SSL_CERT_FILE: string;
		MANROFFOPT: string;
		XDG_SEAT_PATH: string;
		EXTENSIONS_GALLERY: string;
		CSF_ShadersDirectory: string;
		CSF_EXCEPTION_PROMPT: string;
		YSU_VERSION: string;
		CSF_XmlOcafResource: string;
		npm_lifecycle_script: string;
		CSF_SHMessage: string;
		XDG_SESSION_CLASS: string;
		ANDROID_HOME: string;
		TERM: string;
		npm_package_name: string;
		ZSH: string;
		USER: string;
		NDK_HOME: string;
		CSF_StandardDefaults: string;
		CSF_IGESDefaults: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		MANPAGER: string;
		DISPLAY: string;
		CSF_XCAFDefaults: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		MOZ_ENABLE_WAYLAND: string;
		PAGER: string;
		QT_IM_MODULE: string;
		XDG_VTNR: string;
		CSF_PluginDefaults: string;
		CSF_TObjMessage: string;
		XDG_SESSION_ID: string;
		EMSDK_NODE: string;
		npm_config_user_agent: string;
		CASROOT: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		CSF_XSMessage: string;
		MMGT_CLEAR: string;
		XDG_DATA_DIRS: string;
		PATH: string;
		CSF_TObjDefaults: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		MAIL: string;
		EMSDK: string;
		ALACRITTY_WINDOW_ID: string;
		DRAWDEFAULT: string;
		ZED_TERM: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		npm_node_execpath: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		OLDPWD: string;
		HYPRCURSOR_SIZE: string;
		TERM_PROGRAM: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
