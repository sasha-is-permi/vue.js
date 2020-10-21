import Vue from 'vue'
import App from './App.vue'

// испортируем, а ниже подключаем, объект store
// './store/index.js' -index.js webpack по умолчанию понимает, можно не писать.

import store from './store'

new Vue({
  el: '#app',
  store, // store:store чтобы объект работал в нашем приложении
  render: h => h(App)
})


