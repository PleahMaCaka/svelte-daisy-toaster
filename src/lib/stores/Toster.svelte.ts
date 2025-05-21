import Toast from "$lib/components/Toast.svelte"
import type { Bread } from "$lib/index.js"
import type { AlertType } from "$lib/types/Alert.js"
import type { ToastPosition } from "$lib/types/Toast.js"
import {
  type Component,
  type ComponentProps,
  type Snippet,
  setContext
} from "svelte"

export interface TosterConfig {
  position?: ToastPosition[]
  duration?: number
  type: AlertType | null
}

export type SpecificToastConfig = Omit<
  TosterConfig,
  "type" | "position"
>

// Bread = BaseToast
export type BreadProps = ComponentProps<typeof Bread>

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export class Toster<P extends Record<string, any> = BreadProps> {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  component: Component<P, any, any>
  globalConfig: TosterConfig
  toasts: P[] = $state([])

  constructor(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    component: Component<P, any, any>,
    config?: Partial<TosterConfig>
  ) {
    this.component = component
    this.globalConfig = {
      duration: 3000,
      position: ["top", "center"],
      type: null,
      ...config
    }
  }

  /**
   * @description Show toast!
   * @param props
   */
  toast = (props: P) => {
    // TODO option for replace unshift to push
    this.toasts.unshift(props as unknown as P)
  }

  info = (props: Omit<P, "type">) =>
    this.toast({
      ...props,
      type: "info"
    } as unknown as P)

  success = (props: Omit<P, "type">) =>
    this.toast({
      ...props,
      type: "success"
    } as unknown as P)

  warning = (props: Omit<P, "type">) =>
    this.toast({
      ...props,
      type: "warning"
    } as unknown as P)

  error = (props: Omit<P, "type">) =>
    this.toast({
      ...props,
      type: "error"
    } as unknown as P)
}

export const createToster = <
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T extends Record<string, any> = BreadProps
>(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  component: Component<T, any, any>,
  config?: Partial<TosterConfig>
): Toster<T> => {
  const toster = new Toster<T>(component, config)
  setContext("toster", toster)
  return toster
}
