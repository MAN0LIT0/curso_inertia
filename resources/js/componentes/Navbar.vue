<template>
    <nav>
        <ul>
            <li><Link href="/" :class="{'font-bold': $page.component == 'Home'}">Home</Link></li>
            <li><Link href="/users" :class="{'font-bold': $page.component == 'Users'}">Users</Link></li>
            <li><Link href="/settings" :class="{'font-bold': $page.component == 'Settings'}">Settings</Link></li>
            <li><Link href="/logout" method="post" :data="{foo:'secso'}" as="button">Log Out</Link></li>
        </ul>
    </nav>
</template>
<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
    components: {
        Link
    }
}
</script>
<style scoped>
    a {
        text-decoration: none;
    }
    .font-bold{
        color: rgb(41, 197, 62);
        font-weight: bold;
        text-decoration: underline;
    }

</style>
