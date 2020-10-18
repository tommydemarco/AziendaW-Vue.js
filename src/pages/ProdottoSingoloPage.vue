<template>
  <div class="main-container">
      <section>
        <div class="container pt-3 pb-3">
            <div class="row pb-5">
                <div class="col-md-7">
                    <div>
                        <h1 class="mb-4">Organic {{ singleProduct.name }} <span class="price">€{{singleProduct.price}}/kg</span></h1>
                        <p>{{singleProduct.description}}</p>
                    </div>
                </div>
                <div class="col-md-5 pt-5">
                  <aside>
                    <img :src="singleProduct.image" class="img-responsive">
                    <ul class="button-ul mt-4">
                      <li><button class="btn btn-primary btn-lg" type="button" @click="alertMessage">Add to cart &raquo;</button></li>
                      <li class="ml-3"><button class="btn btn-primary btn-lg" type="button" @click="alertMessage">Buy now &raquo;</button></li>
                    </ul>
                    <base-alert class="mt-4" v-if="error" @close-click="dismissError" v-bind:alert-message="errorMessage"></base-alert>
                  </aside>
                </div>                    
            </div>
            
        </div>
      </section>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
      return { 
        error: false,
        errorMessage: null
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
        alertMessage() {
          this.error = true,
          this.errorMessage = 'This is just a personal project, cart and check out features are not supported.'
        },
        dismissError() {
          this.error = false,
          this.errorMessage = null
        }
    }
}
</script>

<style scoped>
.img-responsive {
    max-width: 100%;
    position:stycky;
    top:40px;
}
.price {
  color:#16a085;
  float:right;
}
aside {
  position: sticky;
  top:40px
}
</style>