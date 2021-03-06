import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

/* bootstrap entry */
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* gauge component for vue */
import VueSvgGauge from 'vue-svg-gauge'

/* filters entry */
import  "@/helpers/filters";

 /* imported an external scss file to make it global */
import "@/assets/ext_css/svg-icon.scss";


Vue.use(VueSvgGauge)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
