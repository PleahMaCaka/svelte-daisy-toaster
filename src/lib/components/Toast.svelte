<script lang="ts">
import type { BreadProps } from "$lib/stores/toster.svelte.js"
import Bread from "./Bread.svelte"

let { text = "Empty!", ...props }: BreadProps & { text: string } =
  $props()
</script>

<Bread {...props}>
  <p class="text-white">{text}</p>
</Bread>
