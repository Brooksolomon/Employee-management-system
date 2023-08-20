export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["doc.png","favicon.png","hilcoe-Logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.1d7c24ee.js","app":"_app/immutable/entry/app.664b1aea.js","imports":["_app/immutable/entry/start.1d7c24ee.js","_app/immutable/chunks/scheduler.94e6a884.js","_app/immutable/chunks/singletons.d8366e7a.js","_app/immutable/chunks/index.3820d929.js","_app/immutable/entry/app.664b1aea.js","_app/immutable/chunks/scheduler.94e6a884.js","_app/immutable/chunks/index.3fac3d3f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[employees]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"employees","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
