<template>
<photo-background>
  <div class="background-green">
  <div class="container contact py-5">
    <div class="row">
      <div class="col-md-4">
        <div class="contact-info">
          <i class="fa fa-envelope"></i>
          <h2 class="mb-1">Contact Us</h2>
          <h4 class="mb-5">We would love to hear from you!</h4>
          <div class="alert alert-warning" role="alert">
            <b>Alert!</b> This website is only a personal project.
            Attempts to use this contact form will fail.
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="contact-form mt-2">
          <div class="form-group">
            <label class="control-label col-sm-2" for="fname"
              >Name:</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="fname"
                placeholder="Enter your name"
                name="fname"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="comment">Comment:</label>
            <div class="col-sm-10">
              <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</photo-background>
</template>

<script>
export default {};
</script>

<style scoped>
.background-green {
    background-color: rgba(17, 134, 105, 0.6);
    width:100%;
    height:100%;
}
.col-md-4{
    background: #1e2833;
    padding: 4%;
    color:white;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
}
.col-md-4 i{
    font-size: 70px;
}
.contact-info{
    margin-top:5%;
}
.contact-info i {
    margin-bottom: 10%;
}
@media only screen and (max-width: 768px) {
   .contact-info i {
       display: none;
   }
   .col-md-8 {border-top-right-radius: 0px!important;
    border-bottom-right-radius: 0px!important;}
   .col-md-4 {border-top-left-radius: 0px!important;
    border-bottom-left-radius: 0px!important;}
}
@media only screen and (max-width: 574px) {
    #app .container {padding-top:0px!important; padding-bottom:0px!important;}
}
.col-md-8{
    background: #fff;
    padding: 3%;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
}
.contact-form label{
    font-weight:600;
}
.contact-form button{
    background: #25274d;
    color: #fff;
    font-weight: 600;
    width: 25%;
}
.contact-form button:focus{
    box-shadow:none;
}
</style>