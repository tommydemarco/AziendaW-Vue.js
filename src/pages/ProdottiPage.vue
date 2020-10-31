<template>
<div class="main-container">
    <section>
        <header>
            <div class="container">
                <div class="intro pb-5">
                    <h1 class="text-center mb-1">Our products</h1>
                    <p class="text-center mt-0">Taste our passion for wine excellence</p>
                </div>
            </div>
        </header>
    </section>

    <section>
        <div class="container pb-3">
            <div class="row">
                <the-sidebar @change-filters="changeTheFiltering"></the-sidebar>
                <div class="col-md-8">
                    <base-spinner v-if="isLoading"></base-spinner>
                    <div class="row" v-else>
                        <base-card col="6" v-for="a in allProducts" :key="a.id" :title="a.name" :paragraph="a.description.slice(0, 70) + '...'" :imageUrl="a.image" :category="a.category.category" :price="a.price">
                            <template #footer>
                                <base-button mode="btn-primary-inverse" :link="'/products/' + a.id">View product details &raquo;</base-button>
                            </template>
                        </base-card>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TheSidebar from '../components/layouts/TheSidebar.vue';

export default {
    components: {
        TheSidebar
    },
    data() {
        return {
            activeFilters: {
                tomatoes: true,
                carrots: true,
                zucchini: true,
                peppers: true,
                minPrice: '0',
                maxPrice: '100',
                seasonal: true,
                allYear: true
            },
            isLoading: false,
            error: false,
            errorMessage: null
        }
    },
    computed: {
        allProducts() {
            const products = this.$store.getters['products/allProducts']
            return products.filter(product => {
                if (this.activeFilters.peppers && product.category.id == '3') {
                    if (this.activeFilters.minPrice < product.price && this.activeFilters.maxPrice > product.price) {
                        if (this.activeFilters.seasonal && product.tags[0] == '1' || this.activeFilters.allYear && product.tags[0] == '2') {
                            return true
                        } else {
                            return false
                        }
                    }
                }
                if (this.activeFilters.tomatoes && product.category.id == '6') {
                    if (this.activeFilters.minPrice < product.price && this.activeFilters.maxPrice > product.price) {
                        if (this.activeFilters.seasonal && product.tags[0] == '1' || this.activeFilters.allYear && product.tags[0] == '2') {
                            return true
                        } else {
                            return false
                        }
                    }
                }
                if (this.activeFilters.carrots && product.category.id == '7') {
                    if (this.activeFilters.minPrice < product.price && this.activeFilters.maxPrice > product.price) {
                        if (this.activeFilters.seasonal && product.tags[0] == '1' || this.activeFilters.allYear && product.tags[0] == '2') {
                            return true
                        } else {
                            return false
                        }
                    }
                }
                if (this.activeFilters.zucchini && product.category.id == '5') {
                    if (this.activeFilters.minPrice < product.price && this.activeFilters.maxPrice > product.price) {
                        if (this.activeFilters.seasonal && product.tags[0] == '1' || this.activeFilters.allYear && product.tags[0] == '2') {
                            return true
                        } else {
                            return false
                        }
                    }
                }
                return false
            })
        }
    },
    created() {
        if (this.$store.getters['products/allProducts'].length == 0) {
            this.fetchProducts()
        }
    },
    methods: {
        async fetchProducts() {
            this.isLoading = true
            try {
                await this.$store.dispatch('products/fetchProducts')
            } catch (e) {
                this.error = true;
                this.errorMessage = e.message
            }
            this.isLoading = false

        },
        changeTheFiltering(updatedFilters) {
            this.activeFilters = updatedFilters
        }
    }
}
</script>
