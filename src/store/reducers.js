const initialState = {
    cart: [
        {
            product:'bread 700g',
            quantity: '2',
            unitCost: '90'
        },
        {
            product: 'milk 500ml',
            quantity: '1',
            unitCost: '47'
        }

    ]
} 
export default function (state=initialState,action) {
    switch(action.type) {
        case 'ADD_TO_CART':
        return {
            cart: [...state.cart,action.payload]
        }
        case 'UPDATE_TO_CART':
        console.log(action.payload,"22222222222222222222222")
        return {
            cart: [...state.cart,action.payload]
        }
        default:
        return state
    }
}