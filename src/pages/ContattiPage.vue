<template>
  <div class="main-container">
    <div class="container">
      <div class="intro">
        <h1 class="text-center mb-1">Contact us</h1>
        <p class="text-center mt-0">We'd love to hear back from you</p>
      </div>
      <div class="row people pt-3 pb-5">
        <div class="col-md-8">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-address-card-o"></i>
                  </div>
                </div>
                <input
                  id="name"
                  name="name"
                  placeholder="Insert your name"
                  type="text"
                  required="required"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-envelope-o"></i>
                  </div>
                </div>
                <input
                  id="email"
                  name="email"
                  placeholder="Insert your email"
                  type="text"
                  required="required"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                cols="40"
                rows="5"
                class="form-control"
              ></textarea>
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-primary">
                Contact us
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-4 pt-4">
          <h5>We look forward to you message</h5>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
             eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
             voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
             clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
          </p>
          <div class="alert alert-warning" role="alert">
            <b>Alert!</b> This website is only a personal project.
            Attempts to use this contact form will fail.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>