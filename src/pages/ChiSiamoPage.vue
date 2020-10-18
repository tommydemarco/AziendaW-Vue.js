<template>

    <div class="main-container">
        <div class="container">
            <div class="intro">
                <h1 class="text-center mb-1">The team </h1>
                <p class="text-center mt-0">Meet our enthusiastic team members</p>
            </div>
            <div class="row people">
                <div v-for="e in listEmployees" :key="e.id" class="col-md-6 col-lg-4 item mb-3">
                    <div class="box"><img class="rounded-circle" :src="e.image">
                        <h3 class="name">{{ e.name }}</h3>
                        <p class="title">{{ e.job_title }}</p>
                        <p class="description">{{ e.bio }}</p>
                    </div>
                    <div class="social"><a :href="e.fb_link"><i class="fa fa-facebook-official"></i></a><a :href="e.tw_link"><i class="fa fa-twitter"></i></a><a :href="e.ig_link"><i class="fa fa-instagram"></i></a></div>
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
      //if(this.$store.getters['employees/listEmployees'].length == 0) {
        this.getEmployees()
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
  padding-bottom:15px;
  background-color:#fff;
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
  color:#16a085;
  letter-spacing:2px;
  font-size:13px;
  transition: all .3s ease-in-out;
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
  color:#fafafa;
  background: #16a085;
  padding: 20px;
  transition: all .3s ease-in-out;
}
.main-container .item:hover .social {
  color:#ebebeb;
  background: #1abc9c;
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
.main-container .box {
  border: 3px solid #16a085;
  transition: all .3s ease-in-out;
}
.main-container .item:hover .box {
  border: 3px solid #1abc9c;
  box-shadow: 0 2px 13px rgba(0, 0, 0, 0.26);
}
.main-container .box:hover .title {
  color: #1abc9c;
}

</style>