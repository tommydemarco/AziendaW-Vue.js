<template>
  <!-- Header -->
  <header class="bg-jumbotron">
    <div class="filigrana py-5 mb-5">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-9">
            <h1 class="display-4 text-white mt-5 mb-2">Il Vino, una passione</h1>
            <p class="mb-5 text-white home-p">Per noi il vino non è solo un prodotto, ma uno stile di vita. Dalla vendemmia al prodotto finale, ci mettiamo il cuore e tutta la nostra dedizione.</p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Page Content -->
  <div class="container">

    <div class="row">
      <div class="col-md-8 mb-5">
        <h2>Un vino diverso</h2>
        <hr>
        <p>
          La nostra passione è il vino, e ogni parte del nostro processo produttivo ha un
          solo obiettivo: produrre un vino di alta qualità: sia per i nostri clienti, ma anche 
          (e soprattutto) per noi. <br>
        </p>
        <p>
          Siamo sicuri che, quando assaggerete uno dei nostri prodotti vi accorgerete subito di
          quanta passione è stata messa nel portare ogni singolo sorso di vino ad avere il 
          suo sapore unico. <br>
        </p>
        <a class="btn btn-primary btn-lg" href="#">Scopri di più &raquo;</a>
      </div>
      <div class="col-md-4 mb-5">
        <h2>Contattaci</h2>
        <hr>
        <address>
          <strong>Azienda, Vini eccellenti</strong>
          <br>34, Via del vigneto
          <br>Cannobio, IT 28822
          <br>
        </address>
        <address>
          <abbr title="Phone">P:</abbr> 
          +39 0123 4567
          <br>
          <abbr title="Email">E:</abbr> 
          <a href="mailto:#"> mail@azienda.co.it</a>
        </address>
      </div>
    </div>

    <!-- HOME PAGE CARDS -->
    <div class="row">

      <base-card col="4" v-for="a in homePageArticles" :key="a.id" :title="a.name" :paragraph="a.description.slice(0, 70) + '...'" :imageUrl="a.image">
        <template #footer>
            <base-button mode="btn-primary-inverse" link="/prodotti/1">Scopri di più</base-button>
        </template>      
      </base-card>
      
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