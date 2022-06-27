<template>
    <Head>
        <title>Users</title>
    </Head>
    <div class="container">
        <h1 class="text-center">Users</h1>
        <div class="card">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users.data" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-2">
            <Component
                :is="link.url ? 'Link' : 'span'"
                v-for="link in users.links"
                :key="link.id"
                :href="link.url"
                v-html="link.label"
                class="mx-2"
                :class="{'text-gray': !link.url, 'font-bold' : link.active}"
            />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        users: Object,
    },
};
</script>
<style>
    a {
        color: rgb(0, 0, 0);
    }
    .text-gray {
        color: gray;
    }
    .font-bold {
        font-weight: bold;
    }
</style>
