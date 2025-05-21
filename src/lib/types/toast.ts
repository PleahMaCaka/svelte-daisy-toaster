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
