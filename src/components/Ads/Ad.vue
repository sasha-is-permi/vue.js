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
       
         <v-card  class="mt-5">
            
            <v-img
           
            :src="ad.imageSrc"
            height="300px"
            >


            </v-img>

            <v-card-text>
              <h2 class="text--primary mb-2"> {{ad.title}} </h2>
              <p class="description"> {{ ad.description }}</p>

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
props:['id'],

computed: {
 
 ad () {

  // Получаем элемент из массива по id
  // Используем store vuex

  const id =this.id;
  return this.$store.getters.adById(id)

  }

}


}


</script>

<style scoped>

.description {
  font-size:16px;
}

</style>