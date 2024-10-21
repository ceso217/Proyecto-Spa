import { connectDB } from "@/libs/mongodb";
import DateModel from "@/models/date";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    connectDB();
    const dateFound = await DateModel.findById(params.id);

    if (!dateFound)
      return NextResponse.json(
        {
          message: "Date not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(dateFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const dateDeleted = await DateModel.findByIdAndDelete(params.id);

    if (!dateDeleted)
      return NextResponse.json(
        {
          message: "Date not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(dateDeleted);
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
    const dateUpdated = await DateModel.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(dateUpdated);
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
    const dateUpdated = await DateModel.findByIdAndUpdate(params.id, data, {
      new: true, // Devuelve el documento actualizado
      runValidators: true, // Asegura que los datos cumplan con las validaciones del esquema
    });
    return NextResponse.json(dateUpdated);
  } catch (error) {
    console.error("Error al actualizar el turno:", error);
    return NextResponse.json(
      { error: error.message },
      {
        status: 400,
      }
    );
  }
}
