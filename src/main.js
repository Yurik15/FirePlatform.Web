import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/FirePlatform.css'
import BootstrapVue from 'bootstrap-vue'
import { Collapse } from 'bootstrap-vue/es/components';

Vue.use(BootstrapVue);
Vue.use(Collapse);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


