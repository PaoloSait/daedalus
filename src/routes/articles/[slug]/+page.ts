import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "5nxp86fq",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false
});


export const load: PageLoad = async ({ params }) => {
    const data = await client.fetch(`*[_type == "article" && slug.current == "${params.slug}"]`);
    if (data[0]) {
        return {
            article: data[0]
        };
    }
    return {
        status: 404,
        body: new Error("Page not found")
    };
};