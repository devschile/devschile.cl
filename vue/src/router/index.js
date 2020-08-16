import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Exito from '../views/Exito'
import Fracaso from '../views/Fracaso'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exito',
    name: 'Exito',
    component: Exito
  },
  {
    path: '/looser',
    name: 'Fracaso',
    component: Fracaso
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
