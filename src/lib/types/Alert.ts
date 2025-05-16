export const alertType = [
  "info",
  "success",
  "warning",
  "error"
] as const
export type AlertType = (typeof alertType)[number]
