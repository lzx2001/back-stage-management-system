import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login"
import Home from "../components/Home"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:Login
  },
  {
    path:"/login",
    component:Login
  },{
    path:"/home",
    component:Home
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path=="/login") return next()
  if(!sessionStorage.getItem("token")) return next("/login")
  next()
})

export default router
