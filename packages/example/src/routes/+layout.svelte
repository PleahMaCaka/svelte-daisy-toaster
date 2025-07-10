<script lang="ts">
import MyToast from "$lib/components/CustomToast.svelte"
import type { ComponentProps } from "svelte"
import { createToster, Toster } from "svelte-daisy-toster"
import "../app.css"

let { children } = $props()

createToster<ComponentProps<typeof MyToast>>(MyToast)
</script>

<Toster />
{@render children()}
