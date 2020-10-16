<template>

  <upper-header></upper-header>

  <nav id="main-navbar" class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
          Azienda
        </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Prodotti</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/the-team">Chi siamo</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacts">Contatti</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
</template>

<script>
import UpperHeader from './UpperHeader.vue';

export default {
  components: {
    UpperHeader
  }
}
</script>

<style scoped>
.fixed-top {
  position:fixed;
  top: 0px;
}
.navbar-brand {
  font-family: 'Norican', cursive; 
  font-size: 50px;
}
#main-navbar {
  background: #007b5e !important;
  padding: 10px;
}
#main-navbar  ul li a {
  font-size:18px;
  padding-left:15px;
}
#main-navbar a {
  color: white !important;
}
@media screen and (min-width:768px){
    .navbar-brand-centered {
        position: absolute;
        left: 50%;
        display: block;
        width: 160px;
        text-align: center;
        background-color: #eee;
    }
    .navbar>.container .navbar-brand-centered, 
    .navbar>.container-fluid .navbar-brand-centered {
        margin-left: -80px;
    }
}
</style>
