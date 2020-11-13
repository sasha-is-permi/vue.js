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
        createAd({commit},payload) {
        payload.id = Math.random().toString();

        commit('createAd',payload)
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