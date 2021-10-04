import axios from "axios";
import Swal from "sweetalert2";
const task = {
    namespaced : true,
    state:{
        tasks : [

        ]
    },
    getters:{
        allTasks(state){
            return state.tasks
        }
    },
    mutations:{
        setTasks(state,tasks){
            state.tasks = tasks
        },
        newTask(state,task){
            state.tasks.unshift(task)
        },
        updateTask(state,updateTask){
            const index = state.tasks.findIndex (task=>task.id === updateTask.id)
            if (index !== -1) {
                state.tasks.splice(index,1,updateTask)
            }
        },
        deleteTask(state,id){
            const index = state.tasks.findIndex (task=>task.id === id)
            if (index !== -1) {
                state.tasks.splice(index,1)
            }
        },
    },
    actions:{
        async fetchTasks({commit}){
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                commit('setTasks',response.data) 
                //console.log(response.data);
            }catch(err){
                Swal.fire({
                    title:'Error!',
                    text:'problem please try again',
                    icon: "error",
                    confirmButtonText:"OK"
                })
            }
        },
        async filterTasks({commit},limit){
            console.log(limit);
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
                commit('setTasks',response.data) 
                console.log(response.data);
                //console.log(response.data);
            }catch(err){
                Swal.fire({
                    title:'ارور!',
                    text:'ارور فیلتر تسک',
                    icon: "error",
                    confirmButtonText:"OK"
                })
            }
        },
        async storeTask({commit},title){
            try{
                const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,{
                    title : title,
                    completed : false
                })
                commit('newTask',response.data) 
                console.log(response);
                Swal.fire({
                    title:'موفقیت',
                    text:'تسک با موفقیت ثبت شد',
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    position: top
                })
            }catch(err){
                Swal.fire({
                    title:'ارور!',
                    text:'ارور ثبت تسک ',
                    icon: "error",
                    confirmButtonText:"OK"
                })
            }
        },
        async updateTask({commit},task){
            try{
                const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`,{
                    id : task.id,
                    title : task.title,
                    completed : !task.completed
                })
                console.log(response.data);
                commit('updateTask',response.data) 
                Swal.fire({
                    title:'موفقیت',
                    text:'تسک با موفقیت بروز رسانی شد',
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    position: 'center'
                })
            }catch(err){
                Swal.fire({
                    title:'ارور!',
                    text:'ارور بروزرسانی  ',
                    icon: "error",
                    confirmButtonText:"OK"
                })
                console.log(err);
            }
        },
        async deleteTask({commit},id){
            try{
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
                
                commit('deleteTask',id) 
                Swal.fire({
                    title:'موفقیت',
                    text:'تسک موردنظر حذف شد',
                    icon: "warning",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 800,
                    position: 'center'
                })
            }catch(err){
                Swal.fire({
                    title:'ارور!',
                    text:'ارور بروزرسانی  ',
                    icon: "error",
                    confirmButtonText:"OK"
                })
                console.log(err);
            }
        }, 
    }

}
export default task