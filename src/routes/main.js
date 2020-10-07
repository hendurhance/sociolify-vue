import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/services',
        name: 'Services',
        component: Services
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      }
    ]
  });
