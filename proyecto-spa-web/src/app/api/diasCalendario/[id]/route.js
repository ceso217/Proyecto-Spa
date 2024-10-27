import { connectDB } from "@/libs/mongodb";
import DiaCalendario from "@/models/diaCalendario";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    connectDB();
    const dayFound = await DiaCalendario.findById(params.id);

    if (!dayFound)
      return NextResponse.json(
        {
          message: "Day not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(dayFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const dayDeleted = await DiaCalendario.findByIdAndDelete(params.id);

    if (!dayDeleted)
      return NextResponse.json(
        {
          message: "Day not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(dayDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

// PUT: Reemplaza completamente el recurso existente con los datos enviados.
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const dayUpdated = await DiaCalendario.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(dayUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

//PATCH: Modifica parcialmente los campos del recurso sin afectar los que no se incluyeron en la solicitud.
export async function PATCH(request, { params }) {
  try {
    const data = await request.json(); // Los campos a actualizar
    const dayUpdated = await DiaCalendario.findByIdAndUpdate(params.id, data, {
      new: true, // Devuelve el documento actualizado
      runValidators: true, // Asegura que los datos cumplan con las validaciones del esquema
    });
    return NextResponse.json(dayUpdated);
  } catch (error) {
    console.error("Error al actualizar el día:", error);
    return NextResponse.json(
      { error: error.message },
      {
        status: 400,
      }
    );
  }
}
