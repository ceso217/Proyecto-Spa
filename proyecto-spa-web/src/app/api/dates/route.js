import { connectDB } from "@/libs/mongodb";
import DateModel from "@/models/date";
import { NextResponse } from "next/server";

export async function GET() {
  connectDB();
  const dates = await DateModel.find();
  return NextResponse.json(dates);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newDate = new DateModel(data);
    const savedDate = await newDate.save();
    console.log(savedDate);
    return NextResponse.json(savedDate);
  } catch (error) {
    return NextResponse.json(error.message, {
      staus: 400,
    });
  }
}
