<template>
<!-- любой элемент с такого тега начинаться будет 
 -->
  <v-container>
   <!-- row- Выравниваем layout по строке
   аттрибут vuetify создает свойство 
   flex-direction:row 
   xs12 - размер div, адаптация -->   
    <v-layout row xs12>
        <v-flex>
            <h1>Registration</h1>
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