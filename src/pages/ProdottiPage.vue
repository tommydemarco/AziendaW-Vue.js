<template>
  <section>
    <header>
      <div class="container text-center py-4">
        <h1>I nostri prodotti</h1>
        <p>Assapora la qualità e la nostra passione</p>
      </div>
    </header>
  </section>

<section>
  <div class="container pb-5">
    <div class="row">
      <the-sidebar @filter="filterContent"></the-sidebar>
      <div class="col-md-8">
        <div class="row">
          <base-card col="6" v-for="a in allProducts" :key="a.id" :title="a.name" :paragraph="a.description.slice(0, 70) + '...'" :imageUrl="a.image">
            <template #footer>
                <base-button link="/prodotti/1">Scopri di più</base-button>
            </template>      
          </base-card>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>
import TheSidebar from '../components/layouts/TheSidebar.vue';

export default {
  components: {
    TheSidebar
  },
  data() {
    return {}
  },
  computed: {
    allProducts() {
      return this.$store.getters['products/allProducts']
    }
  },
  created() {
    this.fetchProducts() 
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch('products/fetchProducts')
    }
  }
}
</script>