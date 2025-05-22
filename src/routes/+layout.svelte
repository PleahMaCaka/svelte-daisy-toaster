<script lang="ts">
import { createToster, Toast, Toster } from "$lib/index.js"
import type { ComponentProps } from "svelte"
import "../app.css"

let { children } = $props()

type ToastProps = ComponentProps<typeof Toast>
createToster<ToastProps>(Toast)
</script>

<Toster />
{@render children()}
