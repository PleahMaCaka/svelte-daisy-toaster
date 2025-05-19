<script lang="ts">
import { tosterRef } from "$lib/stores/Toster.svelte.js"
import type { AlertType } from "$lib/types/Alert.js"
import { type Snippet } from "svelte"

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
        tosterRef.toasts.pop()
      }, timeout || tosterRef.globalConfig.timeout)
    )
  ))()
</script>

<div
  class={`alert ${type && `alert-${type}`}`}
  role="alert"
>
  {@render children?.()}
</div>
