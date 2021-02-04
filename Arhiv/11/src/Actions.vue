<template>
    <div>
      <!--При нажатии на данную кнопку увеличиваем счетчик-->
      <button class="btn btn-success" @click="updateCounter(1)">Add</button>
      <!-- При нажатии на данную кнопку уменьшаем счетчик -->
      <button class="btn btn-danger" @click="updateCounter(-1)">Subtract</button>
    </div>
</template>

<script>
  export default {
// Передаем по событию counterUpdated (слушаем его из других компонентов)
// сумму увеличения/уменьшения переменной counter- на велечину val 
// (+1 или -1)
// 
//   methods:{
 //     updateCounter(val){
 //     this.$emit('counterUpdated',val)      
 //     }
 //     }, 



// В app.vue: прослушиваем событие увеличения/уменьшения counter  counterUpdated :
// $event и будет val

    methods: {
      updateCounter(val) {
        // при нажатии на кнопки увеличения/уменьшения
        // увеличиваем/уменьшаем counter из объекта store 
        // this.$store.state.counter += val
         
        // Вызываем функцию-mutation changeCounter
        // Она, в свою очередь, изменяет state.counter
        // в эту функцию передаем значение val- как изменять counter.
        // Можем передавать только один параметр.
        // Если хотим передать несколько значений-
        // нужно сформировать объект, его передать.
        // а в mutation работать с объектом
        // правила vuex: мы не должны передавать 
        // асинхронные события в mutation (setTimeout()).
        // Для использования асинхронных событий есть другие способы. 

        // this.$store.commit('changeCounter', val)

        // С помощью метода dispatch обращаемся 
        // к асинхронному методу asyncChangeCounter,
        // передаем туда объект как параметр- 
        // на сколько изменять counter (val),
        // на сколько задерживать выполнение метода 
        // (timeoutDelay)
        this.$store.dispatch('asyncChangeCounter', {
          counterValue: val,
          timeoutDelay: 1200
        })
      }
    }
  }
</script>

<style scoped>

</style>
