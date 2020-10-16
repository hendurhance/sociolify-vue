<template>
<div>
     <app-header></app-header>
     <app-outline></app-outline>
     <about-section></about-section>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Outline from '../components/Outline.vue'
import aboutSection from '../components/aboutSection.vue'

export default {
    components:{
        'app-header' : Header,
        'app-outline': Outline,
        'about-section': aboutSection
    }
}
</script>

<style scoped>

</style>