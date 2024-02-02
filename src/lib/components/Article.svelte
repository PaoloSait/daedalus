
<script>
    /**
     * @type {{ title: any; }}
     */
     export let article;
</script>

<a href={`articles/${article.slug}`} class="w-full bg-white p-4 flex flex-col h-80 gap-2 transition ease-in-out hover:scale-105">
    <div class="bg-[#F4F4F4] h-1/2"></div>
    <div class="font-bold"> {article.title}</div>
        <div class=""> {article.abstract}</div>

    <div class="grow"></div>
    <div class="flex">
        <div>{article.publishedAt}</div>
        <div class="grow"></div>
        <div>4 min read</div>
    </div>
</a>