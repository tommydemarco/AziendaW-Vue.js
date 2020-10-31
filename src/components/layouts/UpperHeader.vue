<template>
<nav id="upper-header" class="navbar navbar-expand-lg static-top">
    <div class="container">
        <ul class="navbar-nav align-left">
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fa fa-map-marker"></i> Organic city, IT 6373
                </a>
            </li>
        </ul>
        <ul id="no-small" class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa fa-phone"></i> +114 0123 4567</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fa fa-envelope"></i> mail@azienda.co.it
                </a>
            </li>
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item" v-if="!isAuthenticated">
                <router-link class="nav-link" to="/login"><i class="fa fa-sign-in"></i> Login</router-link>
            </li>
            <li class="nav-item" v-else>
                <a class="nav-link cursor-pointer" @click="logout"><i class="fa fa-sign-out"></i> Logout</a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    computed: {
        isAuthenticated() {
            return this.$store.getters['auth/isAuthenticated'];
        },
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout');
            this.$router.replace({
                name: 'logout'
            });
        },
    },
};
</script>

<style>
.cursor-pointer {
    cursor: pointer;
}

#upper-header {
    background-color: #16a085;
    color: white;
}

#upper-header a {
    color: white;
}

@media only screen and (max-width: 993px) {
    #no-small {
        display: none !important;
    }
}

/* cart features */
</style>
