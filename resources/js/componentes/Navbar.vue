<template>
    <nav class="nav">
        <ul>
            <li><Link href="/" class="icon">Animes Site</Link></li>
            <li><Link href="/" :class="{'font-bold': $page.component == 'Home'}">Home</Link></li>
            <li><Link href="/users" :class="{'font-bold': $page.component == 'Users'}">Users</Link></li>
            <li><Link href="/settings" :class="{'font-bold': $page.component == 'Settings'}">Settings</Link></li>
            <li><Link href="/logout" method="post" class="btn" :data="{foo:'secso'}" as="button">Log Out</Link></li>
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
    .nav {
        background-color: rgb(216, 193, 236);
    }
    .nav ul {
        display: flex;
        flex-direction: row;
        padding: 5px 10px;
        align-content: center;
        align-items: center;
        justify-content: space-between;
    }
    .nav ul li {
        list-style: none;
    }
    .btn {
        padding: 5px;
        border: 1px solid rgb(212, 82, 238);
        border-radius: 10px;
        color: rgb(212, 82, 238);
        transition: .5s;
    }
    .btn:hover {
        color: rgb(157, 40, 180);
        border: 1px solid rgb(157, 40, 180);
        cursor: pointer;
    }
    .icon {
        font-weight: bold;
        font-size: 20px;
        color:  rgb(157, 40, 180);
        transition: .5s;
    }
    .icon:hover {
        transform: scale(1.2);
    }
    .font-bold{
        color: rgb(41, 197, 62);
        font-weight: bold;
        text-decoration: underline;
    }

</style>
