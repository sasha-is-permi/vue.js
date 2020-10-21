export default {
    // state- объект, который описывает все состояние нашего приложения. 
    // задаем counter, который затем можем использовать в разных
    // компонентах.
   state: {
     counter: 0
   },
   // Если хотим каким-то образом изменить counter:
   // В параметрах: 
   // сам state, который нужно изменить. 
   // val
   mutations: {
     changeCounter (state, payload) {
      // увеличиваем counter на 1
      // state.counter+=1 
      // payload- в changeCounter переданный параметр val 
      //
       state.counter += payload
     }
   },
   actions: {
     //  параметры: context - тут много полезной информации
     // payload- те данные (объект), с которыми будем работать.
     //     asyncChangeCounter ({commit}, payload) {
     // Из context получаем commit с помощью деструтуризации:
     // {commit}
     asyncChangeCounter ({commit}, payload) {
       // можем вызывать асинхронные методы 
       // Вызываем с задержкой payload.timeoutDelay сек.
       setTimeout(() => {
         // через промежуток времени вызывается функция (mutation) 
         // changeCounter. Передаем в неё параметр  payload.counterValue-
         // ту величину, на которую будем изменять counter.
         commit('changeCounter', payload.counterValue)
       }, payload.timeoutDelay)
     }
   },
   // getters- объект, где каждое значение является функцией.
   // вычисляем свойства прежде чем передать их в компоненты
   getters: {
     // определяем функцию, которая преобразует хранящийся в state counter
     // эту функцию можно использовать в компонентах
     computedCounter (state) {
       return state.counter * 10
     }
   }
 }