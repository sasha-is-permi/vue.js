import Vue from 'vue'
import Router from 'vue-router'
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
export default new Router ({
   routes: [
      { path:'',
    name:'home',
    component: Home},
      { path:'/ad/:id',
    name:'ad',
    component:Ad},
    { path:'/list',
    name:'list',
    component:AdList},
    { path:'/new',
    name:'newAd',
    component:NewAd},
    { path:'/login',
    name:'login',
    component:Login},
    { path:'/registration',
    name:'reg',
    component:Registration},
    { path:'/orders',
    name:'orders',
    component:Orders}   
   ],mode:'history'
})
