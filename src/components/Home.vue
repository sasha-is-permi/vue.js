<template>
<!-- любой элемент с такого тега начинаться будет 
v-for="(item,i) in items"
              :key="i"
              :src="item.src"
 -->

  <div> 
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
             v-for="ad in ads"
              :key="ad.id"
              :src="ad.imageSrc"              
              >
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
          <v-card>
            <!-- Выводим картинку-миниатюру -->
            <v-card-media
              :src="ad.imageSrc"
              height="200px"
            >
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <!-- Выводим для данной картинки её title и description -->
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div>{{ad.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <!--v-spacer - пробелы слева чтобы поместить кнопочкки ниже справа
              Open- открываем карточку
              Buy -что-то покупаем
               -->
              <v-spacer></v-spacer>
              <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
              <!-- class="primary" - задаем цвет кнопки -->
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

</div>


</template>

<script>

export default {

data () {
return {
ads: [
{title:'Фото 1',
description:'Белочка',
promo: false,
imageSrc:'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
id:'123'},
{title:'Фото 2',
description:'Фото неба',
promo: true,
imageSrc:'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
id:'123'}
]
}
} 
}


</script>