<template>
    <b-container fluid>
        <b-row no-gutters>
            <b-col v-for="(content, index) in contents" :key="index" lg="3">
                <div v-colormix class="outline">
                   <div v-html="content.icon" class="icon"></div>
                   <div class="text"> <h2>{{content.text}}</h2> </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data(){
        return{
            contents: [
                {
                    icon: '<i class="fas fa-search outline-icon"></i>',
                    text: 'Search Engine Optimization'
                },
                {
                    icon: '<i class="far fa-comment-alt outline-icon"></i>',
                    text: 'Social Media Marketing'
                },
                {
                    icon: '<i class="far fa-envelope-open outline-icon"></i>',
                    text: 'Email List Marketing'
                },
                {
                    icon: '<i class="far fa-file-alt outline-icon"></i>',
                    text: 'Content Development'
                }
            ]
        }
    },
    directives:{
        'colormix': {
            bind(el){
                el.style.background = "#" + 669966;
                el.style.color = "#" + "f5f3f3";
            }
        }
    }
    
}
</script>

<style scoped>
*{
    padding: 0 !important;
}
.outline{
    padding: 20px 35px !important;
    display: flex;
}

.icon{
    font-size: 40px;
}

.text{
    margin-left: 10px;
    font-weight: bolder;
    font-size: 1em;
}

</style>