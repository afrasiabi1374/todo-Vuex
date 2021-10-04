<template>
    <div>
        <span  @click="deleteTask" class="ms-3 bi bi-trash-fill" style="font-size:1.2em"></span>
        <span v-if="loading" class="spinner-border spinner-border-sm"></span>

    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex'
export default {
     props:['id'],
    setup(props){
        const store = useStore();
        const loading = ref(false)

        async function deleteTask() {
            loading.value = true
            await store.dispatch("deleteTask",props.id)
            loading.value = false
        }
        return{
            store,
            loading,
            deleteTask
        }
    }
}
</script>

<style>

</style>