<script>
    import Tagline from "$lib/components/Tagline.svelte";
    import ArticlesSection from "$lib/components/ArticlesSection.svelte"
    export let data;
</script>

<div>
    <Tagline />
    <ArticlesSection />
    <div class="flex-col flex gap-4 px-10">
    {#each data.tests as test}
        <p>{test.name}</p>
    {/each}
</div>
</div>
