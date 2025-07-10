import { DEV } from "esm-env";
export class ToasterStore {
    // biome-ignore lint/suspicious/noExplicitAny: allow any
    component;
    globalConfig;
    toasts = $state([]);
    constructor(
    // biome-ignore lint/suspicious/noExplicitAny: allow any
    component, config) {
        this.component = component;
        this.globalConfig = {
            duration: 3000,
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
        // TODO option for replace unshift to push
        this.toasts.unshift(props);
    };
    info = (props) => this.toast({
        ...props,
        type: "info"
    });
    success = (props) => this.toast({
        ...props,
        type: "success"
    });
    warning = (props) => this.toast({
        ...props,
        type: "warning"
    });
    error = (props) => this.toast({
        ...props,
        type: "error"
    });
    debug = (props) => {
        if (!DEV || !this.globalConfig.debug)
            return;
        this.toast({
            ...props,
            type: "debug"
        });
    };
}
// biome-ignore lint/suspicious/noExplicitAny: allow any
export let toaster;
export const createToaster = (
// biome-ignore lint/suspicious/noExplicitAny: allow any
component, config) => {
    toaster = new ToasterStore(component, config);
    return toaster;
};
