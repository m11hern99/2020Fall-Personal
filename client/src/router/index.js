import Vue from 'vue'
import VueRouter from 'vue-router'
import session from '../models/session'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home},
  { path: '/login', name: 'Login', component: Login},
  { path: '/signup', name: 'Signup', component: Signup},
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('../views/Feed.vue'),
    beforeEnter: checkUser
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
function checkUser(to,from,next){
    if(session.user){
     next();
   }
   else{
     next('Login');
   }
}