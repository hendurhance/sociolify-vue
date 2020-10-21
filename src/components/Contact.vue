<template>
  <section>
      <b-col>
          <b-row>
              <b-col lg="4" md="12" sm="12">
                  <div class="contact">
                      <i class="fas fa-envelope-open-text"></i>
                      <div class="content">
                         <p>+2349091646111</p>
                         <p>hendurhance@outlook.com</p>
                      </div>
                  </div>
              </b-col>
              <b-col lg="4" md="12" sm="12">
                  <div class="contact">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="content">
                      <p>+99 Radicula Street, Lekki,</p>
                      <p>Lagos, Nigeria.</p>
                  </div>
                  </div> 
              </b-col>
              <b-col lg="4" md="12" sm="12">
                  <div class="form">
                      <input placeholder="Email Address..." type="text">
                      <b-button>SUBSCRIBE</b-button>
                  </div>
              </b-col>
          </b-row>
      </b-col>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section{
    padding: 3em 0 !important;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.6)), url(../assets/contact.png);
    background-size: cover;
    background-position: center;
}
.contact {
    color: #f1f1f1;
    display: flex;
}
.contact i {
    font-size: 3em;
}
.content{
    display: block;
    margin-left: 1em;
    margin-top: 1em;
}
.content p{
    font-weight: 700;
    font-size: 1.3em;
    line-height: .3;
}
.form input {
    width: 100%;
    padding: .5em;
    border-radius: 10px;
    border: 0;
}
.form button {
    background-color: #375d4e;
    width: 100%;
    margin-top: 0.1em;
    color: #f1f1f1;
    font-size: 1em;
    font-weight: 600;
}
.form input:focus {
    outline: none;
}

@media screen and (max-width: 768px){
.contact, .form{
    margin-top: 3em;
}
}
</style>