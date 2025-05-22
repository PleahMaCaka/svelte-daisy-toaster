<script lang="ts">
import { toster } from "$lib/stores/toster.svelte.js"
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
        toster.toasts.pop()
      }, duration || toster.globalConfig.duration)
    )
  ))()
</script>

<div
  class={`alert ${type && `alert-${type}`}`}
  role="alert"
>
  {@render children?.()}
</div>
