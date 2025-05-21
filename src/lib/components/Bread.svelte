<script lang="ts">
import type { Toster } from "$lib/stores/Toster.svelte.js"
import type { AlertType } from "$lib/types/Alert.js"
import { type Snippet, getContext } from "svelte"

const toster = getContext<Toster>("toster")

let {
  type = null,
  timeout,
  children
}: {
  type: AlertType | null
  timeout?: number
  children?: Snippet
} = $props()

let timeoutRef = (() =>
  new Promise(resolve =>
    resolve(
      setTimeout(() => {
        toster.toasts.pop()
      }, timeout || toster.globalConfig.duration)
    )
  ))()
</script>

<div
  class={`alert ${type && `alert-${type}`}`}
  role="alert"
>
  {@render children?.()}
</div>
