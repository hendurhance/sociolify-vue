<template>
  <section>
    <b-container class="header">
        <b-row>
            <b-col lg="6" md="6" sm="12">
                <div class="h1">
                    <h1>The best marketing doesn't feel like silly marketing!</h1>
                </div>
                <div>
                    <p class="paragraph">Marketing is telling the world you're a rockstar</p>
                </div>
                <div class="btn">
                    <button class="button"><i class="fas fa-rocket"></i> Get Started</button>
                </div>
            </b-col>
            <!-- <b-col md="6" sm="12">
                <div class="img">
                    <img class="img-fluid" :src="imgHeader" alt="">
                </div>
            </b-col> -->
        </b-row>
    </b-container>
  </section>
</template>

<script>
import imgHeader from '../assets/header.svg'

export default {
    data(){
        return{
          imgHeader: imgHeader
        }
    }
}
</script>

<style scoped>

section{
   background-image: linear-gradient(150deg,rgba(0,0,0,0.5), rgba(22, 89, 80, 1)), url(../assets/headerbg.jpg);
   background-position: center;
   background-size: cover;
   width: 100%;
}

.header{
    height: 100vh;
}
.h1{
    margin-top: 3em;
    color: #fff;
}

h1{
    font-size: 1.3em !important;
    font-weight: 700 !important;
    letter-spacing: 2px !important;
}

.img img{
    width: 25em;
    margin-top: 4em;
}

.paragraph{
    font-weight: 600 !important;
    color: #fff;
    font-size: 1.2em;
}

.btn{
    /* margin-top: 2px; */
    margin-left: -1em;
}

.button{
    background-color:  #375d4e;
    color: #fff !important;
    padding: 10px 15px !important;
    font-size: 1.2em !important;
    font-weight: 600 !important;
    border-radius: 20px !important;
    border: 0;
}


</style>