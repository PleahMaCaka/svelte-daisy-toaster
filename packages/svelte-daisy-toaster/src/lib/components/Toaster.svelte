<script lang="ts">
import { toaster } from "$lib/stores/toaster.svelte.js"
import type {
  ToasterConfig,
  ToastPosition
} from "$lib/types/toast.js"

let {
  config
}: {
  config?: Omit<ToasterConfig, "position"> & {
    position?: ToastPosition[]
  }
} = $props()

if (config) {
  toaster.globalConfig = {
    ...toaster.globalConfig,
    ...config
  }
}
</script>

<div class="fixed h-screen min-w-screen pointer-events-none">
  <div class="flex flex-col justify-between">
    <div
      class={
        `toast
          ${toaster.globalConfig.position
            ?.map(pos => `toast-${pos}`)
            .join(" ")}`
      }
    >
    {#each toaster.toasts as props}
      <toaster.component {...props} />
    {/each}
    </div>
  </div>
</div>
