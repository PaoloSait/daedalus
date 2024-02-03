<script lang="ts">
    import { Input, Select, Textarea } from "flowbite-svelte";
    import { Button } from "flowbite-svelte";
    let selected: string;
    let options = [
        { value: "mr", name: "Case Notes Review" },
        { value: "mq", name: "Medical Question" },
        { value: "other", name: "Other" },
    ];
</script>

<div class="background h-full md:py-14 md:px-28 py-14 px-6 hidden md:flex">
    <div class="flex flex-col w-full">
        <div class="text-5xl font-semibold mb-5">Contact</div>
        <div class="flex flex-col w-full gap-5">
            <div>
                Please use the form below to request a medical review or contact
                us with any other questions about cauda equina. Our medical team
                will review your message and get back to you shortly.
            </div>
            <form class="w-1/2 flex flex-col gap-3" method="POST">
                <Input name="name" placeholder="Name" type="text" />
                <Input name="email" placeholder="Email" type="email" />
                <Select
                    id="select"
                    items={options}
                    placeholder="Reason for contact..."
                    bind:value={selected}
                />
                {#if selected == "mr"}
                    <Textarea
                        name="details"
                        placeholder="Details for Case Review"
                        rows="4"
                    />
                {:else}
                    <Textarea
                        name="message"
                        placeholder="Message"
                        rows="4"
                    />
                {/if}
                <Button>Send</Button>
            </form>
        </div>
    </div>
</div>
