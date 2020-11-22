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

                 <!--При щелчке на кнопке- вызываем 
                 метод triggerUpload, в котором прописана                  
                 функция клика 
                 (обращаемся к указателям refs, находим 
                 fileInput (присвоен input), м вызываем его click())
                 this.$refs.fileInput.click()-->
                   <v-btn class="warning" @click="triggerUpload">
                       Upload
                   <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                    <!-- При нажатии на кнопку Upload будем вызывать 
                    input. Окно выбора файла должен вызываться при нажатии кнопочки upload,
                    а не новой кнопочки
                    accept="imafe/*" - выбираем только картинки
                    (png, jpg и т.д.)
                    ref="fileInput" - ссылку такую делаем для input
                    @change="onFileChange" - при выборе файла в окошке выбора-
                    вызываем метод onFileChange

                     -->
                    <input
                     ref="fileInput"
                     type="file" 
                     style="display:none;"
                     accept="image/*"
                     @change="onFileChange"
                     >


            </v-flex>
             </v-layout>    

             <v-layout row mt-3 ml-1> 
               <v-flex xs12> 
     <!-- Если переменная imageSrc заданна- передаем этот путь в данный тег-->
                 <img :src="imageSrc" height="100px" v-if="imageSrc"/>  
               
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
                  <!--  отключена кнопочка пока картинка не выбрана
                  и пока не валидна форма 
                 
                  -->
                  <v-btn 
                  :loading = "loading"
                  :disabled="(!valid  ||  !image) || loading"
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
   valid:false,
   image:null,
   imageSrc:''
}
},
computed: {
  loading () {
    return this.$store.getters.loading
  }
},
methods: {
createAd() {
  // Если есть картинка- выполняем определенный метод
  if(this.$refs.form.validate() && this.image){
      const ad= {
         title: this.title,
         description: this.description,
         promo: this.promo,
         // Будем посылать на сервер загруженный файл
         image: this.image
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
},
triggerUpload () {

  this.$refs.fileInput.click()
},
// При выборе файла- загружаем его
onFileChange(event){
  // В file хранится то изображение, которое будем загружать
  const file = event.target.files[0]

  // Переменная reader является экземпляром класса 
  // FileReader
  const reader = new FileReader()
  
  reader.onload = e => {
    console.log(e)
    this.imageSrc = reader.result
  }
  // Читаем файл
  reader.readAsDataURL(file)
  this.image = file

}


}
}


</script>