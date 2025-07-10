import { A as ensure_array_like, x as attr_class, z as escape_html, w as pop, u as push } from "../../chunks/index.js";
const alertType = [
  "info",
  "success",
  "warning",
  "error",
  "debug"
];
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(alertType);
  $$payload.out += `<main class="size-full flex flex-col justify-center items-center py-16 px-20"><h1 class="text-2xl font-bold tracking-wider pb-2">Welcome to <b class="text-orange-400">svelte -</b> <b class="text-sky-200">daisy -</b> <b class="text-gray-400">toaster</b> !</h1> <p>Create your toast using \`svelte-daisy-toaster\` and DaisyUI!</p> <p>Visit <a class="text-blue-400" href="https://github.com/pleahmacaka/svelte-daisy-toaster">svelte-daisy-toaster</a> to read the documentation</p> <section class="flex gap-4 p-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let type = each_array[$$index];
    $$payload.out += `<button${attr_class(`btn btn-${type}`)}>${escape_html(type.toUpperCase())}</button>`;
  }
  $$payload.out += `<!--]--></section></main>`;
  pop();
}
export {
  _page as default
};
