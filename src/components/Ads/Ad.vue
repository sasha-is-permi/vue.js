<template>
<!-- любой элемент с такого тега начинаться будет 
 -->
  <v-container>
   <!-- row- Выравниваем layout по строке
   аттрибут vuetify создает свойство 
   flex-direction:row 
   xs12 - размер div, адаптация -->   
    <v-layout row>
        <v-flex xs12>
       
         <v-card>
            
            <v-img
            src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
            height="300px"
            >


            </v-img>

            <v-card-text>
              <h1 class="text--primary"> Заголовок </h1>
              <p> Текст заголовка </p>

            </v-card-text>

            <v-card-actions>
                 <v-spacer>  </v-spacer>                
                 <v-btn class="warning"> Edit  </v-btn>
                 <v-btn class="success"> Buy   </v-btn>
            </v-card-actions>

         </v-card>

        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {

data () {
return {}
} 
}


</script>