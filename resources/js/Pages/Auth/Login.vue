<template>
    <Head title="Logar-se" />
    <div class="d-flex justify-content-center flex-column align-items-center" style="height:100vh;">
        <h1>Logar-se</h1>
        <div class="card p-3" style="max-width: 400px">
            <form class="row g-3 needs-validation" @submit.prevent="submitForm">
                <div class="col-md-12">
                    <div class="text-center fw-bold">
                        <label for="validationCustom02" class="form-label">
                            Email
                        </label>
                        <div class="input-group has-validation">
                            <span
                                class="input-group-text"
                                id="inputGroupPrepend"
                                >@</span
                            >
                            <input
                                v-model="form.email"
                                type="email"
                                class="form-control"
                                id="validationCustomUsername"
                                aria-describedby="inputGroupPrepend"
                                placeholder="Seu email"
                            />
                        </div>
                        <div
                            v-if="form.errors.email"
                            v-text="form.errors.email"
                            class="mt-1 rounded text-bg text-sm"
                        ></div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="text-center fw-bold">
                        <label for="validationCustom01" class="form-label"
                            >Senha</label
                        >
                        <input
                            v-model="form.password"
                            type="password"
                            class="form-control"
                            id="validationCustom03"
                            placeholder="Sua senha"
                        />
                        <div
                            v-if="form.errors.password"
                            v-text="form.errors.password"
                            class="mt-1 rounded text-bg text-sm"
                        ></div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex align-items-center">
                        <button
                            class="btn btn-outline-primary m-auto"
                            type="submit"
                            :disabled="form.processing"
                        >
                            Logar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "Index",
    layout: null,
};
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3"
    let form = useForm({
        email: '',
        password:''
    });

    let submitForm = () => {
        form.post('/login');
    };

</script>
<style scoped>
    .text-sm{
        font-size: 12px;
    }
    .text-bg {
        background-color: rgba(255, 91, 91, 0.712);
    }
</style>
