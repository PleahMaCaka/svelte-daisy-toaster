<script lang="ts">
import { toaster } from "$lib/stores/toaster.svelte.js"
import type { AlertType } from "$lib/types/toast.js"
import { type Snippet } from "svelte"

let {
  type = null,
  duration,
  children
}: {
  type: AlertType | null
  duration?: number
  children?: Snippet
} = $props()

let timeoutRef = (() =>
  new Promise(resolve =>
    resolve(
      setTimeout(() => {
        toaster.toasts.pop()
      }, duration || toaster.globalConfig.duration)
    )
  ))()
</script>

<div
  class={`alert ${type && `alert-${type}`}`}
  role="alert"
>
  {@render children?.()}
</div>
