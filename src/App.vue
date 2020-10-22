

  <!-- Директива app - свойство, которое говорит vuetify
  о том как правильно следить за поведением элементов 
  drawer- всплывающее меню слева 
  toolbar- верхняя часть приложения
  content- основная часть приложения
  footer- подвал
  container - контейнер как в bootstrap.
  Данные строки превращаются в обычные div с классами. 
  Они работают на flexbox. 

  <v-app>
  <v-navigation-drawer app>  </v-navigation-drawer>
  <v-toolbar app></v-toolbar>
     <v-content>
        <v-container fluid>
           <router-view> </router-view>
        </v-container>
     </v-content>
     <v-footer app></v-footer>

</v-app>

Базовая тема

https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/wireframes/base.vue

<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
     
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
     
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>

шаблоны, плагины:

https://weatherless.ru/javascript/vuejs/vuetifyjs-stroim-svoe-prilozhenie-v-stile-material-design/
 
 v-main- тег для обозначения главной части 
 
Работающая минимальная разметка: 

<v-app>
  не работает по умолчанию.
  Всплывающее меню, которое надо активировать
  как, например, в базовой теме.
  <v-navigation-drawer  app>

  </v-navigation-drawer> 

  <v-app-bar app>
   app-bar
  </v-app-bar>


  <v-main>

 
    <v-container fluid>
      container 
   
      <router-view></router-view>
   </v-container> 
  </v-main>

 <v-footer app>
      footer
  </v-footer>
</v-app>
</template>

Смотрим ui-компоненты
navigation drawers:
https://vuetifyjs.com/en/components/navigation-drawers/
Примеры использования, API- какие параметры принимает
данный компонент.<template>
  
</template>

<script>
export default {

}
</script>

<style>

</style> 


Стандартный toolbar: 



<v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

   Добавляем директивы dark color="primary"
   для v-toolbar и v-btn чтобы сделать фон синим.
   Белый цвет текста. 
   Если уберем директиву dark- 
   цвет текста будет белый. 
  -->


<template>
<!-- App.vue -->

<v-app>
  <!-- не работает по умолчанию.
  Всплывающее меню, которое надо активировать
  как, например, в базовой теме.
  temporary- по-условию показывается.
  -->
  <v-navigation-drawer app>

  </v-navigation-drawer> 
    <v-content>
  <v-toolbar dense app dark color="primary">
      
      <!--Иконка меню-->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <!-- Надпись около иконки -->
      <v-toolbar-title>Добавить</v-toolbar-title>
       <!-- Растягиваем расстояние между элементами (
       смещаем следующие элементы вправо  
       ) -->
      <v-spacer></v-spacer>

  
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat dark color="primary">Ссылка</v-btn>
    </v-toolbar-items>


  </v-toolbar>

  </v-content>

<!-- v-content, router-view  -  служебные теги, в которых
выводится роутинг. Если надо просто вывести текст- 
нужно использовать v-main. -->
  <v-content>
      <router-view></router-view>
  </v-content>

</v-app>
</template>

<script>
  export default {

  }
</script>
