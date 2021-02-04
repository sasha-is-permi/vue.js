


import Vue from 'vue'

// Импортируем пакет валидации 
import Vuelidate from 'vuelidate'

// Импортируем из app.vue экспортную функцию, описанную там,
// с прикрепленным шаблоном и стилем
import App from './App.vue'

// Чтобы подключить библиотеку и набор её функциональности к vue.js: 
Vue.use(Vuelidate)


new Vue({
  el: '#app',
  // рендерим div id="app"
  // В старом синтаксисе
  // render: function(h) {
  // return h(App)	  
  //}
  render: h => h(App)
})

