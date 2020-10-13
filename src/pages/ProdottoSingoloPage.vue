<template>
  <section>
    <header>
      <div class="container text-center py-4">
        <h1> {{ singleProduct.name }}</h1>
        <p>{{ singleProduct.description }}</p>
      </div>
    </header>

  <div class="container pb-5">
    <div class="card">
      <div class="row">
        <div class="col-sm-8">
          <div class="card-block">
            <h4 class="card-title">Descrizione prodotto:</h4>
            <p>{{ singleProduct.description }}</p>
            <ul class="button-ul">
              <li><base-button link="#"><i></i>Compra ora</base-button></li>
              <li class="ml-2"><base-button link="#"><i></i>Aggiungi al carrello</base-button></li>
            </ul>
            
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card-header">
          <img
            class="d-block w-100"
            :src="singleProduct.image"
            alt=""
          />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
    props: ['id'],
    data() {
      return { 
      } 
    },
    created() {
      if (this.$store.getters['products/homePageProducts'].length == 0) {
        this.loadSingleProduct();
      } else {
        this.getProduct()
      }         
    },
    computed: {
      singleProduct() {
        return this.$store.getters['products/getSingleProduct']
      }
    },
    methods: {
        getProduct() {   
            this.$store.commit('products/setSingleProduct', this.id)
        },
        loadSingleProduct() {
          this.$store.dispatch('products/loadSingleProduct', this.id)
        },
    }
}
</script>

<style scoped>
.card-block {
  padding:25px;
}
.card-header {
  padding: 0;
  max-height: 330px;
  overflow: hidden;
}
.card:hover {
    border: 3px solid #2ecc71;
    box-shadow: 0 2px 13px rgba(0, 0, 0, 0.26);
}
.card {
    border: 3px solid #27ae60;
    transition: all .3s ease-in-out;
}
</style>