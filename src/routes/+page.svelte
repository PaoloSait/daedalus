<script>
    export let data;
    console.log(data.tests)
</script>

<h1>Project Daedalus</h1>

{#each data.tests as test}
    <p>{test.name}</p>
{/each}

