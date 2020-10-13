<template>
<div>
     <app-header></app-header>
     <app-outline></app-outline>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Outline from '../components/Outline.vue'

export default {
    components:{
        'app-header' : Header,
        'app-outline': Outline
    }
}
</script>

<style scoped>

</style>