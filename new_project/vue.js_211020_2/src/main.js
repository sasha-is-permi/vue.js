import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import vuetify from 'vuetify/lib';
//import Vuetify from 'vuetify';
//добавлено
//import 'vuetify/dist/vuetify.min.css'

Vue.use(vuetify);


Vue.config.productionTip = false


new Vue({
  router,
//  store,
  vuetify,
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
