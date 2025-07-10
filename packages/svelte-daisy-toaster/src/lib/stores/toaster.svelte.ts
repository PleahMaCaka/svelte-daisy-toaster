import { DEV } from "esm-env"
import type { Component } from "svelte"
import type { BreadProps, ToasterConfig } from "$lib/types/toast.js"

export class ToasterStore<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation
  P extends Record<string, any> = BreadProps
> {
  // biome-ignore lint/suspicious/noExplicitAny: allow any
  component: Component<P, any, any>
  globalConfig: ToasterConfig
  toasts: P[] = $state([])

  constructor(
    // biome-ignore lint/suspicious/noExplicitAny: allow any
    component: Component<P, any, any>,
    config?: Partial<ToasterConfig>
  ) {
    this.component = component
    this.globalConfig = {
      duration: 3000,
      position: ["top", "center"],
      type: null,
      debug: false,
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

  debug = (props: Omit<P, "type">) => {
    if (!DEV || !this.globalConfig.debug) return

    this.toast({
      ...props,
      type: "debug"
    } as unknown as P)
  }
}

// biome-ignore lint/suspicious/noExplicitAny: allow any
export let toaster: ToasterStore<any>

export const createToaster = <
  // biome-ignore lint/suspicious/noExplicitAny: allow any
  T extends Record<string, any> = BreadProps
>(
  // biome-ignore lint/suspicious/noExplicitAny: allow any
  component: Component<T, any, any>,
  config?: Partial<ToasterConfig>
) => {
  toaster = new ToasterStore<T>(component, config)
  return toaster
}
