<template>
  <section>
      <b-container>
          <b-row>
              <b-col class="blog" v-for="(blog, index) in blogs" :key="index" lg="4" md="12" sm="12">
                  <div>
                      <div class="blog-img">
                          <img class="img-fluid" :src="blog.image" alt="">
                      </div>
                      <p>{{ blog.date }}</p>
                      <h4>{{ blog.text }}</h4>
                      <a href="#">{{ blog.button }} <i class="fas fa-long-arrow-alt-right"></i></a>
                  </div>
              </b-col>
          </b-row>
      </b-container>
  </section>
</template>

<script>
import blogOne from '../assets/blog-1.jpg'
import blogTwo from '../assets/blog-2.jpg'
import blogThree from '../assets/blog-3.jpg'

export default {
     data(){
         return{
             blogs: [
                 {
                     image: blogOne,
                     date: "July 13, 2020",
                     text: "The Basics of Branding",
                     button: "Read More"
                 },
                 {
                     image: blogTwo,
                     date: "July 13, 2020",
                     text: "How to Increase your CPC?",
                     button: "Read More"
                 },
                 {
                     image: blogThree,
                     date: "July 13, 2020",
                     text: "Search Engine Optimization",
                     button: "Read More"
                 }
             ]
         }
     }
}
</script>

<style scoped>
section{
    padding: 4em 8em !important
}
.blog .blog-img img{
    border-radius: 30px;
    box-shadow: 0px 0px 30px 20px rgba(112, 110, 110, 0.04);
}
.blog p {
    margin-top: 1em;
    font-size: .9em;
    font-weight: 600;
}
.blog h4 {
    font-weight: bolder;
}
.blog a{
    font-weight: 650;
    color: #375d4e;
}

@media screen and (max-width: 768px){
section{
    padding: 3em 0 !important;
  }
}
</style>