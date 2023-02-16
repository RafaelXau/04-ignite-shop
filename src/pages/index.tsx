import { useContext } from "react"
import { GetStaticProps } from "next"
import Link from "next/link"
import Head from "next/head"
import Stripe from "stripe"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import { HomeContainer, Product, ProductFooter } from "@/styles/pages/home"
import { Handbag } from "phosphor-react"

import { stripe } from "@/lib/stripe"
import { ShoppingCartTrigger } from "@/components/ShoppingCartDialog"
import { priceFormatter } from "@/utils/formatter"
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext"
import { Product as ProductType } from "@/reducers/ShoppingCartReducer/reducer"

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: ProductType[]
}

export default function Home(props: HomeProps) {
  const { addProductToCart } = useContext(ShoppingCartContext)
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });

  function handleAddProductToCart(product: ProductType) {
    addProductToCart(product)
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {
          props.products.map(product => (
            <Product key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>

              <ProductFooter>
                <div>
                  <strong>{product.name}</strong>
                  <span>{priceFormatter.format(product.price)}</span>
                </div>

                <ShoppingCartTrigger onClick={() => handleAddProductToCart(product)}>
                  <Handbag weight="bold" size={32} />
                </ShoppingCartTrigger>
              </ProductFooter>
            </Product>
          ))
        }
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
      description: product.description,
      defaultPriceId: price.id
    }
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2
  }
}
