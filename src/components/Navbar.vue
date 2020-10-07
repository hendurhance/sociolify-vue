<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">VueSPA</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-navbar-nav>
        <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
        <b-nav-item :to="{name: 'About'}">About</b-nav-item>
        <b-nav-item :to="{name: 'Services'}">Services</b-nav-item>
        <b-nav-item :to="{name: 'Contact'}">Contact</b-nav-item>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>

.bg-info{
    padding: 10px 30px;
}

</style>