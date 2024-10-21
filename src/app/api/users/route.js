import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  connectDB();
  const users = await User.find();
  return NextResponse.json(users);
}
