<script lang="ts">
    import type { Article } from "$lib";
    import ArticleComponent from "./Article.svelte";
    export let articles : Article[];
</script>
<div class="bg-[#F4F4F4] px-10 py-5">
    <div class="border-2 border-t-0 border-b-0 border-l-[#60C4F0] border-r-[#60C4F0] h-full flex flex-col px-10 gap-8">
        <div class="text-lg font-bold"> The latest news about spinal injuries:</div>
        <div class="w-full flex flex-row gap-10">
            {#each articles as article}
                <ArticleComponent article={article} />
            {/each}
        </div>
    </div>
</div>