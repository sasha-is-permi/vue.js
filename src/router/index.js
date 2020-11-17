import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
// @- значит, нужно смотреть из корня каталога/папочка src
// файл Home.vue
//
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import AdList from '@/components/Ads/AdList'
import NewAd from '@/components/Ads/NewAd'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/Users/Orders'


Vue.use(Router)
// Компонент ad определяем по id
// path- путь в адресной строке у странички какой будет

// AuthGuard- обычная функция.
// Описываем beforeEnter, передаем как значение AuthGuard
// для странички list
export default new Router ({
   routes: [
      { path:'',
    name:'home',
    component: Home},
      { path:'/ad/:id',
      props:true,
    name:'ad',
    component:Ad},
    { path:'/list',
    name:'list',
    component:AdList,
    beforeEnter:AuthGuard
    },
    { path:'/new',
    name:'newAd',
    component:NewAd,
    beforeEnter:AuthGuard
    },
    { path:'/login',
    name:'login',
    component:Login},
    { path:'/registration',
    name:'reg',
    component:Registration},
    { path:'/orders',
    name:'orders',
    component:Orders,
    beforeEnter:AuthGuard
  }   
   ],mode:'history'
})
