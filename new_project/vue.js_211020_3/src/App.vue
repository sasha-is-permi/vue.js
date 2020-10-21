

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
 
 
  -->

<template>
<v-app>
  <v-navigation-drawer app>333</v-navigation-drawer>
  <v-toolbar app></v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view>111</router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>

</template>

<script>

  export default {

  }
</script>