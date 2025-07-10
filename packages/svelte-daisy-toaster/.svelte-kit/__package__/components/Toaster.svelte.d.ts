import type { ToasterConfig, ToastPosition } from "../types/toast.js";
type $$ComponentProps = {
    config?: Omit<ToasterConfig, "position"> & {
        position?: ToastPosition[];
    };
};
declare const Toaster: import("svelte").Component<$$ComponentProps, {}, "">;
type Toaster = ReturnType<typeof Toaster>;
export default Toaster;
