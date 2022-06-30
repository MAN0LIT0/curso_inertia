<template>
    <Head title="Cadastrar usuário" />
    <div class="d-flex justify-content-center flex-column align-items-center" style="height:100vh;">
        <h1>Cadastre um novo usuário</h1>
        <div class="card p-3" style="max-width: 400px">
            <form class="row g-3 needs-validation" @submit.prevent="submitForm">
                <div class="col-md-6">
                    <div class="text-center fw-bold">
                        <label for="validationCustom01" class="form-label"
                            >Nome</label
                        >
                        <input
                            v-model="form.name"
                            type="text"
                            class="form-control"
                            id="validationCustom01"
                            placeholder="Seu nome"
                        />
                        <div
                            v-if="$page.props.errors.name"
                            v-text="$page.props.errors.name"
                            class="mt-1 rounded text-bg-danger"
                        ></div>
                    </div>
                </div>
                <div class="col-md-6">
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
                            v-if="$page.props.errors.email"
                            v-text="$page.props.errors.email"
                            class="mt-1 rounded text-bg-danger"
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
                            v-if="$page.props.errors.password"
                            v-text="$page.props.errors.password"
                            class="mt-1 rounded text-bg-danger"
                        ></div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex align-items-center">
                        <button
                            class="btn btn-outline-primary m-auto"
                            type="submit"
                            :disabled="processing"
                        >
                            Submit form
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { Inertia } from "@inertiajs/inertia";
export default {
    name: "Index",
    layout: null,
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
            },
            processing: false
        };
    },
    methods: {
        submitForm() {
            Inertia.post("/users", this.form, {
                onStart: () => {this.processing = true},
                onFinish: () => {this.processing = false}
            });
        },
    },
    mounted() {

    }
};
</script>
