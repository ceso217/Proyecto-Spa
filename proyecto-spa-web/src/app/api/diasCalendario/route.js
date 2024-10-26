import { connectDB } from "@/libs/mongodb";
import DiaCalendario from "@/models/diaCalendario";
import { NextResponse } from "next/server";

export async function GET() {
  connectDB();
  const dayCalendar = await DiaCalendario.find();
  return NextResponse.json(dayCalendar);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newDayCalendar = new DiaCalendario(data);
    const savedDayCalendar = await newDayCalendar.save();
    console.log(savedDayCalendar);
    return NextResponse.json(savedDayCalendar);
  } catch (error) {
    return NextResponse.json(error.message, {
      staus: 400,
    });
  }
}
