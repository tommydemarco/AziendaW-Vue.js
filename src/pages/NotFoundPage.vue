<template>
  <div class="main-container">
    <div class="container text-center pb-5">
      <div class="intro">
        <h1 class=" mb-1">404</h1>
        <h3>Page not found</h3>
        <p class="text-center mt-0">
          We couldn't find the page you're looking for. <br>
          Perhaps was it one of these?
        </p>
        <ul class="button-ul mt-4">
            <li><router-link class="btn btn-primary btn-lg" :to="{name:'home'}">Home page &raquo;</router-link></li>
            <li class="ml-2"><router-link class="btn btn-primary btn-lg" to="/products">Products &raquo;</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>