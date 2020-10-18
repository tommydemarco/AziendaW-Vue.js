<template>
 <div class="testimonials-clean">
        <div class="container">
            <div class="intro">
                <h3 class="text-center mb-1">Testimonials</h3>
                <p class="text-center upper-p">Our customers love us! Read what they have to say below.</p>
            </div>
            <div class="row people">
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est. Our customers love us! </p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="../../assets/img/testimonial.jpg">
                        <h5 class="name">John Doe</h5>
                        <p class="title">CEO of The Company Inc.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id.</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="../../assets/img/testimonial2.jpg">
                        <h5 class="name">Jane Doe</h5>
                        <p class="title">Founder of Stylink Co.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="../../assets/img/testimonial3.png">
                        <h5 class="name">Jonny Johnson</h5>
                        <p class="title">Owner of Some Food Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.testimonials-clean {
  color:#313437;
  background-color:#16a085;
}

.testimonials-clean p {
  color:#7d8285;
}

.testimonials-clean p.title {
  color:#d6d6d6!important;
}

.testimonials-clean h3 {
  font-weight:bold;
  margin-bottom:10px;
  padding-top:40px;
  color:white;
}

.upper-p {
  color: white!important;
}

@media (max-width:767px) {
  .testimonials-clean h3 {
    margin-bottom:25px;
    padding-top:25px;
    font-size:24px;
  }
}

.testimonials-clean .intro {
  font-size:16px;
  max-width:500px;
  margin:0 auto;
}

.testimonials-clean .intro p {
  margin-bottom:0;
}

.testimonials-clean .people {
  padding:50px 0 20px;
}

.testimonials-clean .item {
  margin-bottom:32px;
}

@media (min-width:768px) {
  .testimonials-clean .item {
    height:220px;
  }
}

.testimonials-clean .item .box {
  padding:30px;
  background-color:#fff;
  position:relative;
}

.testimonials-clean .item .box:after {
  content:'';
  position:absolute;
  left:30px;
  bottom:-24px;
  width:0;
  height:0;
  border:15px solid transparent;
  border-width:12px 15px;
  border-top-color:#fff;
}

.testimonials-clean .item .author {
  margin-top:28px;
  padding-left:25px;
}

.testimonials-clean .item .name {
  font-weight:bold;
  margin-bottom:2px;
  color:white;
}

.testimonials-clean .item .title {
  font-size:13px;
  color:#9da9ae;
}

.testimonials-clean .item .description {
  font-size:15px;
  margin-bottom:0;
}

.testimonials-clean .item img {
  max-width:50px;
  float:left;
  margin-right:12px;
  margin-top:-5px;
}
</style>