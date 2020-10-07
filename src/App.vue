<template>
<div id="app">
   <app-navbar></app-navbar>
   <router-view/>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
   'app-navbar': Navbar
  },
  data() {
    return{

    }
  },
  methods(){

  }
}
</script>

<style>

</style>
