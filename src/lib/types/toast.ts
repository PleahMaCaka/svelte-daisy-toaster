export const alertType = [
  "info",
  "success",
  "warning",
  "error"
] as const
export type AlertType = (typeof alertType)[number]

export type ToastPosition =
  | "start"
  | "center"
  | "end"
  | "top"
  | "middle"
  | "bottom"
