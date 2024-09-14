import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { username, fullname, email, password, birthdate } =
    await request.json();
  console.log(username, fullname, email, password, birthdate);

  if (!password || password.length < 6) {
    return NextResponse.json(
      {
        message: "La contraseña debe tener al menos 6 caracteres",
      },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDB();
    const userFound = await User.findOne({ username });

    if (userFound)
      return NextResponse.json(
        {
          message: "Este nombre de usuario ya está ocupado",
        },
        {
          status: 409,
        }
      );

    const emailFound = await User.findOne({ email });

    if (emailFound)
      return NextResponse.json(
        {
          message: "Este email ya está asociado a una cuenta",
        },
        {
          status: 409,
        }
      );

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      username,
      email,
      fullname,
      password: hashedPassword,
      birthdate,
    });
    const savedUser = await user.save();

    return NextResponse.json({
      username: savedUser.username,
      fullname: savedUser.fullname,
      email: savedUser.email,
      birthdate: savedUser.birthdate,
      _id: savedUser._id,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
  }
}
