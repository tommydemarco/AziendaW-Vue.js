<template>
    <button :class="'btn ' + mode" v-if="type" :type="type">
        <slot></slot>
    </button>
    <a :class="'btn ' + mode" v-if="a" :href="link" target="_blank">
        <slot></slot>
    </a>
    <router-link :class="'btn ' + mode" v-else :to="link">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: false
        },
        router: {
            type: Boolean,
            required: false
        },
        a: {
            type: Boolean,
            required: false
        },
        link: {
            type: String,
            required: false
        },
        mode: {
            typr: String,
            required: false,
            default: 'btn-primary'
        }
    }
}
</script>

<style>

</style>