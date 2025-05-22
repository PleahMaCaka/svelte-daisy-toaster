<script lang="ts">
import { Toast, Toaster, createToaster } from "$lib/index.js"
import type { ComponentProps } from "svelte"
import "../app.css"

let { children } = $props()

type ToastProps = ComponentProps<typeof Toast>
createToaster<ToastProps>(Toast)
</script>

<Toaster />
{@render children()}
