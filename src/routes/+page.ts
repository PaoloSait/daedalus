import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "5nxp86fq",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false
});

export async function load({ }) {
    const data = await client.fetch(`*[_type == "test"]`);

    if (data) {
        return {
            tests: data
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}