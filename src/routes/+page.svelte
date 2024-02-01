<script>
    import Tagline from "$lib/components/Tagline.svelte";
    import ArticlesSection from "$lib/components/ArticlesSection.svelte";
    import InfoSection from "$lib/components/InfoSection.svelte";
    export let data;
</script>

<div>
    <Tagline />
    <ArticlesSection />
    <InfoSection />
    <div class="flex-col flex gap-4 px-10 bg-[#f4f4f4]">
        {#each data.tests as test}
            <p>{test.name}</p>
        {/each}
    </div>
</div>
