import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './styles/FirePlatform.css';
import './admin/AdminView.css';
import BootstrapVue from 'bootstrap-vue';
import { Collapse } from 'bootstrap-vue/es/components';
import Axios from 'axios';
import '../node_modules/nprogress/nprogress.css';
import VueProgressBar from 'vue-progressbar';
import VueRouter from 'vue-router'
import routes from './routes';
import VueCookies from 'vue-cookies';
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import 'vue-material-design-icons/styles.css';
 
Vue.component('menu-icon', MenuIcon);

Vue.use(require('vue-cookies'))
Vue.use(VueCookies)

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

// set default config
VueCookies.config('7d')

// set global cookie
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');

const router = new VueRouter({routes});

Vue.config.productionTip = false;

window.axios = require('axios');

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '10px', 
  transition: {
    speed: '1s',
    opacity: '2s',
    termination: 300
  },
})

Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.use(Collapse);

Axios.defaults.baseURL = process.env.API_ENDPOINT;
export const serverBus = new Vue();

new Vue({
  router,
  render: h => h(App),
  template: '<menu-icon />'
}).$mount('#app')

// Intercept all requests
window.$ = window.jQuery = require('jquery')
window.axios.interceptors.request.use(
  (config) => {
   // do something before sending requests
   
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercept all responses
window.axios.interceptors.response.use(
(response) => {
 // when success from server
  
  return response;
},

(error) => {
 // when error from server
  Vue.$Progress.fail()
  return Promise.reject(error);
}
);
