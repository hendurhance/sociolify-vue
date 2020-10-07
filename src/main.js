import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from './routes/main'


// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueRouter)




new Vue({
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
