// Подключаем firebase
import fb from 'firebase/app';
require('firebase/auth');
require('firebase/database');

// Для добавления обьявления
// ownerId- кто именно создавал данное обьявление
class Ad {
     constructor(title, description, ownerId, imageSrc='', promo=false,id=null) {
        this.title = title
        this.description = description
        this.ownerId = ownerId
        this.imageSrc = imageSrc
        this.promo = promo
        this.id = id
     }
}

// Первый геттер- работает для всех объявлений
// promoAds- возвращает только те объявления,
// у которых promo=true
export default {
    state: {  
        ads: [
            {title:'Фото 1',
            description:'Белочка',
            promo: true,
            imageSrc:'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id:'1'},
            {title:'Фото 2',
            description:'Фото неба',
            promo: false,
            imageSrc:'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id:'2'},
            {title:'Фото 3',
            description:'Зима',
            promo: true,
            imageSrc:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            id:'3'}
            ]   
    },
    mutations: {
       createAd (state, payload) {
            state.ads.push(payload)                 
       }
    },
    actions: {
        // Вместо payload- используем объект ad
        // createAd({commit},payload) {
        // payload.id = Math.random().toString();
        // commit('createAd',payload)
        // }

        // Раз createAd() работает с базой данных- это async метод
        // с помощью getters можем получить id текущего пользователя
        async createAd({commit,getters},payload) {
        // Вызываем методы из store/actions share.js    
        commit('clearError') 
        commit('setLoading',true)
          
        // Работаем с асинхронными событиями
        // Знаем что пользователь зарегистрирован, поэтому получаем 
        // getters.user.id
        try {
            // payload- данные, переданные из формы.
            // ownerId = getters.user.id - пользователь
            // id- по умолчанию null, но получим из firebase key
            const newAd = new Ad(
                payload.title,
                payload.description,
                getters.user.id,
                payload.imageSrc,
                payload.promo)
            // ref('ads') - подключаемся к базе данных с имененм ads
            // push- добавление элемента в базу данных.
          const ad = await fb.database().ref('ads').push(newAd)
          // используем mutation createAd()- создание в базе данных новой записи
          // ...newAd -развернем полученный объект 
          // (разложим по полям)
          // добавим поле id, включает ключ создаваемой записи из firebase
          // (из базы уже получили id)

         commit('setLoading',false)   // окончание загрузки

          commit('createAd', {
            ...newAd,
            id: ad.key
          })     

        
        } catch (error){
          commit('setError',error.message)
          commit('setLoading',false)  
          throw error // выкинем ошибку чтобы обработать ее в промисе                 
        }


        }
    },    
    getters: {
         ads(state) {
             // Возвращаем все объявления
             return state.ads
         },
         promoAds(state) {
             return state.ads.filter( ad => {
                 // Фильтруем- только те объявления возвращаются
                 // у которых ad.promo true ( сравниваем ad.promo === true, сокращенно ad.promo)
                 return ad.promo
             }
                )
         },

         myAds(state){
            // Фильтруем- оставляем только наши объявления 
            // (еще допишем). Когда заведем user- оставим только объявления,
            // которые принадлежат данному user 
           return state.ads
         },  

         // Чтобы передать id в геттер используем замыкания
         // Используем стрелочную функцию adId:
         // Функция фозвращает только нужные Id
         adById (state) {
              return adId => {
                 // Если у  ad.id id совпадает с переданным в функцию- 
                 
                 return state.ads.find(ad => ad.id === adId)
              }      
         }

    }
}