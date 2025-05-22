import type { Bread } from "$lib/index.js"
import type { ComponentProps } from "svelte"

export const alertType = [
  "info",
  "success",
  "warning",
  "error",
  "debug"
] as const
export type AlertType = (typeof alertType)[number]

export type ToastPosition =
  | "start"
  | "center"
  | "end"
  | "top"
  | "middle"
  | "bottom"

export interface TosterConfig {
  position?: ToastPosition[]
  duration?: number
  type: AlertType | null
  debug: boolean
}

// Bread = BaseToast
export type BreadProps = ComponentProps<typeof Bread>
