import Image from "next/image";
import Link from "next/link";
import { ImageContainer, ImageGroup, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";

interface SuccessProps {
  customerName: string;
  products: string[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useContext(ShoppingCartContext)
  const totalProducts = products.length;

  useEffect(() => {
    localStorage.removeItem('@IgniteShop:selectedProducts-state-1.0.0')
    clearCart();
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada - Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImageGroup>
          {
            products.map(image => (
              <ImageContainer key={image}>
                <Image
                  width={120}
                  height={110}
                  src={image}
                  alt=""
                />
              </ImageContainer>
            ))
          }
        </ImageGroup>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {totalProducts} camiseta{totalProducts > 1 && 's'} já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details?.name;
  const productImages = session.line_items?.data.map((item: any) => {
    return item.price.product.images[0];
  });

  return {
    props: {
      customerName,
      products: productImages
    }
  }
}