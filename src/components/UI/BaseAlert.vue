<template>
    <!-- alert for form is invalid -->
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        {{ alertMessage }}
    <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        @click="closeClick"
    >
        <span aria-hidden="true">&times;</span>
    </button>
    </div>

</template>

<script>
export default {
    emits: ['close-click'],
    props: {
        alertMessage: {
            type: String,
            required: true
        }
    },
    methods: {
        closeClick() {
            this.$emit('close-click');
        }
    }
    
}
</script>