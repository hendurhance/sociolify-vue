<template>
    <div>
  <b-navbar class="navb" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand :to="{name: 'Home'}"> <img class="logo" :src="Logo" alt="Logo"> </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-navbar-nav>
        <b-nav-item :to="{name: 'Home'}" exact>Home</b-nav-item>
        <b-nav-item :to="{name: 'Login'}">Login</b-nav-item>
        <b-nav-item :to="{name: 'Signup'}">Signup</b-nav-item>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import Logo from '../assets/Sociolify.png'
export default {
    data(){
        return{
           Logo: Logo
        }
    }
}
</script>

<style scoped>
.navb{
  background: #375d4e !important;
}

.bg-info{
    padding: 10px 30px;
}

.logo{
  width: 7em;
}

a.router-link-active{
  color: #fff !important;
}

</style>