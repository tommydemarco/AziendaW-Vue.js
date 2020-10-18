<template>
<testimonial-footer></testimonial-footer>
<section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Website Navigation</h5>
					<ul class="list-unstyled quick-links">
						<li><router-link to="/products"><i class="fa fa-angle-double-right"></i>Products</router-link></li>
						<li><router-link to="/blog"><i class="fa fa-angle-double-right"></i>Blog</router-link></li>
						<li><router-link to="/the-team"><i class="fa fa-angle-double-right"></i>The Team</router-link></li>
						<li><router-link to="/contacts"><i class="fa fa-angle-double-right"></i>Contacts</router-link></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Technologies used</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="https://vuejs.org/"><i class="fa fa-angle-double-right"></i>Vue.js</a></li>
						<li><a href="https://vuex.vuejs.org/"><i class="fa fa-angle-double-right"></i>Vuex</a></li>
						<li><a href="https://www.djangoproject.com/"><i class="fa fa-angle-double-right"></i>Django</a></li>
						<li><a href="https://www.django-rest-framework.org/"><i class="fa fa-angle-double-right"></i>Django REST</a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Other links</h5>
					<ul class="list-unstyled quick-links">
						<li><router-link to="/cookies-policy"><i class="fa fa-angle-double-right"></i>Cookies Policy</router-link></li>
						<li><router-link to="/privacy-policy"><i class="fa fa-angle-double-right"></i>Privacy Policy</router-link></li>
						<li><a href="https://tommasodemarco.com"><i class="fa fa-angle-double-right"></i>Contact developer</a></li>
						<li><a href="https://github.com/tommydemarco"><i class="fa fa-angle-double-right"></i>View on GitHub</a></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-google-plus"></i></a></li>
					</ul>
				</div>
				<hr>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p>This website is only a personal project and has no commercial/representational purposes.</p>
					<p class="h6">This website does not represent any real company.</p>
				</div>
				<hr>
			</div>	
		</div>
	</section>
    
</template>

<script>
import TestimonialFooter from './TestimonialFooter.vue'
export default {
    components: {
        TestimonialFooter,
    }
}
</script>

<style scoped>
section {
    padding: 60px 0;
}

section .section-title {
    text-align: center;
    color: #007b5e;
    margin-bottom: 50px;
    text-transform: uppercase;
}
#footer {
    background: #007b5e !important;
}
#footer h5{
	padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
}
#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:40px;
	margin-top:-20px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{  
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}
}
</style>