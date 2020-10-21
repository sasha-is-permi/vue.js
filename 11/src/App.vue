<!-- Подключение компонент. 
1)
  import Counter from './Counter'
  import Actions from './Actions'
  import SecondCounter from './SecondCounter'

2) локальная регистрация:
    components: {
      appCounter: Counter,
      appActions: Actions,
      appSecondCounter: SecondCounter
    }

 3) использование

<template>
  <div class="container text-center pt-5">
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <hr>
    <app-actions></app-actions>
  </div>
</template>

Можно писать как <appCounter> </appCounter>
так и <app-Counter></app-Counter>



-->

<template>

<!-- 
<div class="container text-center pt-5">
     выводим счетчик 
    передаем параметр counter, определенный в данном компоненте, 
    в  counter.vue. А в counter.vue его принимаем с помощью props
    <app-counter  :counter="counter">  </app-counter>

    выводим кнопочки прибавить/отнять

    // прослушиваем событие увеличения/уменьшения counter  counterUpdated 
    (вызывается из actions.vue при нажатии кнопочек):
    // $event = val (переданная по $emit величина увеличения/уменьшения
    // counter )
    // Далее counter увеличивается, а в counter.vue 
    // с помощью props counter принимается и выводится на экран.
    <app-actions counterUpdated="counter += $event"> </app-actions>
</div>

  Получается- компоненты взаимодействуют через родительский:
  actions.vue -> app.vue -> counter.vue

  Для упрощения ситуации можем использовать шину событий.
  С методами on и emit. 
  Будет много событий за которыми сложно следить. 
  (можно запутаться)

  Во vue.js использована логика redux для этого. 
  vuex- дополнительная разработка, которая предоставляет 
  общую шину для нашего приложения. 
  Будет объект, который описывает состояние всего нашего приложения. 
  В данном случае объект описывет состояние counter.

  Далее все компоненты будут иметь доступ к этому объекту. 

   vue используется в средних и больших web-приложениях.

https://vuex.vuejs.org/ru/

npm install vuex --save
(установка с сохранением зависимости в .json)

Создаем папочку store,  в ней index.js

В index.js настроим объект store, который будет отвечать 
за состояние приложения. 


<div class="container text-center pt-5">
    <app-counter  :counter="counter">  </app-counter>
    <app-actions counterUpdated="counter += $event"> </app-actions>
</div>

-->
  <div class="container text-center pt-5">
    <!-- title- вычисленное computed-свойство. -->
    <h1> {{title}} </h1> 
    <hr>

    <!-- выводим счетчик -->
    <app-counter></app-counter>

    <app-second-counter></app-second-counter>
    <hr>
    <!-- выводим кнопочки прибавить/отнять -->
    <app-actions></app-actions>
  </div>
</template>

<script>
  import Counter from './Counter'
  import Actions from './Actions'
  import SecondCounter from './SecondCounter'

  export default {
      // data(){
  // return {
  //  counter:0
  // }
  // },
    components: {
      appCounter: Counter,
      appActions: Actions,
      appSecondCounter: SecondCounter
    }, 
    computed: {
      title() {
        // Обращаемся к store из index.js
        // Там есть геттер title
          return this.$store.getters.title
      }
    }
  }
</script>
