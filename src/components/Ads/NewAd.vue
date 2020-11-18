<template>
<!-- любой элемент с такого тега начинаться будет 
 -->
  <v-container>
   <!-- row- Выравниваем layout по строке
   аттрибут vuetify создает свойство 
   flex-direction:row 
   xs12 - размер div, адаптация -->   
    <v-layout row >
        <v-flex xs12 sm-6 offset-sm3>
            <h1 class="text--secondary mb-3"> Create new ad </h1>
            <v-form v-model="valid" ref="form" validation class="mb-3">
                   
                   <!-- requied - аттрибут html-5
                   rules- правило- не должно отсутствовать поле
                   -->
                    <v-text-field
                      label="Ad title"
                      name="title"
                      type="text"
                      v-model="title"
                      requied
                      :rules="[v => !!v || 'Title is reqied']"
                    
                    ></v-text-field>
  
                    <v-text-field
                      label="Ad description"
                      name="description"
                      type="text"
                      v-model="description"
                      :rules="[v => !!v || 'Description is reqied']"
                      ></v-text-field>
             </v-form>

             <v-layout row ml-1> 
               <v-flex xs12> 
                   <v-btn class="warning">
                       Upload
                   <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
            </v-flex>
             </v-layout>    

             <v-layout row mt-3 ml-1> 
               <v-flex xs12> 
     
                 <!--  <img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" height="100px"/>  -->
               
               </v-flex>
             </v-layout>   


              <v-layout row mt-3 ml-1> 
               <v-flex xs12> 
                  <v-switch
                     color="primary"
                     label="Ad to promo?"
                     v-model="promo">
                  </v-switch>               
               </v-flex>
             </v-layout>   


              <v-layout row mt-3 ml-1> 
               <v-flex xs12> 
                  <v-spacer></v-spacer>  
                  <v-btn 
                  :loading = "loading"
                  :disabled="!valid || loading"
                  class="success"
                  @click="createAd"
                  > Create ad </v-btn>
               </v-flex>
             </v-layout>   

        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {

data () {
return {
   title:'',
   description:'',
   promo:false,
   valid:false
}
},
computed: {
  loading () {
    return this.$store.getters.loading
  }
},
methods: {
createAd() {
  if(this.$refs.form.validate()){
      const ad= {
         title: this.title,
         description: this.description,
         promo: this.promo,
         imageSrc: 'https://cdn-images-1.medium.com/max/850/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg'
      }
     // Добавляем данное объявление в общий список
     // Метод createAd из Ads.js
     
     // После того как создаем элемент переходим на страницу 
     // "list", где можем видеть этот элемент
     this.$store.dispatch('createAd', ad)
     .then( () => {
        this.$router.push('/list')
     })
     .catch( () => {} ) // Если ошибка- она выведется визуально (это ранее предусмотрено), 
     // а на новую страницу переходить не будем


  }
}
}
}


</script>