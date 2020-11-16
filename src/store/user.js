// Подключаем firebase
import fb from 'firebase/app';
require('firebase/auth');


class User {
   constructor (id) {
      this.id = id
       }
}



export default {
  state: {
    user:null  
  },
  mutations: {
    setUser(state,payload) {
        state.user = payload
    }

  },
  actions:{
      // payload можно было передать, но получаем сразу из него
      // деструктуризацией {email, password}
  async registerUser({commit}, {email,password}) {
   // Предварительно очищаем ошибки, приходящие с сервера.
   // Вызываем action из shared.js
   // (подключен через store/index.js)
   commit('clearError')
   // Показываем что пошло взаимодействие с сервером
   commit('setLoading',true)
   // Создаем нового пользователя
   // Метод возвращает promise, который мы обрабатываем через then:
   // Будем ожидать что-то асинхронное из функции справа.
   // То, что вернется, попадет в переменную user
  
   // попытка
  try {
  const user = await fb.auth().createUserWithEmailAndPassword(email, password)
  commit('setUser',new User(user.uid))
  commit('setLoading',false) 
  }
  // если ошибка
  catch(error) {
  commit('setLoading',false)
  commit('setError',error.message)
  throw error
  }

  // .then(user => {
     // uid
     // Вызываем мутацию setUser
     // В user хранится id того пользователя, которого только что создали.
     // Это user.uid
   //  commit('setUser',new User(user.uid))
     // Закончилось взаимодействие с сервером
   //  commit('setLoading',false)

   //})
   //.catch(error => {
   // В случае ошибки- говорим что закончилась загрузка,
   // но выводим какую-то ошибку.

  //  commit('setLoading',false)
  //  commit('setError',error.message)

  // })

    },
    // payload деструктурируем на {email,password}
    async loginUser({commit},{email,password}){
      commit('clearError')
      commit('setLoading',true)
     try {
     const user = await fb.auth().signInWithEmailAndPassword(email, password)
     commit('setUser',new User(user.uid))
     commit('setLoading',false) 
     }  catch(error) {
     commit('setLoading',false)
     commit('setError',error.message)
     throw error
     }
    }
  },
  getters:{
    user(state){
        return state.user
    }


  }
}