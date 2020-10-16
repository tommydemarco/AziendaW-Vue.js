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
      <div class="row">
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
  computed: {
    allArticles() {
      const products = this.$store.getters['blog/allArticles']
      return products
    }
  },
  created() {
    this.fetchArticles() 
  },
  methods: {
    fetchArticles() {
      this.$store.dispatch('blog/fetchArticles')
    }
  }
}
</script>