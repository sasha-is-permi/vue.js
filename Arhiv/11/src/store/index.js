
// импортируем vue.js
import Vue from 'vue'
// импортируем vuex
import Vuex from 'vuex'

import counter from './counter'

// Включаем использование плагина Vuex
Vue.use(Vuex)
//  для экспорта:
// создаем новый объект у объекта  vuex и 
// у его подобъекта, который называется store
// store- конструктор, в него передаем объект конфигурации
export default new Vuex.Store({
   modules: {
     // Если хотим зарегистрировать функционал store для counter
     // из counter.js:
      counter   // counter:counter (из couner.js объект)
   },
   state: {
     title:"Hello from store!"
   },
   getters: {
    title(state) {
      return state.title + "!!!"
    }
   }
})
