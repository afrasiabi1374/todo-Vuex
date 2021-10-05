<template>
    <div  class="contailner mt-5">
        <div class="row g-3">
            <div  v-for="product in products" :key="product.id" class="col-md-3">
                <div class="card">

                    <img class="card-img-top" width="100" height="100" :src="product.image" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">{{ product.description }}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <button @click="addToCart(product)" class="btn  btn-outline-success btn-sm">add to cart</button>
                        <span>{{product.price}}</span>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from '@vue/reactivity';
import {useStore} from 'vuex';

export default {
    components:{

        },
    setup(){
        const store = useStore()
            const products = computed(()=>store.getters['product/allProduct'])
            function addToCart(product) {
                store.dispatch('cart/addToCart',product)
            }
        return{
            store,
            products,
            addToCart
        }
    }
}
</script>

<style>

</style>