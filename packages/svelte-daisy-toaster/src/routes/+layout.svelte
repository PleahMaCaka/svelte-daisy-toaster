<script lang="ts">
import type { ComponentProps } from "svelte"
import { createToaster, Toast, Toaster } from "$lib/index.js"
import "../app.css"

let { children } = $props()

type ToastProps = ComponentProps<typeof Toast>
createToaster<ToastProps>(Toast)
</script>

<Toaster />
{@render children()}
