import Vue from 'vue'
import App from './App.vue'
import router from './router'
// импорт vuex из store/index.js
import store from './store'
import vuetify from './plugins/vuetify';

// Подключаем firebase
import fb from 'firebase/app';
require('firebase/auth');


// добавлено из каталога node_modules/vuetify/dist/
import 'vuetify/dist/vuetify.min.css'





Vue.config.productionTip = false

// store - передаем настройки хранилища store
// в объект конфигурации vue    store:store, упрощенно store
new Vue({
  router,
 store,
  vuetify,
  created (){
    fb.initializeApp({
      apiKey: 'AIzaSyBDqoN9eh3atwLcYFpRjj-5HeN_UWxQARo',
      authDomain: 'itc-ads-9fe8e.firebaseapp.com',
      databaseURL: 'https://itc-ads-9fe8e.firebaseio.com',
      projectId: 'itc-ads-9fe8e',
      storageBucket: 'itc-ads-9fe8e.appspot.com',
      messagingSenderId: '474540697157',
      appId: '1:474540697157:web:26b494af5749f7240d252c'
    })

    // Решаем проблему потери авторизации при перезагрузке страницы
    fb.auth().onAuthStateChanged( user => {
    // Если в user что-то храниться- разрешаем пользователю быть 
    // залогиненым 
      if(user) {
       this.$store.dispatch('autoLoginUser',user)
     }

    })

    // Загружаем данные из базы данных на страницу
    this.$store.dispatch('fetchAds')


  },
  render: h => h(App)
}).$mount('#app')



