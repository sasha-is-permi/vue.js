// Подключаем firebase
import fb from 'firebase/app';
require('firebase/auth');
require('firebase/database');
require('firebase/storage');

// Для добавления обьявления
// ownerId- кто именно создавал данное обьявление
class Ad {
     constructor(title, description, ownerId='KaZxIP7qKIMqdZPTRrP9IFxCXX73', imageSrc='', promo=false,id=null) {
        this.title = title
        this.description = description
        this.ownerId = ownerId
        this.imageSrc = imageSrc
        this.promo = promo
        this.id = id
        console.log(ownerId)
     }
}

// Первый геттер- работает для всех объявлений
// promoAds- возвращает только те объявления,
// у которых promo=true
export default {
    state: {  
    /*    
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
            ]   */

            ads: [] 
    },
    mutations: {
       createAd (state, payload) {
            state.ads.push(payload)                 
       },
       // В данный метод (мутацию) надо передать массив готовых объявлений.
       // payload- будет готовый массив c сервера принимаемый
       // state.ads- в нашем приложении массив объявлений  
       loadAds(state,payload) {
          state.ads = payload
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

        // Загруженная картинка
        // payload- переданный из формы массив данных
      //  const image = payload.image

          
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
               // payload.imageSrc,
               '',
                payload.promo)
            // ref('ads') - подключаемся к базе данных с именем ads
            // push- добавление элемента в базу данных.
            const ad = await fb.database().ref('ads').push(newAd)
             
            // Тут будет храниться расширение картинки
        //    const imageExt = image.name.slice(image.name.lastIndexOf('.'))

          // fb.storage- сохраняем элементы
          // в базе данных
     //     const fileData = await fb.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
           // ссылка на файл. Так как грузим 1 файл- забираем
          // ссылку на 1 файл 
      //    const imageSrc = fileData.metadata.getDownloadURLs[0]
  
         
        

          // Меняем ссылку на картинку в базе данных
          await fb.database().ref('ads').child(ad.key).update({
      //      imageSrc
          })

          // используем mutation createAd()- создание в базе данных новой записи
          // ...newAd -развернем полученный объект 
          // (разложим по полям)
          // добавим поле id, включает ключ создаваемой записи из firebase
          // (из базы уже получили id)
              
          // Загрузили элемент в базу данных
          // хотим после этого загрузить на наш storage
          // определенную картинку, которую загружаем в payload.image,
          // получить ссылку на эту картинку. 
          // После этого обновим элемент в базе данных


         commit('setLoading',false)   // окончание загрузки

          commit('createAd', {
            ...newAd,
            id: ad.key,
            imageSrc:"/image" 
         //   imageSrc:imageSrc // imageSrc заменяем на imageSrc, 
            // полученный с сервера

          })     

        
        } catch (error){
          commit('setError',error.message)
          commit('setLoading',false)  
          throw error // выкинем ошибку чтобы обработать ее в промисе                 
        }


        },


        async fetchAds({commit}) {
            commit('clearError') // Очищаем ошибки
            commit('setLoading',true) // установка лоадинга

            // Результирующий массив обьявлений, загруженный с сервера 
            const resultAds =[]

            try {
            // Считываем все данные (once('value')) из таблицы firebase   
            // данная конструкция возвращает promise
            const fbVal = await fb.database().ref('ads').once('value') // массив объявлений + много служебной информации
            const ads = fbVal.val() // принятый с сервера массив объявлений частично со служебной информации
           
            
            Object.keys(ads).forEach(key =>{
                const ad = ads[key] // элемент массива (каждый элемент массива перебираем)
                // Заполняем результирующий массив обьявлений resultAds с помощью класса Ad
                // key - это id нужного нам ad
                resultAds.push(
                    new Ad(ad.title,ad.description,ad.ownerId,ad.imageSrc, ad.promo, key)
                )
            })

            // Передаем   с помощью mutation loadAds скачанный с сервера и приведенный в нужный вид
            // массив обьявлений resultAds в store/ads (массив store: ads)
            commit('loadAds',resultAds)

            commit('setLoading',false) // уже что-то загрузили
            } catch(error) {
             commit('setError',error.message)   // устанавливаем ошибку  
             commit('setLoading',false) // уже что-то загрузили
             throw error //выкидываем ошибку
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