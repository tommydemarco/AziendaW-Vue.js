<template>
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer> 
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from './components/layouts/TheFooter.vue';

export default {
    components: {
        TheHeader,
        TheFooter
    },
    created() {
        this.$store.dispatch('auth/tryLogin')
    }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css2?family=Norican&display=swap');

#app .btn-primary {
    background-color: #16a085;
    border: 1px solid #16a085;
    border-radius: 0px;
}
#app .btn-primary:hover {
    background-color: #007b5e;
}
#app .btn-primary-inverse {
    background-color: white;
    color: #16a085;
    border: 1px solid white;
    border-radius: 0px;
    transition: all .3s ease-in-out;
}
#app .btn-primary-inverse:hover {
    background-color: rgb(243, 243, 243);
    color:#007b5e;
}
.button-ul {
    padding-left: 0px;
    margin-bottom: 0px;
}
.button-ul li {
    display:inline-block
}

/*general and heading styling*/
.main-container {
  color:#313437;
  background-color:#eef4f7;
}

.main-container p {
  color:#7d8285;
}

.main-container h1 {
  font-weight:bold;
  margin-bottom:40px;
  padding-top:40px;
  color:inherit;
}

@media (max-width:767px) {
  .main-container h1 {
    margin-bottom:25px;
    padding-top:25px;
    font-size:24px;
  }
}

.main-container .intro {
  font-size:16px;
  max-width:500px;
  margin:0 auto;
}

.main-container .intro p {
  margin-bottom:0;
}
</style>