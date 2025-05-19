<script lang="ts">
import CustomToast from "$lib/components/CustomToast.svelte"
import type { ComponentProps } from "svelte"
import { createToster, Toster } from "svelte-daisy-toaster"

let toster = createToster<ComponentProps<typeof CustomToast>>()
toster.component = CustomToast
</script>

<Toster />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button class="btn btn-info alert" onclick={() => toster.info({ text: "blabla" })}>
  Info
</button>
