<template>
<!--elevation - добавляет box shadow на элемент.
Flex центрирование формы:
    align="center"
    justify="center"
  
    12 колонок форма занимает- для маленьких экранов совсем
    Начиная с sm-8, начиная с md- 6.
     cols="12"
     sm="8"
     md="6"

    prepend-icon="mdi-account" - какая иконка должна быть вставленна
    перед текстовым input.

    label="Login" - то, что написанно  в поле ввода. 


-->

        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="6"
            >
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-toolbar-title>Registration form</v-toolbar-title>
                                  
                </v-toolbar>
                <v-card-text>
                  <v-form v-model="valid" ref="form" lazy-validation>
                    <v-text-field
                      label="Email"
                      name="email"
                      prepend-icon="mdi-account"
                      type="email"
                      v-model="email"
                      :rules="emailRules"
                    ></v-text-field>
  
                    <v-text-field
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      :counter="6"
                      v-model="password"
                      :rules="passwordRules"
                    ></v-text-field>

                     <v-text-field
                      label="Confirm password"
                      name="confirm-password"
                      prepend-icon="mdi-lock"
                      type="password"
                      :counter="6"
                      v-model="confirmPassword"
                      :rules="confirmPasswordRules"
                    ></v-text-field>


                  </v-form>
                </v-card-text>
                <!-- Под формой- для отправки формы. 
                v-spacer кнопочку Login перемещает вправо.
                При клике на кнопочку "Login"- 
                вызываем метод onSubmit
                
                :loading="loading"
                Вызываем computed-свойство loading

                :disabled="!valid || loading"
                Кнопка выключена если форма не валидна
                или loading=true 
                  -->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                  @click="onSubmit"
                  color="primary"
                  :loading="loading"
                  :disabled="!valid || loading"
                  >Create account</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
</template>

<script>


const emailRegex =  /.+@.+/

export default {

data () {
return {
   email:'',
   password:'',
   confirmPassword:'',
   valid:false,
   // v- текущая вводимая величина в поле ввода
   // v === this.password ||  - если текущая введенная величина 
   // (в поле подтверждения пароля) совпадает с текущим паролем-
   // тогда валидация проходит без ошибки. 
   // Иначе - сообщение о несовпадении паролей.
       emailRules: [
        v => !!v || 'E-mail is required',
        v =>emailRegex.test(v) || 'E-mail must be valid',
      ],
       passwordRules: [
        v => !!v || 'Password is required',
        v =>( v.length >=6) || 'Name must be more 6 characters',
      ],
       confirmPasswordRules: [
        v => !!v || 'Password is required',
        v => v === this.password || 'Пароли не совпадают',
      ]


} 
},
 computed: {
      loading () {
        return this.$store.getters.loading
      }
 },
methods: {
onSubmit() {
// login
if (this.$refs.form.validate()) {
    const user= {
        email:this.email,
        password:this.password
    }
   // console.log(user)
   // Вызываем action registerUser из store/index.js ,
   // передаем туда введенный логин и пароль чтобы записать их в базу firebase
   // Получем в ответ promise, поэтому можем использовать 
   // then и catch:
          this.$store.dispatch('registerUser', user)
          .then(()=>{
            // Переходим на главную страницу
            this.$router.push('/')
          })
          .catch(()=>{})
         // .catch(err=>console.log(err))
    }
}
}
}

</script>