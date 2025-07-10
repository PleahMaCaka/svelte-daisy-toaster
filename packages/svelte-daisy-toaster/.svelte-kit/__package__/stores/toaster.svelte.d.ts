import type { Component } from "svelte";
import type { BreadProps, ToasterConfig } from "../types/toast.js";
export declare class ToasterStore<P extends Record<string, any> = BreadProps> {
    component: Component<P, any, any>;
    globalConfig: ToasterConfig;
    toasts: P[];
    constructor(component: Component<P, any, any>, config?: Partial<ToasterConfig>);
    /**
     * @description Show toast!
     * @param props
     */
    toast: (props: P) => void;
    info: (props: Omit<P, "type">) => void;
    success: (props: Omit<P, "type">) => void;
    warning: (props: Omit<P, "type">) => void;
    error: (props: Omit<P, "type">) => void;
    debug: (props: Omit<P, "type">) => void;
}
export declare let toaster: ToasterStore<any>;
export declare const createToaster: <T extends Record<string, any> = BreadProps>(component: Component<T, any, any>, config?: Partial<ToasterConfig>) => ToasterStore<any>;
