<template>
    <nav class="navbar navbar-expand-lg my-bg-white">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <div class="col-3">
                    <Link href="/" class="nav-brand mx-3">
                        <img src="https://i.pinimg.com/474x/f9/6a/b9/f96ab98d7e25be8368a32aae6fec3380.jpg" class="icon" alt="">
                        <span class="ms-1 fw-bold text-black">My list</span>
                    </Link>
                </div>
                <div class="col-6">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item mx-3">
                            <Link href="/" class="nav-link fw-bolder" :class="{ 'active fw-bold': $page.component == 'Home' }">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link href="/users/index" class="nav-link fw-bolder" :class="{ 'active fw-bold': $page.component == 'Users/Index' }">
                                Users
                            </Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link href="/settings" class="nav-link fw-bolder" :class="{ 'active fw-bold': $page.component == 'Settings' }">
                                Settings
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                        <li class="nav-item mx-3">
                            <Link href="/users/create" class="btn btn-outline-danger border-color" as="button">
                                Cadastrar-se
                            </Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link href="/login" class="btn btn-outline-success border-color" as="button">
                                Logar-se
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    components: {},
};
</script>
<style scoped>
    a {
        text-decoration: none;
    }
    .my-bg-white {
        background-color: rgba(141, 141, 141, 0.603);
    }
    .icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 2px;
        background-color: rgb(255, 136, 0);
    }
    .border-color {
        border: 1px solid rgb(0,0,0);
        color: rgb(0,0,0);
        transition: .5s;
    }
    .border-color:hover {
        border: 1px solid rgb(0,0,0);
        background-color: rgb(56, 56, 56);
        color: #FFF;
    }
</style>
