<template>
    <b-container fluid>
        <b-row>
            <b-col v-for="(content, index) in contents" :key="index" lg="3">
                <div v-colormix>
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
            colors: [{color: "eefeee"}, {color: "ccffcc"}, {color: "669966"}, {color: "3f683f"}],
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
    // methods:{
    //     splitColor: function(){
    //         console.log(this.colors.color)
    //     }
    // },
    directives:{
        'colormix': {
            bind(el){
                el.style.background = "#" + 669966;
            }
        }
    }
    
}
</script>

<style>

</style>