<script>
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Nav />
<main class="min-h-[600px] mt-[75px]">
    <slot />
</main>
<Footer />
