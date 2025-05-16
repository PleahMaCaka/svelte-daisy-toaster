<script lang="ts">
import Toster from "$lib/components/Toster.svelte"
import { toster } from "$lib/stores/Toster.svelte.js"
import { alertType } from "$lib/types/Alert.js"
</script>

<Toster />

<main class="size-full flex flex-col justify-center items-center py-16 px-20">
  <h1 class="text-2xl font-bold tracking-wider pb-2">
    Welcome to
    <b class="text-orange-400">svelte -</b>
    <b class="text-sky-200">daisy -</b>
    <b class="text-gray-400">toster</b>
    !
  </h1>

  <p>Create your toast using `svelte-daisy-toster` and DaisyUI!</p>
  <p>Visit
    <a
      class="text-blue-400"
      href="https://github.com/pleahmacaka/svelte-daisy-toster"
    >
      svelte-daisy-toster
    </a>
    to read the documentation
  </p>

  <section class="flex gap-4 p-8">
    {#each alertType as type}
      <button
        class={`btn btn-${type}`}
        onclick={() => {
          toster.toast({
            text: `${type}`,
            type
          })
        }}
      >
        {type.toUpperCase()}
      </button>
    {/each}
  </section>
</main>
