<script lang="ts">
import type { BreadProps } from "$lib/types/toast.js"
import Bread from "./Bread.svelte"

let { text = "Empty!", ...props }: BreadProps & { text: string } =
  $props()
</script>

<Bread {...props}>
  <p class="text-white">{text}</p>
</Bread>
