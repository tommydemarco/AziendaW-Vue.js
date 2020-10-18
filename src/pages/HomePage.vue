<template>
  <!-- Header -->
  <photo-background>
    <div class="filigrana py-5">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-9">
            <h1 class="display-4 text-white mt-5 mb-2">Our passion, on your table</h1>
            <p class="mb-5 text-white home-p">For us, helthy and organic food is not just a passion, but a way of living. Let us bring the health on your table, directly from our farms.</p>
          </div>
        </div>
      </div>
    </div>
  </photo-background>

<div class="main-container pt-5">
  <!-- Page Content -->
  <div class="container">

    <div class="row">
      <div class="col-md-8 mb-5">
          <h2>Organic, our way of living</h2>
          <hr>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore et dolore magna aliquyam erat. sed diam voluptua. 
            At vero eos et accusam, consetetur sadipscing elitr. <br>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam. <br>
          </p>
          <router-link class="btn btn-primary btn-lg" to="/products">Discover our products &raquo;</router-link>
      </div>
      <div class="col-md-4 mb-5">
        <h2>Contact us</h2> 
        <hr>
          <address>
            <strong>Azienda, Organic food</strong>
            <br>34, Green Street
            <br>Organic city, IT 6373
            <br>
          </address>
          <address>
            <abbr>P:</abbr> 
            +114 0123 4567
            <br>
            <abbr>E:</abbr> 
            mail@azienda.co.it
          </address>
        <router-link class="btn btn-primary btn-lg" to="/contacts">Write us a message &raquo;</router-link>
      </div>
    </div>

    <!-- HOME PAGE CARDS -->
    <div class="row">

      <base-card col="4" v-for="a in homePageArticles" :key="a.id" :title="a.name" :paragraph="a.description.slice(0, 70) + '...'" :imageUrl="a.image" :category="a.category.category" :price="a.price">
        <template #footer>
            <base-button mode="btn-primary-inverse" link="/prodotti/1">Scopri di più</base-button>
        </template>      
      </base-card>
      
    </div>

  </div>
</div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    created() {
      this.loadProducts()
    },
    methods: {
      loadProducts() {
        this.$store.dispatch('products/homePageProducts')
      }
    },
    computed: {
      homePageArticles() {    
        return this.$store.getters['products/homePageProducts'].slice(0, 3) 
      }
    }
}
</script>


<style scoped>
.home-p {
  font-size:19px;
}
.filigrana {
  background-color: rgba(17, 134, 105, 0.6);
}
.bg-jumbotron {
  background-image: url('../assets/img/home-jumbotron.jpg');
  background-size: cover;
  background-position-y: -80px;
}

</style>