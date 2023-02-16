import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Handbag } from 'phosphor-react';
import { ShoppingCartTrigger } from '../ShoppingCartDialog';
import { HeaderContent, ShoppingCartButton } from './styles';

import logoImg from '../../assets/logo.svg';
import { ShoppingCartContext } from '@/contexts/ShoppingCartContext';
import { useContext } from 'react';

const ProductCount = dynamic(() => import('./styles'), { ssr: false })

export function Header() {
  const { selectedProductsCount } = useContext(ShoppingCartContext)

  return (
    <HeaderContent>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <ShoppingCartTrigger asChild>
        <ShoppingCartButton>
          <Handbag weight="bold" size={24} />
          <ProductCount>{selectedProductsCount}</ProductCount>
        </ShoppingCartButton>
      </ShoppingCartTrigger>
    </HeaderContent>
  )
}