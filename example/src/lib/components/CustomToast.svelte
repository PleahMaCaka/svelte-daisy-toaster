<script lang="ts">
import { Bread, type BreadProps } from "svelte-daisy-toaster"

let { text = "Empty!", ...props }: BreadProps & { text: string } =
  $props()
</script>

<Bread {...props}>
  <p class="text-white">{text}</p>
</Bread>
