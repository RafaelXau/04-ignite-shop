import type { AppProps } from 'next/app'

import { ShoppingCartDrawer, ShoppingCartRoot } from '@/components/ShoppingCartDialog';
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app';
import { ShoppingCartContextProvider } from '@/contexts/ShoppingCartContext';
import { Header } from '@/components/Header';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartContextProvider>
      <ShoppingCartRoot>
        <Container>
          <Header />

          <Component {...pageProps} />
        </Container>

        <ShoppingCartDrawer />
      </ShoppingCartRoot>
    </ShoppingCartContextProvider>
  )
}