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
</style>