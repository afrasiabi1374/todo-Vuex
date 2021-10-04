<template>
<div class="contailner">
    <div v-if="loading" class="row">
        <div class="spinner-grow text-warning m-auto" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else class="container mt-5">
        <CreateTask />
        <hr>
        <Filter />
        <div class="row g-3" >
            <div v-for="task in tasks" :key="task.id" class="col-md-4">
                <div class="card" :class="{'bg-light':task.completed}">
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <del v-if="task.completed === true"> {{task.title}} </del>
                            <div v-else>{{task.title}}</div>
                        </div>
                        <div class="d-flex align-items-center">
                            <UpadateTask :task="task"/>
                            <DeleteTask :id="task.id"/>
                        </div>

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
import CreateTask from "../components/tasks/CreateTask"
import UpadateTask from "../components/tasks/UpdateTask"
import DeleteTask from "../components/tasks/DeleteTask"

export default {
    components:{
        Filter,
        CreateTask,
        UpadateTask,
        DeleteTask
        },
    setup(){
        const store = useStore()
            const loading = ref(false)
            const tasks = computed(()=>store.getters['task/allTasks'])
            async function fetchTasks() {
            loading.value = true
            await store.dispatch("task/fetchTasks");
            loading.value = false
        }

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