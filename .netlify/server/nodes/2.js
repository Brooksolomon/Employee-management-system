import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.54a4ce5b.js","_app/immutable/chunks/scheduler.94e6a884.js","_app/immutable/chunks/index.3fac3d3f.js","_app/immutable/chunks/index.3820d929.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.46e3a42c.js"];
export const stylesheets = ["_app/immutable/assets/2.3857e15f.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
