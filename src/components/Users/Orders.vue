<template>
<!-- любой элемент с такого тега начинаться будет 
 -->
  <v-container>
   <!-- row- Выравниваем layout по строке
   аттрибут vuetify создает свойство 
   flex-direction:row 
   xs12 - размер div, адаптация 
   sm6- для экранов sm- в половину экрана показываем
    
   offset-sm-5 - для посередине показываем  
   
   -->   
    <v-layout row xs12 sm6 offset-sm-3 > 
        <v-flex>

    <h1 class="text--secondary mb-3"  > Orders </h1>       
          
          <v-list
      subheader
      two-line
      flat
    >
  <!--  <v-subheader>Hangout notifications</v-subheader> -->

      <v-list-item-group 
        v-model="settings"
        multiple
        v-for="order in orders"
        :key = "order.id"
      >

      <!--  :input-value="active" - актвивизация чекбокса
      v-slot:default="{ active }" 
       -->
        <v-list-item   class="d-flex justify-center">
          <template >
            <v-list-item-action>
              <v-checkbox
               
                @change="markDone(order)"
                :input-value="order.done"
                color="success"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{order.name}}</v-list-item-title>
              <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
            </v-list-item-content>

          <v-list-item-action>
                  <v-btn 
                  :to="'/ad/' + order.adId"
                  class="primary"> Open </v-btn>     
            </v-list-item-action>


             </template>
   


        </v-list-item>
          
         

      </v-list-item-group>
    </v-list>




        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {

data () {
return {
orders: [
{
   id: 'fds3',
   name: 'Alexandr',
   phone:'8-902-79-495-39',
   adId: '123',
   done: false

}

]
}
},
methods: {

markDone(order) {

order.done= true;

}


}


}


</script>

<style scoped>

.center1{
  text-align:center;
}

</style>