<template>
  <div class="row mb-3">
    <div class="col-md-2">
      <h6>filter tasks</h6>
      <select v-model="number" name="" @change="filterTasks" id="" class="form-select form-select-sm">
        <option value="5" >5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore()
    const number = ref()
    function filterTasks() {
      store.dispatch('filterTasks',number.value)
    }
    return{
      filterTasks,
      store,
      number
    }
  }
}
</script>

<style>

</style>