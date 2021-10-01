<template>
<div class="contailner">
    <Filter/>
    <div v-if="loading" class="row">
        <div class="spinner-grow text-warning m-auto" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else class="container mt-5">
        <div class="row g-3" >
            <div v-for="task in tasks" :key="task.id" class="col-md-4">
                <div class="card" :class="{'bg-light':task.completed}">
                    <div class="card-body">
                        <del v-if="task.completed === true"> {{task.title}} </del>
                        <div v-else>{{task.title}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import { computed, ref } from '@vue/reactivity';
import {useStore} from 'vuex';
import Filter from "../components/tasks/Filter"
export default {
    components:{Filter},
    setup(){
        const store = useStore()
            const loading = ref(false)
            async function fetchTasks() {
            loading.value = true
            await store.dispatch('fetchTasks');
            loading.value = false
        }
        const tasks = computed(()=>{
           return store.getters.allTasks
        })

        fetchTasks();
        return{
            store,
            fetchTasks,
            tasks,
            loading
        }
    }
}
</script>

<style>

</style>