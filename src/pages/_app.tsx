import type { AppProps } from 'next/app'
import Image from 'next/image';
import { globalStyles } from '@/styles/global'
import { Container, Header, ShoppingCartButton } from '@/styles/pages/app';

import logoImg from '../assets/logo.svg';
import { Handbag } from 'phosphor-react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <ShoppingCartButton>
          <Handbag weight="bold" size={24} />
          <span>1</span>
        </ShoppingCartButton>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}