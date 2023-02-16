import { forwardRef, useContext, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react';
import { CloseButton, DialogContent, DialogFooter, DialogTitle, Overlay, Product, ProductInfo, ProductList, ProductThumbnail, TotalItems, TotalPrice } from './styles';

import thumbnail from '../../assets/camisetas/1.png';
import Image from 'next/image';
import { ShoppingCartContext } from '@/contexts/ShoppingCartContext';
import { priceFormatter } from '@/utils/formatter';
import axios from 'axios';

function ShoppingCartContent({ children, ...props }: any, forwardedRef: any) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const {
    removeProductFromCart,
    selectedProducts,
    selectedProductsCount,
    selectedProductsTotal,
  } = useContext(ShoppingCartContext);

  function handleRemoveProductFromCart(productId: string) {
    removeProductFromCart(productId);
  }

  async function handleBuyProducts() {
    setIsCreatingCheckoutSession(true);

    try {
      const response = await axios.post('/api/checkout', {
        priceIdList: selectedProducts.map(product => product.defaultPriceId)
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      console.log(err)
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <DialogContent {...props} ref={forwardedRef}>
        <DialogTitle>Sacola de compras</DialogTitle>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <ProductList>
          {
            selectedProducts.map(product => (
              <Product key={product.id}>
                <ProductThumbnail>
                  <Image src={thumbnail} alt="" />
                </ProductThumbnail>

                <ProductInfo>
                  <div>
                    <span>{product.name}</span>
                    <strong>{priceFormatter.format(product.price)}</strong>
                  </div>

                  <button onClick={() => handleRemoveProductFromCart(product.id)}>Remover</button>
                </ProductInfo>
              </Product>
            ))
          }
        </ProductList>

        <DialogFooter>
          <TotalItems>
            <span>Quantidade</span>
            <span>{`${selectedProductsCount} ${selectedProductsCount === 1 ? 'item' : 'itens'}`}</span>
          </TotalItems>
          <TotalPrice>
            <span>Valor Total</span>
            <strong>{priceFormatter.format(selectedProductsTotal)}</strong>
          </TotalPrice>

          <button
            onClick={handleBuyProducts}
            disabled={isCreatingCheckoutSession}
          >
            Finalizar compra
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog.Portal>
  )
}

const ShoppingCartDrawer = forwardRef(ShoppingCartContent);
export default ShoppingCartDrawer;
export const ShoppingCartDialog = Dialog.Root;
export const ShoppingCartTrigger = Dialog.Trigger;