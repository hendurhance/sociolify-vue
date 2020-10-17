<template>
    <section>
        <b-container>
            <b-row>
                <b-col md="6" sm="12" lg="6">
                    <div class="image">
                        <img class="img-fluid" :src="Markerting" alt="">
                    </div>
                </b-col>
                <b-col md="6" sm="12" lg="6">
                    <div class="text">
                        <h3>Crafting Out A Niche For Your Business</h3>
                        <p>Because advertising and marketing is an art, the solution to each new problem challenge should begin with a blank canvas and open mind, not with nervous borrowings of other people's mediocrities precisely modern.</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import Markerting from '../assets/marketing.svg';

export default {
    data(){
        return{
          Markerting: Markerting
       }
    }
}
</script>

<style scoped>
section{
    padding: 4em 8em !important;
    background-color: #f1f4f1;
}
.image img{
    width: 20em;
}
.text{
    margin: 0 auto;
}
.text h3{
    font-weight:700;
}
.text h3::after{
    content: "";
    width: 10%;
    margin-top: 0.7em;
    height: 3px;
    display: block;
    background: #375d4e;
}
.text p{
    font-size: 1.2em;
    margin-top: 1.5em;
    font-weight: 500;
}

@media screen and (max-width: 768px){
    section{
        padding: 0 !important;
    }
}
@media screen and (max-width: 375px){
    .text{
        margin-top: 3em;
    }
}


</style>