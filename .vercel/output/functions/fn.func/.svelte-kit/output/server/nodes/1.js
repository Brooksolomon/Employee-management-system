

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.812ae8cd.js","_app/immutable/chunks/scheduler.94e6a884.js","_app/immutable/chunks/index.3fac3d3f.js","_app/immutable/chunks/singletons.52648179.js","_app/immutable/chunks/index.3820d929.js"];
export const stylesheets = [];
export const fonts = [];
