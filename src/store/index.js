import Vue from 'vue'
// импорт vuex из компонента установленного
import Vuex from 'vuex'
import ads from './ads'

// Подключение vuex к vue
Vue.use(Vuex)

// Экспортируем данные vuex в другие компоненты
export default new Vuex.Store({
  modules: {
    ads
  }
})
