import { connectDB } from "@/libs/mongodb";
import Date from "@/models/date";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    connectDB();
    const dateFound = await Date.findById(params.id);

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
    const dateDeleted = await Date.findByIdAndDelete(params.id);

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

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const dateUpdated = await Date.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(dateUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
