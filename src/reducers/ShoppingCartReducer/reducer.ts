import { ActionTypes } from "./actions";

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  defaultPriceId: string;
}

export function selectedProductsReducer(state: Product[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const selectedProduct = state.find((product) => product.id === action.payload.id);
      if (!selectedProduct) {
        return [
          ...state,
          action.payload,
        ]
      } else {
        return state
      }

    case ActionTypes.REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);

    case ActionTypes.RECOVER_CART:
      return action.payload;

    case ActionTypes.CLEAR_CART:
      return [];

    default:
      return state;
  }
}