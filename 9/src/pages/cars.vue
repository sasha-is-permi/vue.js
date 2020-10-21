
<template>
    <div>  
	 <h2> Cars page </h2>	
    <!-- Создаем элементы с роутингом (router-link)
    Это будут теги li
    Для формирования 5-ти тегов v-for="car in 5"
    :to="'/car/'+car " - на какую страницу ведет ссылка
    key- динамический атрибут, чтобы vue.js понимал
    где находится каждый из элементов.

     <a> Car {{car}} </a> - создаем ссылки на страницы. 

     -->
    <router-link
       tag="li"
       v-for="car in 5"
       :to="'/car/'+car "
       :key="car"
       
          >
    
    <a>Car {{car}}</a>
</router-link>
	</div>
</template>

<script>


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