import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import Vuetify from 'vuetify/lib';

//import vuetify from 'vuetify'

// добавлено из каталога node_modules/vuetify/lib
// 
import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false

Vue.use(Vuetify);

new Vue({ 
  router,
//  store,
//  vuetify,
  render: h => h(App)
}).$mount('#app')

/*
new Vue({
 el:'#app',	
 router,
//  store,
  vuetify,
  // можно так написать вместо render: h => h(App)
  components: { App },
  template: '<App/>'
})*/
