<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/tasks">Tasks</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/products">products</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/cartIndex">
            <span class="badge rounded-pill bg-primary me-1">{{ countCartItems }}</span>
            <i class="bi bi-basket-fill" style="font-size:23px"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  setup(){

    const store = useStore()
    const countCartItems = computed(()=>store.getters['cart/count'])
    return{
      store,
      countCartItems
    }

  }
}
</script>

<style>
.router-link-active {
  color: rgba(0, 0, 0, 0.7)!important;
  border-bottom:2px solid rgba(0, 0, 0, 0.9)!important;
}
</style>