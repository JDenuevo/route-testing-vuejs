import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'

//Array of Different Routes
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', name: 'Signin', component: Signin },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard }
  ]
})

export default router
