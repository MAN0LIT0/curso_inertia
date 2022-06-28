<template>
    <Head>
        <title>Users</title>
    </Head>
    <div class="container">
        <div class="d-flex justify-content-between">
            <div class="d-flex flex-row">
                <h1 class="me-3">Users</h1>
                <Link href="/users/create" class="btn btn-outline-secondary btn-sm m-auto">Novo Usuário</Link>
            </div>
            <div class="d-flex align-items-center">
                <input
                    v-model="search"
                    type="text"
                    placeholder="Procurar"
                    class="m-3"
                />
            </div>
        </div>
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
            <div class="py-1 m-auto">
                <Component
                    :is="link.url ? 'Link' : 'span'"
                    v-for="link in users.links"
                    :key="link.id"
                    :href="link.url"
                    v-html="link.label"
                    class="mx-2"
                    :class="{
                        'text-gray': !link.url,
                        'font-bold': link.active,
                    }"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";

let props = defineProps({
    users: Object,
    filters: Object,
});
let search = ref(props.filters.search);
watch(search, (value) => {
    Inertia.get(
        "/users/index",
        { search: value },
        { preserveState: true, Replace: true }
    );
});
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
