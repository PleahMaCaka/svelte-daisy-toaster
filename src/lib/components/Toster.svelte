<script lang="ts">
import {
  type TosterConfig,
  toster
} from "$lib/stores/Toster.svelte.js"
import type { ToastPosition } from "$lib/types/Toast.js"

let {
  config
}: {
  config?: Omit<TosterConfig, "position"> & {
    position?: ToastPosition[]
  }
} = $props()

if (config) {
  toster.globalConfig = {
    ...toster.globalConfig,
    ...config
  }
}
</script>

<div class="fixed h-screen min-w-screen pointer-events-none">
  <div class="flex flex-col justify-between">
    <div
      class={
        `toast
          ${toster.globalConfig.position
            ?.map(pos => `toast-${pos}`)
            .join(" ")}`
      }
    >
    {#each toster.toasts as props}
      <toster.component {...props} />
    {/each}
    </div>
  </div>
</div>
