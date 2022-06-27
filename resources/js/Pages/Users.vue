<template>
    <Head>
        <title>Users</title>
    </Head>
    <h1>Users</h1>
    <ul>
        <li v-for="user in users" :key="user.id" v-text="user.name"></li>
    </ul>
</template>
<script>
export default {
    props: {
        users: Array,
    },
};
</script>
