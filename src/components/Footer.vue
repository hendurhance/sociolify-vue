<template>
  <footer>
     <b-container>
         <b-row>
             <b-col lg="4" md="12" sm="12">
                 <div class="content">
                     <img :src="Logo" alt="">
                 </div>
             </b-col>
             <b-col lg="4" md="12" sm="12">
                 <div class="content">
                     <h4>Social Media</h4>
                     <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                     </ul>
                 </div>
             </b-col>
             <b-col lg="4" md="12" sm="12">
                 <div class="content">
                    <h4>Quick Links</h4>
                    <select name="" id="">
                      <option>Home</option>
                      <option>Login</option>
                      <option>Register</option>
                    </select>
                 </div>
             </b-col>
         </b-row>
         <hr>
         <div class="copyright">
             <p>{{ copyright }}</p>
         </div>
     </b-container>
  </footer>
</template>

<script>
import Logo from  '../assets/Sociolify.png'
export default {
    data(){
        return{
            copyright: "Copyright © 2020 All Rights Reserved Sociolify",
            Logo: Logo
        }
    }
}
</script>

<style scoped>
footer{
    padding: 3em 0 0.5em 0!important;
    background-color: #375d4e;
    color: #f1f4f1;
}
.content{
    margin: 0 auto;
}
.content h4{
    text-align: center;
}
.content ul {
    display: flex;
    justify-content: center;
    padding: 0px !important;
}
.content li {
    padding: .5em;
    list-style-type: none;
    padding: 10px;
}
.content ul li a {
    font-size: 1.5em;
    color: #eefeee;
}
.content select {
    width: 100%;
    padding: .5em;
    border-radius: 20px;
    background-color: #f1f4f1ab;
}
</style>