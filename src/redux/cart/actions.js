import CartActionTypes from "./action-types"

export const addProductToCart = (payload) => {
  return {
    type: CartActionTypes.ADD_CART,
    payload
  }
}

export const removeProductToCart = (payload) => {
  return {
    type: CartActionTypes.REMOVE_CART,
    payload
  }
}

export const increaseProductQuantity = (payload) => {
  return {
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload
  }
}

export const decreaseProductQuantity = (payload) => {
  return {
    type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload
  }
}