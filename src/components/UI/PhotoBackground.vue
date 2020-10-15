<template>
    <div class="photo-background">
        <slot></slot>
    </div>
</template>

<style scoped>
.photo-background {
  background-image: url('../../assets/img/home-jumbotron.jpg');
  background-size: cover;
  background-position-y: -80px;
}
</style>