import Vue from "vue";
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')
const Shopcart = () => import('../views/shopcart/Shopcart')
const Category = () => import('../views/category/Category')


Vue.use(VueRouter);

const routes = [
  {
    path : '',
    redirect : '/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/profile',
    component:Profile
  },
  {
    path: '/shopcart',
    component:Shopcart
  },
  {
    path: '/category',
    component:Category
  }
]

export default new VueRouter({
  routes,
  mode : "history"
})
