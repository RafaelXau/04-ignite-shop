import { forwardRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react';
import { CloseButton, DialogContent, DialogFooter, DialogTitle, Overlay, Product, ProductInfo, ProductList, ProductThumbnail, TotalItems, TotalPrice } from './styles';

import thumbnail from '../../assets/camisetas/1.png';
import Image from 'next/image';

function shoppingCartContent({ children, ...props }: any, forwardedRef: any) {
  return (
    <Dialog.Portal>
      <Overlay />

      <DialogContent {...props} ref={forwardedRef}>
        <DialogTitle>Sacola de compras</DialogTitle>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <ProductList>
          <Product>
            <ProductThumbnail>
              <Image src={thumbnail} alt="" />
            </ProductThumbnail>

            <ProductInfo>
              <div>
                <span>Camiseta X</span>
                <strong>R$ 79,00</strong>
              </div>

              <button>Remover</button>
            </ProductInfo>
          </Product>
        </ProductList>

        <DialogFooter>
          <TotalItems>
            <span>Quantidade</span>
            <span>3 itens</span>
          </TotalItems>
          <TotalPrice>
            <span>Valor Total</span>
            <strong >R$ 79,00</strong>
          </TotalPrice>

          <button>Finalizar compra</button>
        </DialogFooter>
      </DialogContent>
    </Dialog.Portal>
  )
}

export const ShoppingCartDrawer = forwardRef(shoppingCartContent);
export const ShoppingCartDialog = Dialog.Root;
export const ShoppingCartTrigger = Dialog.Trigger;