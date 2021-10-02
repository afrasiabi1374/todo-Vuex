import axios from "axios";
import { createStore } from "vuex";
import Swal from "sweetalert2";
const store= createStore({
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
        }
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
                    title:'Error!',
                    text:'problem please try again',
                    icon: "error",
                    confirmButtonText:"OK"
                })
            }
        },
    }
})
export default store;