import { connectDB } from "@/libs/mongodb"; // Asegúrate de que la ruta sea correcta
import Pago from "@/models/pago"; // Modelo de pago
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB(); // Conectar a la base de datos
    const pago = await Pago.find(); // Obtener todos los pagos
    return NextResponse.json(pago);
  } catch (error) {
    console.error("Error al obtener los pagos:", error.message);
    return NextResponse.json(
      { error: "Error al obtener los pagos" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB(); // Conectar a la base de datos
    const data = await request.json(); // Obtener los datos de la solicitud

    // Extraer los datos, incluyendo el nuevo campo metodoPago
    const { monto, cliente, correo, servicio, fecha, metodoPago } = data;

    // Crear un nuevo objeto de pago incluyendo metodoPago
    const newPago = new Pago({
      monto,
      cliente,
      correo,
      servicio,
      fecha,
      metodoPago, // Nuevo campo agregado
    });

    const savedPago = await newPago.save(); // Guardar el pago en la base de datos

    return NextResponse.json(savedPago, { status: 201 }); // Retornar el pago creado
  } catch (error) {
    console.error("Error al crear el pago:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
