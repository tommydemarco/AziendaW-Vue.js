<template>

    <div class="mb-5" :class="'col-md-' + col">
        <div class="card h-100">

          <!-- IMAGE SLOT -->
          <slot name="image">
            <div class="card-header">
              <img class="card-img-top" :src="imageUrl" alt="">
            </div>
          </slot>

          <div class="card-body">

            <!-- CONTENT SLOT -->
            <slot name="content">
                <h4 class="card-title">{{ title }}</h4>
                <p class="card-text">{{ paragraph }}</p>
            </slot>

          </div>
          <div class="card-footer">

            <!-- FOOTER SLOT -->
            <slot name="footer">
            </slot>

          </div>
        </div>
      </div>

</template>

<script>
export default {
    props: ['title', 'paragraph', 'imageUrl', 'col']
}
</script>

<style scoped>
.card {
    border: 3px solid #16a085;
    transition: all .3s ease-in-out;
    border-radius: 0px;
}
.card-header {
  padding: 0px;
  max-height: 250px;
  overflow: hidden;
  border-radius: 0px;
}
.card:hover {
    border: 3px solid #1abc9c;
    box-shadow: 0 2px 13px rgba(0, 0, 0, 0.26);
}
.card:hover .card-footer {
    background: #1abc9c;
}
.card-footer {
  border-radius: 0px;
  background: #16a085;
  transition: all .3s ease-in-out;
  padding:14px;
}
.card-img, .card-img-top {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}
</style>