import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const { servicio } = await request.json(); // Espera el objeto servicio en el cuerpo de la solicitud

  // Validación del servicio
  if (
    !servicio ||
    !servicio.titulo ||
    !servicio.imagen ||
    typeof servicio.precio !== "number"
  ) {
    return NextResponse.json(
      { error: "Datos del servicio incompletos" },
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: servicio.titulo, // Usar el título del servicio
              images: [servicio.imagen],
            },
            unit_amount: servicio.precio,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.nextUrl.origin}/success`,
      cancel_url: `${request.nextUrl.origin}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Error creando la sesión:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
