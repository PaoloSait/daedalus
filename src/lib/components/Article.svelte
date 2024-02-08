<script lang="ts">
    import type { Article } from "$lib";
    // Article to base component on
    export let article: Article;
    // Format date of article
    import { format } from "timeago.js";
</script>

<a
    href={`articles/${article.slug}`}
    class="w-full bg-white p-4 flex flex-col h-[400px] gap-2 transition ease-in-out hover:scale-105"
>
    <img src={article.imageUrl} class="bg-[#F4F4F4] h-1/2" alt="" />
    <div class="font-bold">{article.title}</div>
    <div class="">{article.abstract}</div>

    <div class="grow"></div>
    <div class="flex">
        <div>{format(article.publishedAt)}</div>
        <div class="grow"></div>
        <div>{"length"}</div>
    </div>
</a>
