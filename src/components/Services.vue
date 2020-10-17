<template>
    <section>
      <b-container>
          <b-row>
              <b-col lg="3" md="6" sm="12">
                  <div class="services">
                      <div class="contain">
                          <h4>Product Design &amp; Web Development</h4>
                          <img :src="serviceOne" alt="">
                          <div class="dash"></div>
                          <p>PRODUCT DESIGN & WEB DEVELOPMENT/MANAGEMENT</p>
                      </div>
                  </div>
              </b-col>
              <b-col lg="3" md="6" sm="12">
                  <div class="services">
                      <div class="contain">
                          <h4>Market Analysis &amp; Product Growth</h4>
                          <img :src="serviceTwo" alt="">
                          <div class="dash"></div>
                          <p>STUDY THE MARKET AND HELP IMPROVE PRODUCT SALE</p>
                      </div>
                  </div>
              </b-col>
              <b-col lg="3" md="6" sm="12">
                  <div class="services">
                      <div class="contain">
                          <h4>SEO &amp; Digital Campaign</h4>
                          <img :src="serviceThree" alt="">
                          <div class="dash"></div>
                          <p>SEARCH ENGINE OPTIMIZATION AND DIGITAL CAMPAIGNS</p>
                      </div>
                  </div>
              </b-col>
              <b-col lg="3" md="6" sm="12">
                  <div class="services">
                      <div class="contain">
                          <h4>Branding & Branding Strategy</h4>
                          <img :src="serviceFour" alt="">
                          <div class="dash"></div>
                          <p>PRODUCT BRANDING AND BRANDING STRATEGY</p>
                      </div>
                  </div>
              </b-col>
          </b-row>
      </b-container>
    </section>
</template>

<script>
import serviceOne from '../assets/service_img1.png'
import serviceTwo from '../assets/service_img2.png'
import serviceThree from '../assets/service_img3.png'
import serviceFour from '../assets/service_img4.png'
export default {
    data(){
        return{
            serviceOne: serviceOne,
            serviceTwo: serviceTwo,
            serviceThree: serviceThree,
            serviceFour: serviceFour
        }
    }
}
</script>

<style scoped>
section{
    padding: 4em 8em !important;
}
.services{
    border-radius: 30px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 30px 20px rgba(112, 110, 110, 0.04);
}
.services:hover{
    transition: .3s all ease-out;
    background-color: #669966;
    color: #f1f1f1;
    box-shadow: 0px 0px 30px 30px rgba(71, 71, 71, 0.164);
}
.contain{
    padding: 2em;
}
.contain h4{
    font-size: 1.3em;
    font-weight: 600;
}
.contain img{
    width: 5em;
    padding: 1.5em 0;
}
.dash{
    width: 15%;
    height: 3px;
    display: block;
    background: #375d4e;
}
.contain p{
    font-size: .7em;
    padding-top: 1em;
    font-weight: 400;
}

@media screen and (max-width: 768px) {
    section{
        padding: 0 !important;        
    }
    .services{
        margin-top: 2em;
    }
    
}
</style>