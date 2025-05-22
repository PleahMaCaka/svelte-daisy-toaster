import type { BreadProps, TosterConfig } from "$lib/types/toast.js"
import type { Component } from "svelte"

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export class TosterStore<P extends Record<string, any> = BreadProps> {
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
    if (!import.meta.env.DEV || !this.globalConfig.debug) return

    this.toast({
      ...props,
      type: "debug"
    } as unknown as P)
  }
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export let toster: TosterStore<any> | null = null

export const createToster = <
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T extends Record<string, any> = BreadProps
>(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  component: Component<T, any, any>,
  config?: Partial<TosterConfig>
) => {
  toster = new TosterStore<T>(component, config)
  return toster
}
