


import Vue from 'vue'

// Импортируем из app.vue экспортную функцию, описанную там,
// с прикрепленным шаблоном и стилем
import App from './App.vue'

// настройка роутинга
import VueRouter from 'vue-router'

// импортируем из router.js роутеры
import router from './routes'


// настройка роутинга
Vue.use(VueRouter)

new Vue({
  el: '#app',
  // рендерим div id="app"
  // В старом синтаксисе
  // render: function(h) {
  // return h(App)	  
  //}
  render: h => h(App),
  // регистрация роутеров и routes.js
  // можно написать просто: router
  router:router
})

