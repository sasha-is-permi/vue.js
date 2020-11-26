export default {
    state: {
        orders:[]
    },
    mutations: {
        createOrder(state,payload) {
            state.orders.push(payload)
        }
    },
    actions: {
        // через 4 сек. вызываем
        // при использовании- добавить в скобках reject
       async  createOrder() {
           await new Promise( (resolve) => {
              setTimeout( () => {
                  resolve()    
              }, 4000)
           })

         }
    },
    getters: {}

}