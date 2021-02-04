
<template>
<div class="container pt-2">
 
 <!--
 Модификатор trim- чтобы удалялись пробелы 
 справа и слева. 
 Модификатор number- число.
 --> 
  <div class="form-group">
   <label for="name"> Car name </label>
   <input type="text" id="name" class="form-control" v-model.trim="carName">
  </div>

  <div class="form-group">
   <label for="year"> Car year </label>
   <input type="text" id="year" class="form-control" v-model.number="carYear">
  </div>

<!-- При нажатии на эту кнопку создаем новую машину в базе -->
  <button class="btn btn-success" @click="createCar" >Create car</button>

<!-- при нажатии на кнопку получаем данные с сервера -->
 <button class="btn btn-primary" @click="loadCars">Load cars</button>
 
 <hr>
<!-- ctrl / - комментарий
ul.list-group>li*5.list-group-item - быстрый набор тут. 
Используются классы bootstrap 
(подсмотренно на сайте bootstrap) 
Атрибут key, нужный для vue.js- 
присваиваемый ему полученный id в цикле
(для каждого элемента).
Тут идет цикл по полученным элементам.
-->

 <ul class="list-group">
   <li
    class="list-group-item"
    v-for="car of cars"
    :key="car.id"
    >
  <strong> {{car.name}} - {{car.year}}  </strong>   

    </li>

 </ul>


</div> 
</template>

<script>


// import App from './App.vue' (в main.js)
export default {
   data () {
    return {
      carName:"Ford",
      carYear:2018,
      cars:[],
      resource:null
    }
  },
  methods: {
    createCar(){
      // создадим новую машину
      const car = {
        name:this.carName,
        year:this.carYear
      }     


       console.log('create Car');
      // Делаем асинхронный запрос на сервер 
      // Для того чтобы что-то создать и сохранить на сервере-
      // пользуемся методом post
      // 1 параметр- алрес куда надо сделать запрос
      // cars- должно совпадать с названием объекта,
      // который определяли в db.json
      // вторым параметром передаем объект, который нужно
      // добавить в базу
     
      /* this.$http.post('http://localhost:3000/cars',car) 
        .then( response => {
          console.log(response)
          return response.json()
             })
        .then( newCar => {
           console.log(newCar) 
        }) */

       // Вместо метода post можно использовать метод save:
       this.resource.save({},car)

        // когда в created ниже написали:
        // this.resource = this.$resource('http://localhost:3000/cars')
        // это значит что resource работает с данным url

          // response- сообщает как завершился запрос (response.status)
          // body - те данные которые с сервера получили
          // (response.body.name, например)
          // Сервер также возвращает поле id:
          // (response.body.id)
          // В db.json записались данные из car плюс добавилось id.
          // В response много дополнительных данных. 
          // Если хотим получить чистые данные которые с сервера пришли-
          // распарсим promise с  json, 
          // в следующем promise получаем объект 
          // созданная машина + id ее:
          //{name: "Ford", year: 2018, id: 24}


     

      // метод post возвращает promise, который надо обработать. 
      // обрабатываем с момощью метода then, вызываем объект response 

          
    }, 
    loadCars(){

     // Для получения данных вместо get можем использовать 
     // resource: 
   
     /*  this.$http.get('http://localhost:3000/cars')
       .then( response => {
       console.log(response)
          return response.json()
             })
        .then( cars => {
          // локальный массив cars будет равен тому cars, 
          // который приходит с сервера
             this.cars=cars
           console.log(cars) 
        })*/
      
   
     // Получаем с сервера общий объект respons и 
     // массив cars
     // присваиваем нашему массиву cars пришедший  сервера
     // массив из объектов: cars
     this.resource.get().then(response => response.json()).
     then(cars => this.cars = cars)



    }
  },
  // Используем событие жизненного цикла- created
  // Поместим в созданую переменную resource 
  // полученную системную переменную $resource
  // 'http://localhost:3000/cars' - откуда брать ресурсы.

  // Документация по библиотеке vur-resource.
  created(){
  // this.resource = this.$resource('http://localhost:3000/cars')
   this.resource = this.$resource('cars')
  }

  }
</script>

<style scoped>
 
</style>
