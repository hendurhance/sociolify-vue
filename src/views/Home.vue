<template>
<div>
     <app-header></app-header>
     <app-outline></app-outline>
     <about-section></about-section>
     <services></services>
     <why-us></why-us>
     <testimonials></testimonials>
     <blog></blog>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Outline from '../components/Outline.vue'
import aboutSection from '../components/aboutSection.vue'
import Services from '../components/Services.vue'
import whyUs from '../components/whyUs.vue'
import Testimonials from '../components/Testimonials.vue'
import Blog from '../components/Blog.vue'

export default {
    components:{
        'app-header' : Header,
        'app-outline': Outline,
        'about-section': aboutSection,
        'services': Services,
        'why-us': whyUs,
        'testimonials': Testimonials,
        'blog': Blog
    }
}
</script>

<style scoped>

</style>