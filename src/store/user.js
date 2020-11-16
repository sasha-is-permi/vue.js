// Подключаем firebase
import * as fb from 'firebase'


class User {
   constructor (id) {
      this.id = id
       }
}



export default {
  state: {
    user:null  
  },
  mutation: {
    setUser(state,payload) {
        state.user = payload
    }

  },
  actions:{
      // payload можно было передать, но получаем сразу из него
      // деструктуризацией {email, password}
   registerUser({commit}, {email,password}) {
   // Создаем нового пользователя
   // Метод возвращает promise, который мы обрабатываем через then:
   fb.auth().createUserWithEmailAndPassword(email,password)
   .then(user => {
     // uid
     // Вызываем мутацию setUser
     // В user хранится id того пользователя, которого только что создали.
     // Это user.uid
     commit('setUser',new User(user.uid))

   })
    }
  },
  getters:{
    user(state){
        return state.user
    }


  }
}