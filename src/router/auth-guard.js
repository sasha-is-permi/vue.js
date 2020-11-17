// импортируем store чтобы понять-
// какое состояние у user (включает файл store/index.js)
import store from '../store'

export default function(to, from, next) {
  // Если залогинены
    if(store.getters.user) {
        next() //переходим на запрашиваемую страницу
} else {
    // переходим на страницу логина
    // Передаем get-параметр loginError=true
    // (сработает сообщение об ошибке)
    next('/login?loginError=true')
}


}