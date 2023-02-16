import type { AppProps } from 'next/app'

import { ShoppingCartDialog } from '@/components/ShoppingCartDialog';
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app';
import { Header } from '@/components/Header';
import { ShoppingCartContextProvider } from '@/contexts/ShoppingCartContext';
import dynamic from 'next/dynamic';

const ShoppingCartDrawer = dynamic(() => import('@/components/ShoppingCartDialog'), { ssr: false })

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartContextProvider>
      <ShoppingCartDialog>
        <Container>
          <Header />

          <Component {...pageProps} />
        </Container>

        <ShoppingCartDrawer />
      </ShoppingCartDialog>
    </ShoppingCartContextProvider>
  )
}