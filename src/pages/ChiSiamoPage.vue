<template>

    <div class="main-container">
        <div class="container">
            <div class="intro">
                <h1 class="text-center mb-1">The team </h1>
                <p class="text-center mt-0">Meet our enthusiastic team members</p>
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
export default {
    data() {
        return {}
    },
    created() {
        //if (this.$store.getters['employees/listEmployees'].length !== 0) {
        this.getEmployees()
        // axiosAPI.get('/employees/', { headers: { Authorization: `Bearer ${this.$store.getters['auth/getToken']}`}})
        //   .then(response => response.json())
        //   .then((responseData) => {
        //     this.$store.commit('employees/getEmployeesToken', responseData)
        //   })

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
.main-container .people {
  padding:50px 0;
}

.main-container .item {
  text-align:center;
}

.main-container .item .box {
  text-align:center;
  padding:30px;
  background-color:#fff;
  margin-bottom:30px;
}

.main-container .item .name {
  font-weight:bold;
  margin-top:28px;
  margin-bottom:8px;
  color:inherit;
}

.main-container .item .title {
  text-transform:uppercase;
  font-weight:bold;
  color:#d0d0d0;
  letter-spacing:2px;
  font-size:13px;
}

.main-container .item .description {
  font-size:15px;
  margin-top:15px;
  margin-bottom:20px;
}

.main-container .item img {
  max-width:160px;
}

.main-container .social {
  font-size:18px;
  color:#a2a8ae;
}

.main-container .social a {
  color:inherit;
  margin:0 10px;
  display:inline-block;
  opacity:0.7;
}

.main-container .social a:hover {
  opacity:1;
}
</style>