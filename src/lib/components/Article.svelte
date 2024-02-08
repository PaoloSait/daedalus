<script lang="ts">
    import type { Article } from "$lib";
    import dayjs from "dayjs";
    import relativeTime from "dayjs/plugin/relativeTime";
    dayjs.extend(relativeTime);
    export let article: Article;
    let date = dayjs(article.publishedAt).fromNow()
    date = date.charAt(0).toUpperCase() + date.slice(1)
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
        <div>{date}</div>
        <div class="grow"></div>
        <div>4 min read</div>
    </div>
</a>
