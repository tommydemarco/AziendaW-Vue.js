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
      <the-sidebar @change-filters="changeTheFiltering"></the-sidebar>
      <div class="col-md-8">
        <div class="row">
          <base-card col="6" v-for="a in allProducts" :key="a.id" :title="a.name" :paragraph="a.description.slice(0, 70) + '...'" :imageUrl="a.image" :category="a.category.category" :price="a.price">
            <template #footer>
              <ul class="button-ul">
                <li><base-button mode="btn-primary-inverse" link="/prodotti/1">Scopri di più &raquo;</base-button></li>
                <li class="ml-3"><base-button mode="btn-primary-inverse" link="/prodotti/1">Compra ora &raquo;</base-button></li>
              </ul>
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
    return {
      activeFilters: {
        vinoRosso: true,
        vinoBianco: true,
        vinoRose: true,
        minPrice: 0,
        maxPrice: 10000
      }
    }
  },
  computed: {
    allProducts() {
      const products = this.$store.getters['products/allProducts']
      return products.filter(product => {
        if (this.activeFilters.vinoRosso && product.category.id == '1') {
          if (this.activeFilters.minPrice < product.price && this.activeFilters.maxPrice > product.price) {
            return true
          } else {
            return false
          }    
        }
        if (this.activeFilters.vinoBianco && product.category.id == '2') {
          if (this.activeFilters.minPrice < product.price && this.activeFilters.maxPrice > product.price) {
            return true
          } else {
            return false
          } 
        }
        if (this.activeFilters.vinoRose && product.category.id == '3') {
          if (this.activeFilters.minPrice < product.price && this.activeFilters.maxPrice > product.price) {
            return true
          } else {
            return false
          }  
        }
         
        return false
      })
    }
  },
  created() {
    this.fetchProducts() 
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch('products/fetchProducts')
    },
    changeTheFiltering(updatedFilters) {
      this.activeFilters = updatedFilters
    }
  }
}
</script>