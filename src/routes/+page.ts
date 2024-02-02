import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "5nxp86fq",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false
});

export async function load({ }) {
    const data = await client.fetch(`*[_type == "article"] | order(publishedAt desc) {
        title,
        body,
        publishedAt,
        abstract,
        "slug": slug.current,
        "author": *[_type == "author" && _id == ^.author._ref]
    }[0..3]`);
    console.log(data[0].slug)
    if (data) {
        return {
            articles: data
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}