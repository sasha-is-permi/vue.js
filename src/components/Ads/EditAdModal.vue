<template>

<div >
    <v-dialog
      v-model="modal"
      width="400"

    >
      <template v-slot:activator="{ on }">
        <v-btn
          class="warning mr10"
          v-on="on"
        >
         Edit
        </v-btn>
      </template>

 <v-card>
      <v-container>
        <v-layout row>


          <v-flex xs12>
            <!-- Заголовок диалогового окна -->  
            <v-card-title>
              <h1 class="text--primary">Edit ad</h1>
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
                name="title"
                label="Title"
                type="text"
                v-model="editedTitle"
              ></v-text-field>
              <v-textarea
                name="description"
                label="Description"
                type="text"
                v-model="editedDescription"
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
              <!-- Сдвижка кнопок вправо -->   
              <v-spacer></v-spacer>
              <v-btn @click="onCancel">Cancel</v-btn>
              <v-btn class="success" @click="onSave">Save</v-btn>
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
      // в ad пришли параметры из базы данных- описание
      editedDescription: this.ad.description,
       // в ad пришли параметры из базы данных- заголовок
      editedTitle: this.ad.title
    }
  },
  methods: {
    onCancel () {
      // Если нажали на отметну- восстанавливаем первоначальные значения,
      // которые были до начала редактирования
      this.editedDescription = this.ad.description
      this.editedTitle = this.ad.title
      // Закрываем модальное окно
      this.modal = false
    },
    onSave () {
      // Если введенные поля не пустые - вызываем action из store updateAd,
      // Которые обновляет поля обьявления в базе данных, и 
      // передаем туда отредактированные роля description и title
      if (this.editedDescription !== '' && this.editedTitle !== '') {

        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id // id- чтобы найти данное обьявление в базе данных
        })
        // Закрываем модальное окно
        this.modal = false
      }
    }
  }
}
</script>

<style scoped>
  .mr10 {
    margin-right: 10px;
  }

</style>
