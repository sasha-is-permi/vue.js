import Vue from 'vue'
// импорт vuex из компонента установленного
import Vuex from 'vuex'
import ads from './ads'
import user from './user'
import shared from './shared'


// Подключение vuex к vue
Vue.use(Vuex)

// Экспортируем данные vuex в другие компоненты
export default new Vuex.Store({
  modules: {
    ads, user, shared
  }
})
