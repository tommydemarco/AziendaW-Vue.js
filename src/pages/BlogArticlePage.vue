<template>
  <div class="main-container">
    <section>
      <div class="container pt-3 pb-3">
        <div class="row pb-5">
          <div class="col-md-7">
            <div>
              <h1 class="mb-4">{{ singleArticle.title }}</h1>
              <p>{{ singleArticle.content }}</p>
              <router-link class="btn btn-primary btn-lg mt-2" :to="{ name: 'blog'}"
                >Back to the blog &raquo;</router-link>
            </div>
          </div>
          <div class="col-md-5 pt-5">
            <img :src="singleArticle.image" class="img-responsive" />
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
      errorMessage: null,
    };
  },
  created() {
      if (this.$store.getters['blog/getAllArticles'].length == 0) {
        this.loadSingleArticle();
      } else {
        this.getArticle()
      }         
    },
    computed: {
      singleArticle() {
        return this.$store.getters['blog/getSingleArticle']
      }
    },
    methods: {
        getArticle() {   
            this.$store.commit('blog/setSingleArticle', this.id)
        },
        loadSingleArticle() {
          this.$store.dispatch('blog/loadSingleArticle', this.id)
        },
    }
};
</script>

<style scoped>
.img-responsive {
  max-width: 100%;
  position: stycky;
  top: 40px;
}
</style>