

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.318ca97c.js","_app/immutable/chunks/scheduler.94e6a884.js","_app/immutable/chunks/index.3fac3d3f.js"];
export const stylesheets = ["_app/immutable/assets/0.f66a91e7.css"];
export const fonts = [];
