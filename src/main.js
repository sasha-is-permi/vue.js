import Vue from 'vue'
import App from './App.vue'
import router from './router'
// импорт vuex из store/index.js
import store from './store'
import vuetify from './plugins/vuetify';

// добавлено из каталога node_modules/vuetify/dist/
import 'vuetify/dist/vuetify.min.css'





Vue.config.productionTip = false

// store - передаем настройки хранилища store
// в объект конфигурации vue    store:store, упрощенно store
new Vue({
  router,
 store,
  vuetify,
  render: h => h(App)
}).$mount('#app')



