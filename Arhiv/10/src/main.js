import Vue from 'vue'

import VueResource from 'vue-resource'

// Импортируем из app.vue экспортную функцию, описанную там,
// с прикрепленным шаблоном и стилем
import App from './App.vue'

Vue.use(VueResource)

// Определяем корневой каталог (хостинг)
Vue.http.options.root = 'http://localhost:3000/'
// Теперь в app.vue можем ссылаться на ресурсы:
//this.resource = this.$resource('cars')
// vue сам добавит путь и сделает 
// http://localhost:3000/cars

// interseptors- массив всех интерсепторов.
// метод push добавляет интерсепторы.
// request- объект конфигурации того запроса,
// который отправляем на сервер.
// В случае сохранения машины- это метод post
// и какие-то данные, которые отправляем на сервер.

// Если надо добавить данные к отправляемым:
// headers.set

// К каждому запросу, отправляемому на сервер, 
// добавляется такой header
Vue.http.interceptors.push(request => {
  request.headers.set('Auth','Rand token ' + Math.random() )
})
// В Networks в запросе втором в поле request headers
// появилось поле Auth




new Vue({
  el: '#app',
  // рендерим div id="app"
  // В старом синтаксисе
  // render: function(h) {
  // return h(App)	  
  //}
  render: h => h(App),
})

