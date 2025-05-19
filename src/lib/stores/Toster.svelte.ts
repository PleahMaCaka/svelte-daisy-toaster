import Bread from "$lib/components/Bread.svelte"
import Toast from "$lib/components/Toast.svelte"
import type { AlertType } from "$lib/types/Alert.js"
import type { ToastPosition } from "$lib/types/Toast.js"
import type { Component, ComponentProps } from "svelte"

export interface TosterConfig {
  position?: ToastPosition[]
  timeout?: number
  type: AlertType | null
}

export type SpecificToastConfig = Omit<
  TosterConfig,
  "type" | "position"
>

// Bread = BaseToast
export type BreadProps = ComponentProps<typeof Bread>

// biome-ignore lint/suspicious/noExplicitAny: Cannot detect reference
export class Toster<C extends Record<string, any>> {
  component: typeof Bread = Bread

  /**
   * @description Global configuration.
   */
  globalConfig: TosterConfig = {
    position: ["top", "center"],
    timeout: 3000,
    type: null
  }

  toasts: C[] = $state([])

  /**
   * @description Show toast!
   * @param props
   */
  toast = (props: C) => {
    // TODO option for replace unshift to push
    this.toasts.unshift(props as unknown as C)
  }

  info = (props: Omit<C, "type">) =>
    this.toast({
      ...props,
      type: "info"
    } as unknown as C)

  success = (props: Omit<C, "type">) =>
    this.toast({
      ...props,
      type: "success"
    } as unknown as C)

  warning = (props: Omit<C, "type">) =>
    this.toast({
      ...props,
      type: "warning"
    } as unknown as C)

  error = (props: Omit<C, "type">) =>
    this.toast({
      ...props,
      type: "error"
    } as unknown as C)
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export let toster: Toster<any> = new Toster<any>()

export const createToster = <T = ComponentProps<typeof Bread>>() => {
  const newToster = new Toster<T & ComponentProps<typeof Bread>>()
  toster = newToster
  return toster
}

// export type ToastComponent<T> = {
//   // biome-ignore lint/suspicious/noExplicitAny: Cannot detect reference
//   [K in keyof T]: T[K] extends Component<infer P, any, any>
//     ? ComponentProps<T[K]> & { type: AlertType }
//     : never
// }[keyof T]
