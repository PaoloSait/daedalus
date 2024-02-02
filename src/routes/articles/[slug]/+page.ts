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
    const data = await client.fetch(`*[_type == "article" && url == ${params.slug}]`);

    if (data) {
        return {
            article: data[0]
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
};