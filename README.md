# svelte-daisy-toster

[![NPM](https://img.shields.io/npm/v/svelte-daisy-toster)](https://www.npmjs.com/package/svelte-daisy-toster)  
[Demo](https://pleahmacaka.github.io/svelte-daisy-toster)

A flexible and customizable toast notification system for Svelte, built with DaisyUI.

---

## Installation

Install with your preferred package manager:

```bash
npm i -D svelte-daisy-toster
# or
yarn add -D svelte-daisy-toster
# or
pnpm add -D svelte-daisy-toster
# or
bun add -d svelte-daisy-toster
```

---

## Usage

### 1. Initialize in Root Layout

Set up the toster in your root layout file (recommended: `routes/+layout.svelte`):

```svelte
<script lang="ts">
  import { createToster, Toster } from "svelte-daisy-toster"
  import MyToast from "$lib/components/MyToast.svelte"
  import type { ComponentProps } from "svelte"
  import "../app.css"

  let { children } = $props()

  createToster<ComponentProps<typeof MyToast>>(MyToast, {
    duration: 3000              // Duration in ms
    debug: true                 // Enable debug mode (don't need to add when using Vite)
    position: ["top", "center"] // Toast position
  })
</script>

<Toster />
{@render children()}
```

---

### 2. Create a Custom Toast Component

Extend the default `Bread` component with your own props (for example, in `src/lib/components/MyToast.svelte`):

```svelte
<script lang="ts">
  import type { BreadProps } from "$lib/stores/Toster.svelte.js"
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

Use the `toster` API in any Svelte component (for example, in `src/routes/**/*.svelte`):

```svelte
<script lang="ts">
  import { toster } from "svelte-daisy-toster"

  toster.info({ text: "Toast!" })
  toster.success({ text: "Toast!" })
  toster.warning({ text: "Toast!" })
  toster.error({ text: "Toast!" })
  toster.debug({ text: "Toast!" })

  toster.toast({
    text: "Toast!"
    type: "info"
    // ...add custom props
  })
</script>
```

- `toster.debug()` works in Vite DEV mode or when `TosterConfig.debug` is enabled.

---

## License

[MIT License](./LICENSE)
