# svelte-daisy-toster

[NPM](https://www.npmjs.com/package/svelte-daisy-toster)

## Installation

```bash
npm install -D svelte-daisy-toster
yarn add -D svelte-daisy-toster
pnpm install -D svelte-daisy-toster
bun add -d svelte-daisy-toster
```

## Usage

`+layout.svelte`
```svelte
<script lang="ts">
  import { Toster } from "svelte-daisy-toster"
  
  <Toster />
</script>
```

`lib/components/MyToast.svelte`
```svelte
<script lang="ts">
  import type { BreadProps } from "$lib/stores/Toster.svelte.js"
  import Bread from "./Bread.svelte"
  
  let { 
    text = "Empty!",
    // add own props
    ...props 
  }: BreadProps & {
    text: string 
  } = $props()
</script>

<Bread {...props}>
  <p class="text-white">
    {text}
  </p>
</Bread>
```

`./lib/toster.ts`
```ts
<script lang="ts">
  import MyToast from "$lib/components/MyToast.svelte"
  import { createToster } from "svelte-daisy-toster"
  // import { Toast } from "svelte-daisy-toster" // for default toast
  
  type MyToastProps = ComponentProps<typeof MyToast>
  const toster = createToster<MyToastProps>(MyToast, {
    position: ["top", "center"],
    duration: 3000, // 3s by default
    type: "info", // default alert type for toster.toast()
  })
  
  toster.info({ text: "Toast!" /* ...add my custom props */ })
  toster.success({ text: "Toast!" /* ...add my custom props */ })
  toster.warning({ text: "Toast!" /* ...add my custom props */ })
  toster.error({ text: "Toast!" /* ...add my custom props */ )}
  // or
  toster.toast({
    text: "Toast!",
    type: "info",
    // ...add my custom props
  })
</script>
```

# License
[MIT License](./LICENSE)
