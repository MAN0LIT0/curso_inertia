<template>
    <Head>
        <title>Anime List</title>
    </Head>
    <Navbar></Navbar>
    <section>
        <slot />
    </section>
</template>
<script>
import Navbar from "../componentes/Navbar.vue";
export default {
    components: {
        Navbar
    },
}
</script>
<style>
</style>
