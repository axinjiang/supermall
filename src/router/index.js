import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('views/home/Home.vue')
const Categroy = ()=> import('views/categroy/Categroy.vue')
const Shop = ()=> import('views/shop/Shop.vue')
const Profile = ()=> import('views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/home'},
    { path: '/home', component: Home},
    { path: '/categroy', component: Categroy},
    { path: '/shop', component: Shop},
    { path: '/profile', component: Profile},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
