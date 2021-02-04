
<template>
<!-- Создаем форму ввода e-mail, используя bootstrap -->
  <div class="container">
    <!-- отступ padding top 3 (добавляет отступ сверху 1 rem)-->
    <form class="pt-3" @submit.prevent="onSubmit">
      <!-- input и переменная email  связаны с помощью директивы v-model -->
      <div class="form-group">
        <label for="email">Email</label>
        <!-- Событие input слушается директивой v-model
        В него передаем инициализацию нашей валидации 
        $v -отвечает за все валидации которые есть в компоненте
        $v.email- валидируем поле email.
        $touch() - вызываем инициализацию валидации

       // @input="$v.email.$touch()"

       изменяем- делаем валидацию на событие blur
         
      Добавляем класс bootstrap  is-invalid (сообщает об ошибке) 
      только если есть ошибка в input   
      
      Если есть ошибка- добавляем динамический класс is-invalid
      к данному input
      :class="{'is-invalid':$v.email.$error}"
      Когда вводим e-mail неправильно и убираем фокус- получается цвет ошибки. 
      Корректный e-mail - input  в синем цвете.
   
        -->
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{'is-invalid':$v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
        >
        <!-- v-if="!$v.email.requred" - если в поле e-mail введено пустое значение-
        данное сообщение выводится 
        Если ничего не введено пока- $v.email.requred=false, но 
        класс не добавляется.
        Потому что валидация начинается с добавления и потери фокуса:
         @blur="$v.email.$touch()".

        Если e-mail некорректный: 
        v-if="!$v.email.email"
        -->
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">Email is incorrect</div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email is already exists</div>
        <!--  <pre>  {{$v.email}} </pre> -->

      </div>

        <div class="form-group">
        <label for="password">Password</label>
        
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{'is-invalid':$v.password.$error}"
          @blur="$v.password.$touch()"
          v-model="password"
        >
       
     <div class="invalid-feedback" v-if="!$v.password.minLength">
       <!-- $v.password.$params.minLength.min  - то число, 
       которое передавали в валидатор. 
       Первый раз при пустом  пароле е ругается- надо использовать 
       валидатор requied ещё.-->

       Min length of password is {{$v.password.$params.minLength.min}}. 
       Now it is {{password.length}}
     </div>          


      </div>

          <div class="form-group">
        <label for="confirm">Confirm password</label>
        
        <input
          type="password"
          id="confirm"
          class="form-control"
          :class="{'is-invalid':$v.confirmPassword.$error}"
          @blur="$v.confirmPassword.$touch()"
          v-model="confirmPassword"
        >
       
     <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
        Пароль не подтвержден 
     </div>          


      </div>
    


     

      <!-- Тут есть объект: 
      значение с ключом e-mail- предоставляет валидацию 
      для данного input
      "required": false - это значит в данный момент input пустой.
      "$invalid": true - это значит что этот control неверный -
      в нем есть какая-то ошибка. 
      "$dirty": false - ещё не заводили в input ничего
       "$error": false - нет пока никакой ошибки в input 
       (когда запускаем input- он еще пустой, так и должно быть
       если введем значение но оно не соответствует валидации- будет true)
       "$pending": false - поле предназначенно для синхронных валидаторов. 
       "$params" - различные параметры которые поступают в валидацию.
       Если используем валидатор для длины строки- тут будеи знать 
       настоящую длину строки. 
       Далее идут глобальные объекты которые отвечают 
       за всю форму в данном компоненте. 

       Ввели значение e-mail.
       Становится  "required": true 
       это значит что валидация осуществляется.
       "$invalid": false - данный control правильный 
       "$dirty": true - ввели значение в input 
       "$error": false - нет пока никакой ошибки в input 

       Уберем e-mail.
       Становится  "required": false 
       это значит что валидация не осуществляется.
       (нет значащих символов- только пробелы если)
       "$invalid": true - данный control не правильный 
       "$dirty": true - ввели значение в input 
       "$error": true - есть ошибка в input 


      {
  "email": {
    "required": false,
    "$model": "",
    "$invalid": true,
    "$dirty": false,
    "$anyDirty": false,
    "$error": false,
    "$anyError": false,
    "$pending": false,
    "$params": {
      "required": {
        "type": "required"
      }
    }
  },
  "$model": null,
  "$invalid": true,
  "$dirty": false,
  "$anyDirty": false,
  "$error": false,
  "$anyError": false,
  "$pending": false,
  "$params": {
    "email": null
  }
} 
      
После добавления валидатора email у нас добавляется ключ, относящийся к email. 
Пишем текст test в input: 

  {
  "required": true, // есть текст в input
  "email": false,   // ошибочный e-mail. Если напишем test@mail.ru - будет true
  // Пустое поле- тоже тоже "email": true, поэтому нужно проверить required тоже
  "$model": "test",
  "$invalid": true,
  "$dirty": true,
  "$anyDirty": true,
  "$error": true,
  "$anyError": true,
  "$pending": false,
  "$params": {
    "required": {
      "type": "required"
    },
    "email": {
      "type": "email"
    }
  }
} 

При каждом вводе буквы проходит валидация. 
Это потому что мы инициализируем валидацию при событии input. 
Лучше делать валидацию не на input а на потерю фокуса- событие blur 



    $v.email - показать валидацию относящуюся только к email  
    Для правильной валидации  $v.email.email  должен быть true 
    и $v.email.required должен быть true
      
    <pre>  {{$v.email}} </pre> 
    
    
    Аттрибут disabled- отключает кнопку.
    Поскольку пишем javascript- делаем bind.
    В disabled- можно проверять все поля- валидны ли они
    :disabled="$v.passvord.$error || "
    Можно написать проще:
    $v.$invalid 
    Если не прошла валидация- кнопка выключена.
    -->

    <button type="submit" 
    class="btn btn-success" 
     :disabled="$v.$invalid"
     > Submit </button>

    </form>
  </div>
</template>

<script>

import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

// Экспортируем содержимое этой компоненты (<template> + подключенный javascript код и CSS)
// Чтобы main.js приняла информацию и вывела её:
// import App from './App.vue' (в main.js)
export default {
   data () {
    return {
    form: {
      password:''
    },  
    email: '',
    password:'',
    confirmPassword:''  
    }
  },
  methods: {
    onSubmit(){
     console.log('Email',this.email);
     console.log('Password',this.password);
    }
  },  



   // специальное поле теперь есть после подключения
   // пакета для валидации 
   // В этом объекте как ключи указываем названия тех 
   // полей которые хотим отвалидировать. 
   // Встроенные валидаторы в данную библиотеку:
   // https://vuelidate.js.org/#sub-builtin-validators
   
   // Валидаторы импортируются так:
   // import { required, maxLength } from 'vuelidate/lib/validators'
   // декоспозиция объекта (выбираем определенные нужные значения)
   // (в app.vue после тега <script> вставляем)

   // Добавим валидатор email 
   // (импортировали его также)
   // Принимает действительные адреса электронной почты.
   // Имейте в виду, что вам все равно придется тщательно проверить его 
   // на вашем сервере, так как невозможно сказать, является ли адрес реальным, 
   // не отправив проверочное письмо.

   validations: { 
    email: {
     // Передаем валидатор required
     // можно было написать : 
     // req:required
     // В ES6: если ключ и значение в объекте совпадают:
     required,
     //  required:required
     email,
     uniqEmail: function(newEmail){
       
       // Если пустая строка- должен работать валидатор requred
       if (newEmail==='') return true 

       // Если состояние текущее валидно- функция возвращает true,
       // если не валидно- false.
       // Если новый почтовый ящик не test@mail.ru- 
       // то возвращаем true. Иначе false.
       // return newEmail !=='test@mail.ru'

       // Если надо сходить на сервер и получить данные:
       return new Promise((resolve,reject) => {
        // Выполняем действие через 1 сек. 
       setTimeout( () => {
         // Если новый e-mail не 'test@mail.ru'- значение true в value-
         // валидация пройдена.
          const value = newEmail !=='test@mail.ru'
          // возврат значения value после окончания setTimeOut
          resolve(value)
       }, 1000)
       // Это асинхронная валидация (с задержкой)


       })



     }
    },
     password: {
     // minLength(6)- функция-замыкание. В нее передаем 6.
     minLength:minLength(6)
     },
     confirmPassword: {
       // передаем строку с названием поля, присутстующее в инстансе для валидации
       // Данное поле должно быть точно такое же как и поле пароля
      // sameAs:sameAs('password') 

      // можно так: передаем текущий инстанс vue. 
      // Возвращаем то поле (переменную) по которому надо смотреть идентичность.
      // Тогда можно использовать любой уровнь вложенности.
      // Например,   return vue.form.password
      // (обращаемся к этому же инстансу vue, в поле data- объект form,
      // у него поле password)
     // А в нашем случае: return vue.password 
     sameAs:sameAs( (vue)=>{
       return vue.password       
     })     


     }
   }
}



</script>

<style scoped>
 
</style>
