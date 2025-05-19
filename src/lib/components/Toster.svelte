<script lang="ts">
import {
  type TosterConfig,
  tosterRef
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
  tosterRef.globalConfig = {
    ...tosterRef.globalConfig,
    ...config
  }
}
</script>

<div class="fixed h-screen min-w-screen pointer-events-none">
  <div class="flex flex-col justify-between">
    <div
      class={
        `toast
          ${tosterRef.globalConfig.position
            ?.map(pos => `toast-${pos}`)
            .join(" ")}`
      }
    >
    {#each tosterRef.toasts as props}
      <tosterRef.component {...props} />
    {/each}
    </div>
  </div>
</div>
