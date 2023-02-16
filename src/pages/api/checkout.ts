import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceIdList } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json("Method not allowed");
  }

  if (!priceIdList) {
    return res.status(400).json({ error: "Price not found" });
  }
  console.log(priceIdList);

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: priceIdList.map((priceId: string) => {
      return {
        price: priceId,
        quantity: 1
      }
    }),
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  });
}