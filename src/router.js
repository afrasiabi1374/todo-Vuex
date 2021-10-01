import {createRouter,createWebHistory} from 'vue-router' 
import Home from './pages/Home.vue'
import Task from './pages/Task.vue'

const routes  = [
    {name:'home',path:'/',component:Home},
    {name:'tasks',path:'/tasks',component:Task},
]

const router =  createRouter({
    history: createWebHistory(),
    routes
})

export default router