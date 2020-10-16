<template>
    <div class="main-container">
      <section>
        <div class="container pt-3 pb-3">
            <div class="row">
                <div class="col-md-7">
                    <div class="pb-5">
                        <h1 class="mb-4">{{ blogArticle.title }}</h1>
                        <p>{{blogArticle.content}}</p>
                    </div>
                </div>
                <div class="col-md-5 pt-5">
                    <img :src="blogArticle.image" class="img-responsive">
                </div>                    
            </div>
            
        </div>
      </section>
    </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        blogArticle() {
            const article = this.$store.getters['blog/allArticles'].filter(article => article.id == this.id)
            return article[0]
        }
    },
    methods: {
        getProduct() {
            //get the single product actually
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
</style>