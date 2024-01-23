<script>
    import { ImagePlaceholder, Skeleton } from "flowbite-svelte";

    export let data;
</script>

<div class="px-20 flex-col flex gap-4">
    <p class="text-xl font-bold">Project Daedalus</p>

    {#each data.tests as test}
        <p>{test.name}</p>
    {/each}
    <ImagePlaceholder />
    <Skeleton size="xxl"/>
</div>
