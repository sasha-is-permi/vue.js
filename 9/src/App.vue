
<template>
 <div class="container">

<!-- Меню на bootsatrap
Дописываем ссылки на страницы: 
/ 
/cars
Только ссылки не должны перезагружать страницу.
Для этого заменяем тег <a> </a> тег <router-link></router-link>
из vue.js. 
Поскольку это уже не ссылка- заменяем href на to
Если забайндили to- нужны дополнительные кавычки.
<router-link class="nav-link" :to="'/cars'">Cars</router-link>

Концепция SPA- все должна выполнять одна страничка без перезагрузки 
(даже если есть несколько сттраничек-вкладок).
 -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" >
    <ul class="navbar-nav">
       <!-- <li class="nav-item">
           <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link" :to="'/cars'">Cars</router-link>
        </li> -->
      <router-link tag="li" class="nav-item" exact to="/" active-class="active"> 
        <a class="nav-link"> Home </a> 
      </router-link>

      <router-link tag="li" class="nav-item" to="/cars" active-class="active"> 
        <a class="nav-link"> Cars </a> 
      </router-link>

      <!-- Подключаем вновь созданные динамические страницы -->   
      <router-link tag="li" class="nav-item" to="/car/3" active-class="active"> 
        <a class="nav-link"> Car 3</a> 
      </router-link>

      <router-link tag="li" class="nav-item" to="/car/4" active-class="active"> 
        <a class="nav-link"> Car 4</a> 
      </router-link>

    </ul>
  </div>
</nav>




    <!-- Тут будет рендерится тот компонент, 
    который соответствует текущему роуту. 
    По умолчанию page -->
   <router-view>  </router-view>

</div>	
</template>

<script>


// import App from './App.vue' (в main.js)
export default {
   data () {
    return {
    }
  },
  methods: {
  
  }  


   }




</script>

<style scoped>
 
</style>
