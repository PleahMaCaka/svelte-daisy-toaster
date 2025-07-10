import { type Snippet } from "svelte";
import type { AlertType } from "../types/toast.js";
type $$ComponentProps = {
    type: AlertType | null;
    duration?: number;
    children?: Snippet;
};
declare const Bread: import("svelte").Component<$$ComponentProps, {}, "">;
type Bread = ReturnType<typeof Bread>;
export default Bread;
