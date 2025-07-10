export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Cot8fede.js",app:"_app/immutable/entry/app.BoVXQ1Ov.js",imports:["_app/immutable/entry/start.Cot8fede.js","_app/immutable/chunks/3_aWkhoR.js","_app/immutable/chunks/BzGJtkf2.js","_app/immutable/chunks/yK9AgU6K.js","_app/immutable/chunks/BP11S52c.js","_app/immutable/entry/app.BoVXQ1Ov.js","_app/immutable/chunks/yK9AgU6K.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BzGJtkf2.js","_app/immutable/chunks/BP11S52c.js","_app/immutable/chunks/CxBi_gzI.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
