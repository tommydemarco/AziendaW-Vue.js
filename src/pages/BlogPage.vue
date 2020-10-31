<template>
<div class="main-container">
    <section>
        <header>
            <div class="container">
                <div class="intro pb-5">
                    <h1 class="text-center mb-1">The Blog</h1>
                    <p class="text-center mt-0">Browse through our articles (and trough the tastes of our products) </p>
                </div>
            </div>
        </header>
    </section>

    <section>
        <div class="container pb-5">
            <base-spinner v-if="isLoading"></base-spinner>
            <div class="row" v-else>
                <blog-card v-for="a in allArticles" :key="a.id" :title="a.title" :paragraph="a.content.slice(0, 70) + '...'" :imageUrl="a.image">
                    <template #footer>
                        <base-button mode="btn-primary-inverse" :link="'/blog/' + a.id">Read the article &raquo;</base-button>
                    </template>
                </blog-card>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            error: false,
            errorMessage: null
        }
    },
    computed: {
        allArticles() {
            const products = this.$store.getters['blog/getAllArticles']
            return products
        }
    },
    created() {
        if (this.$store.getters['blog/getAllArticles'].length == 0) {
            this.fetchArticles()
        }
    },
    methods: {
        async fetchArticles() {
            this.isLoading = true
            try {
                await this.$store.dispatch('blog/fetchArticles')
            } catch (e) {
                this.error = true,
                    this.errorMessage = e.message
            }
            this.isLoading = false
        }
    }
}
</script>
