import type Bread from "$lib/components/Bread.svelte"
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

export class Toster<C extends ComponentProps<typeof Bread>> {
  // biome-ignore lint/suspicious/noExplicitAny: Cannot detect reference
  component: Component<C, any, any> = Toast

  /**
   * @description Global configuration.
   */
  globalConfig: TosterConfig = {
    position: ["top", "center"],
    timeout: 1000,
    type: null
  }

  toasts: BreadProps[] = $state([])

  /**
   * @description Show toast!
   * @param props
   */
  toast = (props: ComponentProps<typeof this.component>) => {
    // TODO option for replace unshift to push
    this.toasts.unshift(props)
  }

  info = (
    props: Omit<ComponentProps<typeof this.component>, "type">
  ) =>
    this.toast({
      ...props,
      type: "info"
    } as unknown as ComponentProps<typeof this.component>)

  success = (
    props: Omit<ComponentProps<typeof this.component>, "type">
  ) =>
    this.toast({
      ...props,
      type: "success"
    } as unknown as ComponentProps<typeof this.component>)

  warning = (
    props: Omit<ComponentProps<typeof this.component>, "type">
  ) =>
    this.toast({
      ...props,
      type: "warning"
    } as unknown as ComponentProps<typeof this.component>)

  error = (
    props: Omit<ComponentProps<typeof this.component>, "type">
  ) =>
    this.toast({
      ...props,
      type: "error"
    } as unknown as ComponentProps<typeof this.component>)
}

// biome-ignore lint/suspicious/noExplicitAny: Cannot detect reference
export let tosterRef: Toster<any>

export const createToster = <T = ComponentProps<typeof Toast>>() => {
  const toster = new Toster<T & ComponentProps<typeof Bread>>()
  tosterRef = toster
  return toster
}

// export type ToastComponent<T> = {
//   // biome-ignore lint/suspicious/noExplicitAny: Cannot detect reference
//   [K in keyof T]: T[K] extends Component<infer P, any, any>
//     ? ComponentProps<T[K]> & { type: AlertType }
//     : never
// }[keyof T]
