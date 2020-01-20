import Vue from 'vue'
import VueRouter from 'vue-router'
const home=()=> import('@/views/home/Home')
const cart=()=> import('@/views/cart/Cart')
const category=()=> import('@/views/category/Category')
const my=()=> import('@/views/me/Me')
const detail=()=> import('@/views/detail/detail')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/my',
    component:my
  },
  {
    path:'/detail/:iid',
    component:detail
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
