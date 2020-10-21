
<template>
    <div>  
      <!-- Выводим машину со значением id --> 
	 <h2> Car id {{id}} </h2>	
    <!--Настроим возврат на главную страницу. Можно воспользоваться 
    router-link. Но попробуем по-другому. 
   Програмная навигация- при клиуе на кнопку вызываем функцию.
     @click="goBackToCars-->
    <button class="btn btn-sm btn-default mb-2" @click="goBackToCars">Back</button>
    <br>
    <!-- Используем роутинг с router-link
    пишем что тэг- это кнопка (для bootstrap),
    to- путь куда перейти
    -->
    <!--
       Улучшим запись
    <router-link 
        class="btn btn-info mt-2"
        tag="button"
        :to="'/car/' + id + '/full'"
        > 
        Full info
    </router-link>
    -->
    
    <!-- Улучшим определение подстраничек 
    Определим свойство name (путь url к компоненту)
    в routes.js 
    Передаем query- параметры (параметры передаются компоненту
    в адресной строке)
    -->
       <router-link 
        class="btn btn-info mt-2"
        tag="button"
        :to="{name:'carFull', params:{id:id},query:{name:'mazda',year:2000},
        hash:'#scroll1'}"
        > 
        Full info
    </router-link> 

    <hr/>
    <!-- Говорим куда будем рендерить (выводить) саброуты 
    (дополнительные компоненты/странички)
    Тут будет выводиться содержимое carFull.vue
    -->
    <router-view></router-view>
	</div>
</template>

<script>


export default {
   data () {
    return {
       // Получаем id с помощью системной переменной,
       // которую предоставляет библиотека vue  router
       // id: this.$router.currentRoute.params['id']
       // Можно так:
       id: this.$route.params['id']
    }
  },
  watch: {
    $route(toR,fromR){
  // this.is- текущий id. 
  // toR.params['id'] - туда, куда хотим перейти 
  // Теперь при выборе в меню другого компонента корректно 
  // изменяется его id   
  // Когда что-то отслеживаем- нужно следить за текущим роутом
     this.id = toR.params['id']
    }
  },
  methods: {
     goBackToCars(){
        // Переходим на родительскую страницу cars
        // Добавляем в истоию просмотров эту страницу-
        // при этом переходим на неё
           this.$router.push('/cars')       
     }
  }, 
  beforeRouteLeave (to, fromR, next) {
     console.log('beforeRouteLeave');
    // Если на вопрос- хотите ли уйти со странички ответили 
    // утвердительно- вызываем метод next() 
     if (window.confirm('Are you sure you want to leave?')) {
        next(true)
     }  else {
    // Иначе не уходим со странички    
      next(false);
     }
  }
  
   }
</script>

<style scoped>
 
</style>