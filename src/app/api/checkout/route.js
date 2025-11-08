import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { cartItems } = await req.json();

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          description: "The description is null but we are trying",
          images: [item.images[0].url],
          metadata: {
            productId: item._id
          },
        },
        unit_amount: item.price * 100, // convert $ to cents
      },
      quantity: item.quantity,
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
        maximum: 10
      },

    }));

    const sessionConfig = {
            payment_method_types: ["card"],
      mode: "payment",
      
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "PK", "IN"]
      },
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: "Standard Shipping",
            type: "fixed_amount",
            fixed_amount: {
              amount: 500, // $5
              currency: "usd",
            }
          }
        }
      ]
      ,
      line_items: lineItems,
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cart`,
    };


    const session = await stripe.checkout.sessions.create(sessionConfig);


    return NextResponse.json({ url: session.url, success: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message, success: false }, { status: 500 });
  }
}
