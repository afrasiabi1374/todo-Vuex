import Swal from "sweetalert2"
 function updateLocalStorage(cart) {
    localStorage.setItem('cart',JSON.stringify(cart))
    //console.log(cart);
}
const cart  = {
    namespaced:true,
    state:{
        cart:localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    getters:{ 
        count(state){
            return state.cart.length
        },
        totalMount(state){
            return state.cart.reduce((total,p)=>{
                console.log("total=>>>",total);
                return total + (p.price * p.quantity)
            }, 0)
        },
        allItems(state){
            return state.cart
        }
    },
    mutations:{
        add(state,product){
            const item = state.cart.find(pro=>pro.id === product.id)
            
            if (!item) {
                state.cart.push({
                ...product,
                quantity: 1
            })
            }else{
                item.quantity++
            }
            updateLocalStorage(state.cart)
        },
        increment(state,id){
            const item = state.cart.find(pro=>pro.id === id)
            
            if (item) {
                item.quantity++
            }
            
            updateLocalStorage(state.cart)
        },
        decrement(state,id){
            const item = state.cart.find(pro=>pro.id === id)
            if (item.quantity>1) {
                item.quantity--
            }
            updateLocalStorage(state.cart)
        },
        remove(state,id){
            const index = state.cart.findIndex(cart=>cart.id === id)
            console.log("id=>>>>>",id)
            if (index !== -1) {
                state.cart.splice(index,1)
            }
            updateLocalStorage(state.cart)
        },
        clear(state){
            state.cart = []
            updateLocalStorage(state.cart)
        },
    },
    actions:{
        addToCart({commit},product){
            commit('add',product)
            Swal.fire({
                title:'محصول اضافه شد',
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 900,
                toast:true,
                position: top
            })
        },
        increment({commit},product){
            commit('increment',product)
            Swal.fire({
                title:'محصول اضافه شد',
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 900,
                toast:true,
                position: top
            })
        },
        decrement({commit},product){
            commit('decrement',product)
        },
        remove({commit},id){
            commit('remove',id)
            console.log("id===>>>>>>>",id);
            Swal.fire({
                title:'محصول حذف شد',
                icon: "warning",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 900,
                toast:true,
                position: top
            })
        },
        clear({commit}){
            commit('clear')


        }
    }
    
}
export default cart;