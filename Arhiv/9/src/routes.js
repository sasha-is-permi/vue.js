
import VueRouter from 'vue-router'

import Home from './pages/Home'
// import Cars from './pages/Cars'
// import Car from './pages/Car'
import ErrorCmp from './pages/Error'
import CarFull from './pages/carFull'

// загрузка компонентов Cars, Car только по требованию
// используется стрелочная функция, затем callback функция
// передаем пути для webpack

const Cars = resolve => {
   require.ensure(['./pages/Cars.vue'], () => {
        resolve(
          require('./pages/Cars.vue')
        ) 
   }
   )
}

const Car = resolve => {
  require.ensure(['./pages/Car.vue'], () => {
       resolve(
         require('./pages/Car.vue')
       ) 
  }
  )
}


// Экспортируем по default новый экземпляр класса VueRouter

export default new VueRouter({
// Набор роутов- их будет содержать наше приложение
// path- за какой путь отвечает определенный компонент
// (или определенный роут)
routes: [
{
  path:'', // localhost:8080 или домен связанный с сервером vps
           // получается- это роут по умолчанию.
  component: Home

},
{
    path:'/cars', // localhost:8080 или домен связанный с сервером vps
    component: Cars,
    name:'cars'
  
  },
  {
    // После слэша будет динамическое свойство id (так назовем)
    // фактически путь к страничке прописываем при роутинге
   path:'/car/:id',
   // Компонент- машины
   component:Car,
   // делаем вложенный роут (подстраница)
   // Добавляем массив с объектами
   // (дочерними роутами)
   // У них есть путь
   // и название компонента
   children: [     // добавляется еще родительский путь. 10- динамический id
    {path: 'full', //localhost:8080/car/10/full
    component:CarFull,
    name:'carFull',// можно выбрать любое имя
    // to- куда переходим
    // from- откуда переходим
     
    // Данный метод вызывается перед тем как зайти 
    // на текущий роут. 

    beforeEnter(to,from,next){
         console.log('beforeEnter');
    // выполняется всегда     
    if (true) {
    // разрешаем выполнять переход на страничку.
    // Если этого не написать- нельзя будет перейти на страничку  
    // Можно просто вызвать next()
      next(true)
    } else {
      next(false)
    }
     

    }
     }
   ]
  },
{
  // создаем роут с несуществующим путем
  // redirect: '/cars'
  // если попадаем на этот роут (страничку)- перенаправляем - делаем редирект
  // на страницу машин cars
  // '/' - редирект на домашнюю страничку
  // http://localhost:8080/none - попадаем на http://localhost:8080/cars
  // Указываем имя другого роута (странички) - попадаем на нее
path:'/none',
redirect: 'cars'
},
{
// Обрабатываем страницу 404 (несуществующий роут)
// для любых незарегистрированных роутов (подстраничек) будем вызывать 
// данный роут
// Показываем компонент (страницу) ErrorCmp (error.vue)
// Например, 
// http://localhost:8080/45576 -
// выводится страница с ошибкой
path:'*',
component: ErrorCmp
}


],
mode:'history',
scrollBehavior(to,from,savedPosition){
 
 // Если были на какой-то позиции,
 // потом перешли на другую страницу-
 // вернемся на запомненную позицию.
  if (savedPosition) {
   return savedPosition;
 }

// Чтобы перейти по хэшу
// Если задана хэш-метка- переходим по её координатам
  if (to.hash) {
    return {selector:to.hash}
  }
 // иначе- переходим по таким координатам:
  return {
   x:0,
   y:200
  }
}
})