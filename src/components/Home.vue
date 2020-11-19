<template>
<!-- любой элемент с такого тега начинаться будет 
v-for="(item,i) in items"
              :key="i"
              :src="item.src"
 -->

<!-- Если загружена информация из базы данных- процесс лоадинга закончен -->
  <div v-if="!loading">

  <v-container fluid>
   <!-- row- Выравниваем layout по строке
   аттрибут vuetify создает свойство 
   flex-direction:row 
   xs12 - размер div, адаптация 
     <v-carousel  :show-arrows="false"   - без стрелочек прокрутки в карусели
      hide-delimiters - без круглешков внизу у карусели
      (выбор перемещения между картинками)
   -->   
    <v-layout row >
        <v-flex xs12>
           <v-carousel  hide-delimiters        
            >
             <v-carousel-item
             v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.imageSrc"              
              >
              <!--Кнопки, которые ссылаются на карточки -->
              <div class="car-link">
                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </div>

              </v-carousel-item>
           </v-carousel>
        </v-flex>
    </v-layout>
  </v-container>

 <v-container grid-list-lg>
      <v-layout row wrap>
        <!-- Делаем иттерацию по массиву картинок карусели -->
        <v-flex
          xs12
          sm6
          md4
          v-for="ad of ads"
          :key="ad.id"
        >

                  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="ad.imageSrc"
    >

     <!--
      Надпись на картинке 
      <v-card-title>Top 10 Australian beaches</v-card-title>
       -->
    </v-img>
    <!-- Подпись под картинкой
    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> 
    -->

    <v-card-text class="text--primary center1" >
      <div>{{ad.title}}</div>

      <div>{{ad.description}}</div>
    </v-card-text>

    <!-- class="d-flex justify-center" - центрировние кнопок -->
    <v-card-actions class="d-flex justify-center">
      <v-btn 
        :to="'/ad/' + ad.id"
        color="orange"
        text
      >
        Open
      </v-btn>

      <v-btn
        class="primary"
        text
      >
        Buy
      </v-btn>
    </v-card-actions>
  </v-card>        



        </v-flex>
      </v-layout>
    </v-container>

</div>

<!-- Если еще происходит процесс загрузки из базы данных -->

<!-- *********************************************************************************  

центрирование: class="text-sm-center"

**************************************************************************************-->

<div v-else>
   <v-container>
     <v-layout row>
       <v-flex xs12 class="text-sm-center" pt-5>
              <v-progress-circular
              indeterminate
              :size="100"
              :width="4"
              color="purple"
              >
                
              </v-progress-circular>         
       </v-flex>
     </v-layout> 
   </v-container>  
</div> 




</template>

<script>

export default {

/*
Перенесли данные в Ads.js в state, который передается в store index.js
(используем store vuex)

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
} */

computed:{
  
  promoAds(){
      // Обратимся к геттеру (функции) - получаем с помощью него карточки с promo = true
      return this.$store.getters.promoAds
  },

  ads() {  
    // Обратимся к геттеру (функции) - получаем с помощью него все карточки
     return this.$store.getters.ads
  },
  loading(){
    return this.$store.getters.loading
  }
}

}


</script>

<style scoped>
/* Убрал   padding: 5px 15px; - пространстов вокруг кнопки */
  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
.center1 {
  text-align:center;
}


</style>