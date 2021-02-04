
<template>
    <div>  
    <h4> Car name: {{ $route.query.name }} </h4>
    <h5> Car year: {{ year }} </h5>

    <div class="scroll"></div> 
<!--
Если хэш совпадает с id элемента- браузер до него скроллит
(прокручивает)       
http://localhost:8080/car/4/full?name=mazda&year=2000#scroll1
-->
    <h6 id="scroll1"> Заголовок </h6>

    <div class="scroll"></div> 
	</div>
</template>

<script>


export default {
   data () {
    return {
     }
  },
  methods: {
  },
  computed: {
     year(){
      return this.$route.query.year
     }
   }, 
   // Данный метод вызывается перед тем как зайти на данный роутер.

   beforeRouteEnter (to, fromR, next) {
       console.log('beforeRouteEnter');
       // Если next вызываем- навигация происходит
       next(); 

   }


   }
</script>

<style scoped>
 .scroll{
  width:100px;
  height:1000px;
  background: #ccc;
 }

</style>