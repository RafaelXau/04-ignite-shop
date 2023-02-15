import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import { ShoppingCartTrigger } from '../ShoppingCartDialog';
import { HeaderContent, ShoppingCartButton } from './styles';

import logoImg from '../../assets/logo.svg';
import Link from 'next/link';

export function Header() {
  return (
    <HeaderContent>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <ShoppingCartTrigger asChild>
        <ShoppingCartButton>
          <Handbag weight="bold" size={24} />
          <span>1</span>
        </ShoppingCartButton>
      </ShoppingCartTrigger>
    </HeaderContent>
  )
}