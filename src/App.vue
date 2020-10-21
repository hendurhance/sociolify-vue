<template>
<div id="app">
   <app-navbar></app-navbar>
   <router-view/>
   <app-footer></app-footer>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
   'app-navbar': Navbar,
   'app-footer': Footer
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
