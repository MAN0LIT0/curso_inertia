<template>
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
