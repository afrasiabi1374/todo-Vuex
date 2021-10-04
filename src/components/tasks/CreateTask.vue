<template>
    <div class="row mb-4">
    <div class="col-md-12">
      <h4>create tasks</h4>
        <form @submit.prevent="storeTask" class="row">
            <div class="col-md-6">
                <input type="text" class="form-control" v-model="title">
                <div class="form-text text-danger">
                    {{titleErrorText}}
                </div>
            </div>
            <div class="col-auto">
                <button class="btn btn-primary">
                    create
                </button>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex'
export default {
    setup(){

        const store = useStore();
        const title = ref("")
        const titleErrorText = ref("")
         const loading = ref(false)
        async function storeTask() {
            if (title.value == "") {
                titleErrorText.value = "title is required!"
            }else{
                loading.value = true
                titleErrorText.value = ""
                await store.dispatch("storeTask",title.value)
                loading.value = false
            }
        }
        return{
            store,
            storeTask,
            title,
            titleErrorText,
            loading
        }
    }
}
</script>

<style>

</style>