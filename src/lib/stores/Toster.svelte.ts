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

export class Toster {
  component: Component<ComponentProps<typeof Toast>> = Toast

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
  ) => this.toast({ ...props, type: "info" })

  success = (
    props: Omit<ComponentProps<typeof this.component>, "type">
  ) => this.toast({ ...props, type: "success" })

  warning = (
    props: Omit<ComponentProps<typeof this.component>, "type">
  ) => this.toast({ ...props, type: "warning" })

  error = (
    props: Omit<ComponentProps<typeof this.component>, "type">
  ) => this.toast({ ...props, type: "error" })
}

export const toster = new Toster()
export const toast = toster.toast
