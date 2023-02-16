import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { stripe } from "@/lib/stripe"
import Stripe from "stripe";
import Head from "next/head";
import { ShoppingCartTrigger } from "@/components/ShoppingCartDialog";
import { Product as ProductType } from "@/reducers/ShoppingCartReducer/reducer";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { useContext } from "react";
import { priceFormatter } from "@/utils/formatter";

interface ProductProps {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  const { addProductToCart } = useContext(ShoppingCartContext)

  function handleAddProductToCart() {
    addProductToCart(product)
  }
  return (
    <>
      <Head>
        <title>{product.name} - Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt={product.name}
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{priceFormatter.format(product.price)}</span>

          <p>{product.description}</p>
          <ShoppingCartTrigger asChild>
            <button onClick={handleAddProductToCart}>
              Colocar na sacola
            </button>
          </ShoppingCartTrigger>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id;

  const product = await stripe.products.retrieve(productId!, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount! / 100,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1,
  }
}
