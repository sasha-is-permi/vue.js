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
       
           <v-card v-if="!loading" class="mt-5">
            
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
                <!-- <v-btn class="warning"> Edit  </v-btn> 
                получаем computed-свойство ad (характеристики обьявления из stote). 
                Передаем параметром в компонент это свойство-->
              <addEditAdModal :ad="ad"></addEditAdModal>
                      <v-btn class="success"> Buy   </v-btn>
            </v-card-actions>

         </v-card>
       
        <div v-else class="text-sm-center"> 
            <!-- крутящееся колечко ожидания -->
              <v-progress-circular
              indeterminate
              :size="100"
              :width="4"
              color="green"
              >
                
              </v-progress-circular>      
        </div>  
       
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import EditAdModal from './EditAdModal'


export default {
props:['id'],

computed: {
 
 ad () {

  // Получаем элемент из массива по id
  // Используем store vuex

  const id =this.id;
  return this.$store.getters.adById(id)

  },
    loading () {
      return this.$store.getters.loading
    }

},
  components: {
    addEditAdModal: EditAdModal
  }


}


</script>

<style scoped>

.description {
  font-size:16px;
}

</style>