import {createRouter,createWebHistory} from 'vue-router' 
import Home from './pages/Home.vue'
import Task from './pages/Task.vue'
import Product from "./pages/Product.vue"
const routes  = [
    {name:'home',path:'/',component:Home},
    {name:'tasks',path:'/tasks',component:Task},
    {name:'products',path:'/products',component:Product},

]

const router =  createRouter({
    history: createWebHistory(),
    routes
})

export default router