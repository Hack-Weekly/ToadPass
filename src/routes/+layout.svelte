<script>
    import "../app.css";
    import Navigation from "$lib/components/Navigation.svelte";
    import { page } from "$app/stores";
</script>
{#if $page.route.id === "/"}
    <Navigation />
{/if}
<slot />