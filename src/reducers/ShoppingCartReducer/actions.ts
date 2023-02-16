import { Product } from "./reducer";

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  RECOVER_CART = 'RECOVER_CART',
  CLEAR_CART = 'CLEAR_CART'
}

export function addToCartAction(product: Product) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
}

export function removeFromCartAction(productId: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productId,
  };
}

export function recoverCartAction(products: Product[]) {
  return {
    type: ActionTypes.RECOVER_CART,
    payload: products,
  };
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  };
}