<template>

<div >
    <v-dialog
      v-model="modal"
      width="400"

    >
      <template v-slot:activator="{ on }">
        <v-btn
          class="primary mr10"
          v-on="on"
        >
         Buy
        </v-btn>
      </template>

 <v-card>
      <v-container>
        <v-layout row>


          <v-flex xs12>
            <!-- Заголовок диалогового окна -->  
            <v-card-title>
              <h2 class="text--primary center1">Do you want to buy it?</h2>
            </v-card-title>
          </v-flex>
        </v-layout>
          <!-- Разделитель - под заголовком черта -->
        <v-divider></v-divider>

        <!-- Содержимое диалогового окна -->
        <v-layout row>
          <!-- xs12- диалоговое окно без уменьшения при разрешении > xs -->
          <v-flex xs12>
            <v-card-text>  <!-- Тег для обозначения текстового поля -->
              <v-text-field
                name="name"
                label="Your name"
                type="text"
                v-model="name"
              ></v-text-field>
              <v-textarea
                name="phone"
                label="Your phone"
                type="text"
                v-model="phone"
              ></v-textarea>
            </v-card-text>
          </v-flex>
        </v-layout>

       <!-- Разделитель - под текстом изменения полей черта -->
        <v-divider></v-divider>

       <!-- Кнопочки  row- расположение в строку --> 
        <v-layout row>
          <v-flex xs12>
            <v-card-actions> <!-- *** тег для обозначения кнопочек *** -->
              <!-- Сдвижка кнопок вправо 
              Если аттрибут localLoading=true- добавляем атрибут disabled
              (когда нажали на кнопочку save он включается- кнопки неактивны больше)
              :loading = "localLoading"
              используем локальную загрузку, а не общую.
              Если общий loader- вся страница перезагрузится, 
              а мы хотим показать в рамках данного модального окна    


              -->   
              <v-spacer></v-spacer>
              <v-btn 
              @click = "onCancel"
              :disabled = "localLoading"
              >Close</v-btn>

              <v-btn 
              class="success" 
              @click="onSave"
              :disabled = "localLoading"
              :loading = "localLoading"
              >
              Buy it!</v-btn>

            </v-card-actions>
          </v-flex>
        </v-layout>


      </v-container>
    </v-card>
    </v-dialog>
  </div>

</template>

<script>
export default {
  // Получаем ad 
  // (при вызове данного компонента передаем данный параметр)
  // ad нужен для получения значений полей из бащы данных,
  // которые были до начала редактирования.
  props: ['ad'],
  data () {
    return {
      modal: false,
      name: "",
      phone: "",
      localLoading: false
    }
  },
  methods: {
    onCancel () {

      // Отменяем значение- чтоб оно не сохранялось в модалке
      this.name = ""
      this.phone=""
      // Закрываем модальное окно
      this.modal = false

    },
    onSave () {
      // Если введенные поля не пустые - вызываем action из store 
      if (this.name !== '' && this.phone !== '') {
      
      this.localLoading = true

      // вызываем action. В скобках его название, затем payload, который будем ему передавать. 
      // ad приходит как параметр (props) в данный компонент
        this.$store.dispatch('createOrder', {
         name: this.name,
         phone: this.phone,
         adId: this.ad.id,
         ownerId: this.ad.ownerId
        })
        // После того как завершится данное синхронное событие
        // вызываем метод finally
        .finally( () => {
          this.name=''
          this.phone=''
          this.localLoading ="false"
          this.modal = false
        }) 

        // Закрываем модальное окно
        
      }
    }
  }
}
</script>

<style scoped>
  .mr10 {
    margin-right: 10px;
  }

  .center1 {
    text-align: center
  }

</style>
