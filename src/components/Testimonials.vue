<template>
    <section>
      <b-container>
          <b-row>
            <b-col lg="6" md="12" sm="12">
                <div class="content">
                    <h3>What Client Say About Us</h3>
                    <p>Sociolify clients and their results are the best proof that our methodologies work. But we’ve also received numerous awards and praise from the media and our peers.</p>
                </div>
            </b-col>
            <b-col lg="3" md="6" sm="12">
                <div class="testimonial">
                    <div class="section">
                        <h4>MARK JOCKEY</h4>
                        <p>Happiness is not something you postpone for the future; it is something you design for the present. If you don't design your own life plan.</p>
                    </div>
                </div>
            </b-col>
            <b-col lg="3" md="6" sm="12">
                <div class="testimonial">
                    <div class="section">
                        <h4>MARK JOCKEY</h4>
                        <p>Happiness is not something you postpone for the future; it is something you design for the present. If you don't design your own life plan.</p>
                    </div>
                </div>
            </b-col>
          </b-row>
      </b-container>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
section{
    background-image: url(../assets/testimonials.svg);
    padding: 4em 8em !important;
    background-position: center;
    background-size: cover;
}
.content h3{
    font-weight: 700;
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
.testimonial{
    border-radius: 30px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 30px 20px rgba(112, 110, 110, 0.04)
}
.section{
    padding: 2em;
}
.section h4{
    font-size: 1.2em;
    font-weight: 800;
    text-align: right;
}
.section h4::after{
    content: "";
    width: 10%;
    margin-top: 0.7em;
    height: 3px;
    float: left;
    display: block;
    background: #375d4e;
}
.section p{
    margin-top: 1em;
    font-size: .95em;
}
@media screen and (max-width: 768px) {
    section{
        padding: 3em 0 !important;        
    }
    .section{
        margin-top: 2em;
    }
}
</style>