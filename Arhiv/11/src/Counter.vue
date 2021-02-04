<template>
<!-- вывод счетчика counter -->
    <h2>Counter: {{counter}}</h2>
</template>

<script>
  export default {
 // прослушка и получение параметра counter из другого компонента
 //   props: ['counter'],  
     computed: {
      counter () {
      // получаем из общего объекта store counter
      // return this.$store.state.counter 
     
      // используем функцию-геттер из store для 
      // дополнительного преобразования переменной из store counter
      // Геттеры не вызываем а просто обращаемся к ним как к объекту.
      // vuex вызовет данную функцию и посчитает
        return this.$store.getters.computedCounter
      }
    }
  }
</script>

<style scoped>

</style>
