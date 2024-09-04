import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { corinthia } from "../ui/fonts";

export default function Login() {
  return (
    <>
     <div className="flex justify-center items-center bg-orange-50 h-screen w-full">
     <Image
            src="/sepiatexture.svg"
            alt="Background Image"
            width={100}
            height={100}
            layout="responsive"
            objectFit="fill"
            className="w-full  h-full absolute z-0"
          />
      <div className="flex justify-center w-600 h-400 bg-green-950">
        <form className="flex flex-col justify-center place-content-around items-center">
          <h1 className="text-white text-9xl" style={corinthia.style}>Bienvenido</h1>
            <input className="w-1/2 rounded-3xl z-10" value="Usuario"/>
            <input className="w-1/2 rounded-3xl z-10" value="Contraseña"/>
            <button className="w-1/3 bg-white rounded-lg z-10">Login</button>
        </form>
      </div>
     </div>
    </>
  );
}

