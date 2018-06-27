export function addToCart(product,quantity,unitCost) {
    return {
        type: 'ADD_TO_CART',
        payload:{product,quantity,unitCost}
    }
}
export function updatedCart(product,quantity,unitCost) {
    return {
        type: 'UPDATE_TO_CART',
        payload: {product,quantity,unitCost}
    }
}