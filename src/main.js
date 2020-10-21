import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import vuetify from './plugins/vuetify';

// добавлено из каталога node_modules/vuetify/lib
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
  router,
 // store,
  vuetify,
  render: h => h(App)
}).$mount('#app')



