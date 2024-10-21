import { connectDB } from "@/libs/mongodb"; // Asegúrate de que la ruta sea correcta
import Service from "@/models/service"; // Asegúrate de que tienes un modelo de Servicio
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB(); // Conectar a la base de datos
    const servicios = await Service.find(); // Obtener todos los servicios
    return NextResponse.json(servicios);
  } catch (error) {
    console.error("Error al obtener los servicios:", error.message);
    return NextResponse.json(
      { error: "Error al obtener los servicios" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB(); // Conectar a la base de datos
    const data = await request.json(); // Obtener los datos de la solicitud

    const newServicio = new Service(data); // Crear un nuevo servicio
    const savedServicio = await newServicio.save(); // Guardar el servicio en la base de datos

    return NextResponse.json(savedServicio, { status: 201 }); // Retornar el servicio creado
  } catch (error) {
    console.error("Error al crear el servicio:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
