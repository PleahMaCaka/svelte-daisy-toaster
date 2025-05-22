<script lang="ts">
import { Toster, toster } from "svelte-daisy-toster"
</script>

<Toster />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button class="btn btn-info alert" onclick={() => toster.info({ text: "blabla" })}>
  Info
</button>
