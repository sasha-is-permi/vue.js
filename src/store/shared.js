export default {
  state: {
    loading: false,
    error: null
  },
  mutations: {
    // загрузка
    setLoading (state, payload) {
      state.loading = payload
    },
    // ошибка
    setError (state, payload) {
      state.error = payload
    },
    // очистка ошибок
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    // Принимаем метод commit
    setLoading ({commit}, payload) {
      // Вызываем commit с mutation setLoading
      commit('setLoading', payload)
    },
    
    setError ({commit}, payload) {
      commit('setError', payload)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
}
