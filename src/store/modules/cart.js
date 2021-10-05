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
        }
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
        }
    }
    
}
export default cart;