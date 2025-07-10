

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.LR0agxx1.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/yK9AgU6K.js","_app/immutable/chunks/BP11S52c.js","_app/immutable/chunks/BpQhbY-y.js","_app/immutable/chunks/CxBi_gzI.js"];
export const stylesheets = ["_app/immutable/assets/0.BdNyyDUo.css"];
export const fonts = [];
