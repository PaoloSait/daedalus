<script lang="ts">
    import type { PageData } from "./$types";
    import { PortableText } from "@portabletext/svelte";
    import H1 from "$lib/components/h1.svelte";

    export let data: PageData;
    // console.log(data);
    // console.log(data.article.author);
</script>

<div class="w-full flex flex-col items-center my-32">
    <div class="max-w-[600px]">
        <img class="max-h-64 mb-2" src={data.article.imageUrl} alt="">
        <div class="text-2xl font-bold">{data.article?.title}</div>
        <div>{data.article.publishedAt} &#8226; {data.article.author[0].name}</div>
        <div class="h-[2px] mt-2 bg-gray-200"></div>
        <PortableText
            value={data.article.body}
            components={{
                types: {},
                marks: {},
                block: {
                    h1: H1,
                    h2: H1,
                },
                list: {},
                listItem: {},
            }}
        />
    </div>
</div>
