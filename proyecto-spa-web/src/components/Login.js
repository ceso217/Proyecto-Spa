"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { corinthia, montserrat } from "../app/ui/fonts";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      identifier: data.identifier, // Cambiamos a 'identifier'
      password: data.password,
      redirect: false,
    });

    console.log(res);

    if (res?.error) return setError(res.error);
    if (res?.ok) {
      window.location.href = "/"; // Redirigir y recargar automáticamente
    }
  };

  return (
    <div className="flex justify-center items-center bg-orange-50 h-auto py-20 md:min-h-screen w-full relative text-xl">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/sepiatexture.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Contenedor principal */}
      <div className="relative flex flex-col w-[325px] md:w-[600px] md:h-[500px] justify-center items-center max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-green-950 rounded-3xl shadow-xl px-6 py-8 sm:py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between w-full space-y-6"
          style={montserrat.style}
        >
          {/* Título */}
          <div className="relative w-full text-center">
            <h1
              className="text-white text-7xl md:text-9xl mb-3"
              style={corinthia.style}
            >
              Bienvenido
            </h1>
            {error && (
              <p className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white md:text-lg px-4 py-1 rounded-2xl shadow-lg">
                {error}
              </p>
            )}
          </div>

          {/* Input de usuario */}
          <div className="relative w-full">
            <input
              className="w-full rounded-3xl bg-orange-50 py-2 px-4 border-solid border-transparent hover:border-black border-2 text-base md:text-lg focus:outline-none"
              placeholder="Correo o Usuario"
              defaultValue={""}
              {...register("identifier", {
                required: true,
              })}
            />
            {errors.identifier?.type === "required" && (
              <p className="absolute left-4 -bottom-5 bg-red-500 text-white text-xs md:text-sm px-3 py-1 rounded-xl shadow-lg">
                Ingrese correo o usuario
              </p>
            )}
          </div>

          {/* Input de contraseña */}
          <div className="relative w-full">
            <input
              className="w-full rounded-3xl bg-orange-50 py-2 px-4 border-solid border-transparent hover:border-black border-2 text-base md:text-lg focus:outline-none"
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              defaultValue={""}
              {...register("password", {
                required: true,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="absolute left-4 -bottom-5 bg-red-500 text-white text-xs md:text-lg px-3 py-1 rounded-xl shadow-lg">
                Ingrese contraseña
              </p>
            )}
          </div>

          {/* Botón de envío */}
          <input
            type="submit"
            value={"Login ➜"}
            className="w-full md:mx-auto sm:w-3/4 lg:w-1/2 bg-orange-50 text-green-services-100 rounded-3xl py-2 text-base md:text-lg font-semibold hover:bg-green-services-300 shadow-lg hover:text-black hover:-translate-y-1 transition-transform duration-300 border-solid border-transparent hover:border-white border-2"
          />
        </form>

        {/* Registro */}
        <p
          className="text-orange-50 text-xs md:text-lg mt-4"
          style={montserrat.style}
        >
          ¿Aún no estás registrado?{" "}
          <Link href="/register" className="text-red-600 hover:underline">
            Registrarme!
          </Link>
        </p>
      </div>
    </div>
  );
}
