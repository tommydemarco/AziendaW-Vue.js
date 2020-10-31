<template>

  <upper-header></upper-header>

  <nav id="main-navbar" class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
            <img src="../../assets/img/Logo.png">
          </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/the-team">The Team</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacts">Contacts</router-link>
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
#main-navbar a.navbar-brand {
  color: white;
  transition: all .3s ease-in-out;
}
#main-navbar a.navbar-brand:hover {
  color: rgb(223, 223, 223);
}
#main-navbar a {
  color: rgb(223, 223, 223);
  transition: all .3s ease-in-out;
}
#main-navbar a:hover {
  color: white;
}
#main-navbar a.router-link-active {
  color: white;
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
