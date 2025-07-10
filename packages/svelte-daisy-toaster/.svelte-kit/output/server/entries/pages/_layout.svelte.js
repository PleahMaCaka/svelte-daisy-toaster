import "clsx";
import { u as push, x as attr_class, w as pop, y as spread_props, z as escape_html, A as ensure_array_like } from "../../chunks/index.js";
class ToasterStore {
  // biome-ignore lint/suspicious/noExplicitAny: allow any
  component;
  globalConfig;
  toasts = [];
  constructor(component, config) {
    this.component = component;
    this.globalConfig = {
      duration: 3e3,
      position: ["top", "center"],
      type: null,
      debug: false,
      ...config
    };
  }
  /**
   * @description Show toast!
   * @param props
   */
  toast = (props) => {
    this.toasts.unshift(props);
  };
  info = (props) => this.toast({ ...props, type: "info" });
  success = (props) => this.toast({ ...props, type: "success" });
  warning = (props) => this.toast({ ...props, type: "warning" });
  error = (props) => this.toast({ ...props, type: "error" });
  debug = (props) => {
    return;
  };
}
let toaster;
const createToaster = (component, config) => {
  toaster = new ToasterStore(component, config);
  return toaster;
};
function Bread($$payload, $$props) {
  push();
  let { type = null, duration, children } = $$props;
  (() => new Promise((resolve) => resolve(setTimeout(
    () => {
      toaster.toasts.pop();
    },
    duration || toaster.globalConfig.duration
  ))))();
  $$payload.out += `<div${attr_class(`alert ${type && `alert-${type}`}`)} role="alert">`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function Toast($$payload, $$props) {
  let { text = "Empty!", $$slots, $$events, ...props } = $$props;
  Bread($$payload, spread_props([
    props,
    {
      children: ($$payload2) => {
        $$payload2.out += `<p class="text-white">${escape_html(text)}</p>`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Toaster($$payload, $$props) {
  push();
  let { config } = $$props;
  if (config) {
    toaster.globalConfig = { ...toaster.globalConfig, ...config };
  }
  const each_array = ensure_array_like(toaster.toasts);
  $$payload.out += `<div class="fixed h-screen min-w-screen pointer-events-none"><div class="flex flex-col justify-between"><div${attr_class(`toast
          ${toaster.globalConfig.position?.map((pos) => `toast-${pos}`).join(" ")}`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let props = each_array[$$index];
    $$payload.out += `<!---->`;
    toaster.component($$payload, spread_props([props]));
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  createToaster(Toast);
  Toaster($$payload, {});
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
