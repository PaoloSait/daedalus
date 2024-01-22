<script>
    export let data;
</script>

<h1>Project Daedalus</h1>

{#each data.tests as test}
    <p>{test.name}</p>
{/each}

