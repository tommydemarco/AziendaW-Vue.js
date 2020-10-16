<template>

    <div class="team-boxed">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Team </h2>
                <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
            </div>
            <div class="row people">
                <div v-for="e in listEmployees" :key="e.id" class="col-md-6 col-lg-4 item">
                    <div class="box"><img class="rounded-circle" :src="e.image">
                        <h3 class="name">{{ e.name }}</h3>
                        <p class="title">{{ e.job_title }}</p>
                        <p class="description">{{ e.bio }}</p>
                        <div class="social"><a :href="e.fb_link"><i class="fa fa-facebook-official"></i></a><a :href="e.tw_link"><i class="fa fa-twitter"></i></a><a :href="e.ig_link"><i class="fa fa-instagram"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axiosAPI from '../axios-api.js';

export default {
    data() {
        return {}
    },
    created() {
        //if (this.$store.getters['employees/listEmployees'].length !== 0) {
        //this.getEmployees()
        axiosAPI.get('/employees/', { headers: { Authorization: `Bearer ${this.$store.getters['auth/getToken']}`}})
          .then(response => response.json())
          .then((responseData) => {
            this.$store.commit('employees/getEmployeesToken', responseData)
          })

        //}
    },
    methods: {
        getEmployees() {
            this.$store.dispatch('employees/getEmployees');
        }
    },
    computed: {
        listEmployees() {
            return this.$store.getters['employees/listEmployees']
        }
    }
    
}
</script>

<style scoped>
.team-boxed {
  color:#313437;
  background-color:#eef4f7;
}

.team-boxed p {
  color:#7d8285;
}

.team-boxed h2 {
  font-weight:bold;
  margin-bottom:40px;
  padding-top:40px;
  color:inherit;
}

@media (max-width:767px) {
  .team-boxed h2 {
    margin-bottom:25px;
    padding-top:25px;
    font-size:24px;
  }
}

.team-boxed .intro {
  font-size:16px;
  max-width:500px;
  margin:0 auto;
}

.team-boxed .intro p {
  margin-bottom:0;
}

.team-boxed .people {
  padding:50px 0;
}

.team-boxed .item {
  text-align:center;
}

.team-boxed .item .box {
  text-align:center;
  padding:30px;
  background-color:#fff;
  margin-bottom:30px;
}

.team-boxed .item .name {
  font-weight:bold;
  margin-top:28px;
  margin-bottom:8px;
  color:inherit;
}

.team-boxed .item .title {
  text-transform:uppercase;
  font-weight:bold;
  color:#d0d0d0;
  letter-spacing:2px;
  font-size:13px;
}

.team-boxed .item .description {
  font-size:15px;
  margin-top:15px;
  margin-bottom:20px;
}

.team-boxed .item img {
  max-width:160px;
}

.team-boxed .social {
  font-size:18px;
  color:#a2a8ae;
}

.team-boxed .social a {
  color:inherit;
  margin:0 10px;
  display:inline-block;
  opacity:0.7;
}

.team-boxed .social a:hover {
  opacity:1;
}
</style>