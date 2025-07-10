# svelte-daisy-toaster

[![NPM](https://img.shields.io/npm/v/@svelio/daisy-toaster)](https://www.npmjs.com/package/@svelio/daisy-toaster)  
[Demo](https://svelio.github.io/daisy-toaster)

A flexible and customizable toast notification system for Svelte, built with DaisyUI.

---

## Installation

Install with your preferred package manager:

```bash
npm i -D @svelio/daisy-toaster
# or
yarn add -D @svelio/daisy-toaster
# or
pnpm add -D @svelio/daisy-toaster
# or
bun add -d @svelio/daisy-toaster
```

---

## Usage

### 1. Initialize in Root Layout

Set up the toaster in your root layout file (recommended: `routes/+layout.svelte`):

```svelte
<script lang="ts">
  import { createToaster, Toaster } from "svelte-daisy-toaster"
  import MyToast from "$lib/components/MyToast.svelte"
  import type { ComponentProps } from "svelte"
  import "../app.css"

  let { children } = $props()

  createToaster<ComponentProps<typeof MyToast>>(MyToast, {
    duration: 3000              // Duration in ms
    debug: true                 // Enable debug mode (don't need to add when using Vite)
    position: ["top", "center"] // Toast position
  })
</script>

<Toaster />
{@render children()}
```

---

### 2. Create a Custom Toast Component

Extend the default `Bread` component with your own props (for example, in `src/lib/components/MyToast.svelte`):

```svelte
<script lang="ts">
  import type { BreadProps } from "$lib/stores/Toaster.svelte.js"
  import Bread from "./Bread.svelte"

  let {
    text = "Empty!"
    ...props
  }: BreadProps & { text: string } = $props()
</script>

<Bread {...props}>
  <p class="text-white">{text}</p>
</Bread>
```

---

### 3. Show Toasts Anywhere

Use the `toaster` API in any Svelte component (for example, in `src/routes/**/*.svelte`):

```svelte
<script lang="ts">
  import { toaster } from "svelte-daisy-toaster"

  toaster.info({ text: "Toast!" })
  toaster.success({ text: "Toast!" })
  toaster.warning({ text: "Toast!" })
  toaster.error({ text: "Toast!" })
  toaster.debug({ text: "Toast!" })

  toaster.toast({
    text: "Toast!"
    type: "info"
    // ...add custom props
  })
</script>
```

- `toaster.debug()` works in Vite DEV mode or when `ToasterConfig.debug` is enabled.

---

## License

[MIT License](./LICENSE)
