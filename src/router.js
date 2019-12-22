import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('./views/Home.vue')
const Login = () => import('./views/Login.vue')
const Index = () => import('./views/Index.vue')

const User = () => import('./views/User.vue')
Vue.use(VueRouter)

//创建一个VueRouter对象
export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          name: 'user',
          path: 'user',
          component: User
        }
      ]
    }
  ]
})
