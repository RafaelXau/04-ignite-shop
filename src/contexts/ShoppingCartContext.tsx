import { addToCartAction, clearCartAction, removeFromCartAction } from "@/reducers/ShoppingCartReducer/actions";
import { Product, selectedProductsReducer } from "@/reducers/ShoppingCartReducer/reducer";
import { createContext, ReactNode, useEffect, useReducer } from "react";

interface ShoppingCartContextType {
  selectedProducts: Product[]
  selectedProductsCount: number
  selectedProductsTotal: number
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
  clearCart: () => void
  isSelectedProduct: (productId: string) => boolean
}

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProviderProps) {
  const [selectedProducts, productDispatch] = useReducer(
    selectedProductsReducer,
    [],
    () => {
      if (typeof window === 'undefined')
        return []

      const storageStateAsJSON = localStorage.getItem(
        '@IgniteShop:selectedProducts-state-1.0.0',
      )

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return []
    }
  );

  const selectedProductsCount = selectedProducts.length

  const selectedProductsTotal = selectedProducts.reduce(
    (acc: number, currentProduct: Product) => {
      return acc + currentProduct.price
    }, 0
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(selectedProducts)

    localStorage.setItem(
      '@IgniteShop:selectedProducts-state-1.0.0',
      stateJSON,
    )
  }, [selectedProducts])

  function addProductToCart(product: Product) {
    productDispatch(addToCartAction(product))
  }

  function removeProductFromCart(productId: string) {
    productDispatch(removeFromCartAction(productId))
  }

  function clearCart() {
    productDispatch(clearCartAction())
  }

  function isSelectedProduct(productId: string) {
    return selectedProducts.some((product: Product) => product.id === productId)
  }

  return (
    <ShoppingCartContext.Provider value={{
      selectedProducts,
      selectedProductsCount,
      selectedProductsTotal,
      addProductToCart,
      removeProductFromCart,
      clearCart,
      isSelectedProduct,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}