

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


   Устаревшая версия: 

  <v-list>
   <v-list-tile >
     <v-list-tile-action>
          <v-icon left> star </v-icon>
     </v-list-tile-action>
     <v-list-tile-content>
          <v-list-tile-title v-text="'Test link'"></v-list-tile-title>
     </v-list-tile-content>
   </v-list-tile>
  </v-list>


Новая версия:

<template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Single-line item</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Two-line item</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Three-line item</v-list-item-title>
        <v-list-item-subtitle>
          Secondary line text Lorem ipsum dolor sit amet,
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          consectetur adipiscing elit.
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>




  -->


<template>



<!-- App.vue -->

<v-app>

 
  <!-- не работает по умолчанию.
  Всплывающее меню, которое надо активировать
  как, например, в базовой теме.
  temporary- по-условию показывается.
  -->

<!-- Использование иконок из библиотеки 
https://dev.materialdesignicons.com/getting-started/vuejs 


  <svg-icon type="mdi" :path="path"></svg-icon>
  <svg-icon type="mdi" :path="path1"></svg-icon>-->

  <v-navigation-drawer 
  app
  temporary
  v-model="drawer"
  >
  <v-list>
    <!-- перебираем массив links.
    key- чтобы vue.js не ругался.
    -->
   <v-list-item
   v-for="link of links"
   :key='link.title'
   :to='link.url'
    >
     <v-list-item-action>
          <v-icon left> {{link.icon}} </v-icon>
     </v-list-item-action>
     <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
     </v-list-item-content>
   </v-list-item>

   <!-- Для кнопки Logout 
   Показываем только если пользователь залогинен:-->
   <v-list-item
   @click="onLogout"
   v-if="isUserLoggedIn"
   >
     <v-list-item-action>
          <v-icon left> exit_to_app </v-icon>
     </v-list-item-action>
     <v-list-item-content>
          <v-list-item-title v-text="'Logout'"></v-list-item-title>
     </v-list-item-content>
   </v-list-item>



  </v-list>
 



  </v-navigation-drawer> 
  
  
  <v-app-bar dense app dark color="primary" max-height="48px">
      
      <!--Иконка мобильного меню
         class="hidden-md-and-up"  -
         скрываем иконку меню при разрешении >960 px
         убрали пока этот класс
      -->
      <v-app-bar-nav-icon
      @click="drawer=!drawer" 
      >
      
      </v-app-bar-nav-icon>
      <!-- Надпись около иконки -->
      <v-toolbar-title>
          <router-link to="/" tag="span" class="pointer">
             Ad application
          </router-link>
        </v-toolbar-title>
       <!-- Растягиваем расстояние между элементами (
       смещаем следующие элементы вправо  
       ) -->
      <v-spacer></v-spacer>

     <!-- скрывать правое меню
      при разрешении ниже sm (960 px) (в vutify sm другой)-->
    <v-toolbar-items class="hidden-sm-and-down">  
     
     <!-- Для создания ссылки - 
     :to="link.url" 
     (в адресной строке становится:)
     http://localhost:8080/#/login
     (поскольку url:'/login')
      -->

   <!--Боковое меню (drawer) -->   
  <v-btn
   dark color="primary" 
   v-for="link in links"
   :key="link.title"
   :to="link.url" 
   >
  <!-- использование иконки из библиотеки 
    https://material.io/resources/icons 
    (путь к библиотеке прописан в index.html)

     <v-icon left>mdi-magnify</v-icon>
    -->
         <v-icon left>  {{link.icon}} </v-icon>
         {{link.title}}
  </v-btn>
       
 
    <v-btn
   dark color="primary" 
   @click="onLogout"
   v-if="isUserLoggedIn" 
    >
        <v-icon left>  exit_to_app </v-icon>
        Logout
  </v-btn>




    </v-toolbar-items>


  </v-app-bar>



<!-- v-content, router-view  -  служебные теги, в которых
выводится роутинг. Если надо просто вывести текст- 
нужно использовать v-main.
Лучше использовать v-main
 -->
   <v-main>
      <router-view></router-view>
  </v-main>

<!-- Показываем сообщение только если есть ошибка -->
  <template v-if="error">
  <v-snackbar
      :multi-line="true"
      :timeout="5000"
      color="error"
      @input="closeError"
      :value="true"
    >
      {{ error }}


        <v-btn
          dark
          @click.native="closeError"
        >
          Close
        </v-btn>

    </v-snackbar>
    </template>

</v-app>
</template>

<!-- Настройка иконок из библиотеки 
https://dev.materialdesignicons.com/getting-started/vuejs -->
<script>
/*
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAirplane } from '@mdi/js'
import { mdiAlarmPanelOutline } from '@mdi/js'

export default {
    name: "my-cool-component",
    components: {
        SvgIcon
    },

    data() {
        return {
            path: mdiAirplane,
            path1:mdiAlarmPanelOutline
        }
    }
}*/

export default{
  data () {
    return {
      drawer:false
     }
  },
  computed: {
   error() {  
     // Обращаемся к геттеру с ошибками  
    return this.$store.getters.error    
   },
   isUserLoggedIn () {
    return this.$store.getters.isUserLoggedIn
   },
  links() {
      // title- название ссылки, 
      // icon- название иконки
      // url- ссылка, ведет на страницу 
      // или элемент
      // orders- заказы
      // New ad - добавить рекламу
      // My ads- показать список реклам

    // Если пользователь вошел в систему- у него
    // 3 ссылки в меню
    // {title:'Orders',icon:'bookmark_border', url:'/orders'},
    
      if (this.isUserLoggedIn){
        return [
   
        {title:'New ad',icon:'note_add', url:'/new'},
        {title:'My ads',icon:'list', url:'/list'} 
        ]
      }
      // если пока не в системе- у него 2 ссылки в меню
      return [
      {title:'Login',icon:'lock', url:'/login'},
        {title:'Registration',icon:'face', url:'/registration'},
      ]

    }
  },
  methods: {
    closeError () {
     // Очищаем ошибки при закрытии окна с ошибками
     this.$store.dispatch('clearError')

    },
    onLogout() {
     this.$store.dispatch('logoutUser')
     // переходим на главную страницу раз разлогинились
     this.$router.push('/')

    }
  }
}

</script>

<style scoped>
.pointer {
  cursor:pointer;
  }
</style>
