<template>
    <section>
      <b-container>
          <b-row>
              <b-col lg="6" md="6" sm="12">
                  <div class="image">
                      <img class="img-fluid" :src="whyUs" alt="">
                  </div>
              </b-col>
              <b-col lg="6" md="6" sm="12">
                  <div class="content">
                      <h3>{{ contenttag}}</h3>
                      <p> {{contenttext}} </p>
                  </div>
              </b-col>
          </b-row>
      </b-container>
    </section>
</template>

<script>
import whyUs from '../assets/why-us.png'
export default {
    data(){
        return{
            whyUs: whyUs,               
            contenttag: "Taking Your Business To The Next Level",
            contenttext: "We are passionate about our work. Our designers, marketers, developers stay ahead of the curve to provide engaging and user-friendly services to make your business stand out. We care about your business, which is why we work with you."
        }
    }
}
</script>

<style scoped>
section{
    padding: 4em 8em !important;
}
.image{
    width: 25em;
}
.content h3{
    font-weight: 700;
    margin-top: 3em;
}
.content h3::after{
    content: "";
    width: 10%;
    margin-top: 0.7em;
    height: 3px;
    display: block;
    background: #375d4e;
}
.content p{
    font-size: 1.2em;
    margin-top: 1.5em;
    font-weight: 500;
}
@media screen and (max-width: 768px) {
    section{
        padding: 3em 0 !important;        
    }
    .image{
        width: 20em;
    }
}
</style>