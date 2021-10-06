const product = {
    namespaced:true,
    state:{
        products:[
            {
                id: 1,
                name: "blue bag",
                description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be",
                image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                price:500
            },
            {
                id: 2,
                name: "black & white t-shirt",
                description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be",
                image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                price:220
            },
            {
                id: 3,
                name: "blue shirt",
                description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be",
                image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                price:331
            },
            {
                id: 4,
                name: "brown jacket",
                description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be",
                image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                price:800
            },
        ]
    },
    getters:{
        allProduct(state){
            return state.products
        }    
    }
    
}
export default product;