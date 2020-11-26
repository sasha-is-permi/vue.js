  <template>
<!-- Если массив карточек подгрузился и внем что-то есть - 
  показываем нащи карточки
  -->
  <v-container v-if="!loading && myAds.length!=0">
   <!-- row- Выравниваем layout по строке
   аттрибут vuetify создает свойство 
   flex-direction:row 
   xs12 - размер div, адаптация 
   sm6 offset-sm3 - центрирование получается.
   
   -->   
  <v-flex xs12 sm6 offset-sm3>
  <h1 class="text-secondary mb-3"> My ads </h1>

<!-- elevation-10 - тень -->
  <v-card
  class="elevation-10 mb-5"
  v-for="ad in myAds"
  :key="ad.id"
  >
  
  <v-layout row >
    
      <v-flex xs4>
         <!-- Выводим список созданных объявлений-->
          <v-img
            :src="ad.imageSrc"
            height="160px"
          >
 
          </v-img>
        
      </v-flex>

      <v-flex xs8>
       <!-- Выводим список созданных объявлений-->
          <v-card-text>
            <h2 class="text-primary"> {{ad.title}}</h2>     
            <p> {{ad.description}} </p>
          </v-card-text>

          <v-card-actions>
             <v-spacer></v-spacer>  
             <v-btn
              class="info mr-3"
              :to="'ad/' + ad.id"
              >  Open </v-btn> 
              <!--
               <v-btn
              class="warning mr-3"
               > Delete </v-btn> 
              -->

          </v-card-actions> 
      </v-flex>

  

  </v-layout>

   



  </v-card>

  </v-flex>
  </v-container>


<!-- Если прошла загрузка но обьявлений не найдено -->
  <v-container  v-else-if="!loading && myAds.length === 0">
       <v-flex xs12 class="text-xs-center">
         <h1 class="text--primary"> You have no ads </h1> 
       </v-flex>    
  </v-container>
      
   <!-- Иначе- пока идет загрузка -->   
   <div  v-else class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="100"
        :width="4"
        color="yellow"
      ></v-progress-circular>

  </div>    


  </template>

<script>

export default {
/*
data () {
return {
  ads: [
   {title:'Фото 1',
     description:'Белочка',
     promo: false,
     imageSrc:'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
     id:'1'},
   {title:'Фото 2',
     description:'Фото неба',
     promo: true,
     imageSrc:'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
     id:'2'},
   {title:'Фото 3',
      description:'Зима',
      promo: false,
      imageSrc:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      id:'3'}
       ]


}
} 
*/
computed:{
  
  myAds() {  
    // Обратимся к геттеру (функции) - получаем с помощью него карточки пользователя
     return this.$store.getters.myAds
  }
}, 
loading () {

  return this.$store.getters.loading
}


}


</script>