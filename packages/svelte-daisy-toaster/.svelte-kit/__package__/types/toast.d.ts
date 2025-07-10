import type { ComponentProps } from "svelte";
import type { Bread } from "../index.js";
export declare const alertType: readonly ["info", "success", "warning", "error", "debug"];
export type AlertType = (typeof alertType)[number];
export type ToastPosition = "start" | "center" | "end" | "top" | "middle" | "bottom";
export interface ToasterConfig {
    position?: ToastPosition[];
    duration?: number;
    type: AlertType | null;
    debug: boolean;
}
export type BreadProps = ComponentProps<typeof Bread>;
