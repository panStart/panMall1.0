import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = () => import('views/home/home.vue')
const Category = () => import('views/category/category.vue')
const Cart = () => import('views/cart/cart.vue')
const Profile = () => import('views/profile/profile.vue')
const Detail = () => import('views/detail/Detail.vue')
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile },
    { path: '/detail/:flag', component: Detail },
]

const router = new Router({
    routes,
    mode:'history'
})
export default router