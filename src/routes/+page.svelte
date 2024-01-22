<script>
    export let data;
</script>

<p class="text-xl font-bold">Project Daedalus</p>

{#each data.tests as test}
    <p>{test.name}</p>
{/each}