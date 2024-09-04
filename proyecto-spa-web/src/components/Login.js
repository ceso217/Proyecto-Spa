"use client";

import React from "react";
import Image from "next/image";
import { corinthia } from "../app/ui/fonts";
import { montserrat } from "../app/ui/fonts";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center items-center bg-orange-50 h-screen w-full">
        <div className="w-screen h-screen flex justify-center items-center absolute">
          <Image
            src="/sepiatexture.svg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="flex justify-center items-center w-600 h-500 bg-green-950">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-evenly w-full h-3/4 items-center "
            style={montserrat.style}
          >
            <h1
              className="text-white text-9xl mb-3 -mt-8"
              style={corinthia.style}
            >
              Bienvenido
            </h1>
            <div className="relative w-3/5">
              <input
                className="w-full rounded-3xl bg-orange-50 z-10 my-1 py-2 px-5 border-solid border-transparent hover:border-black border-2 text-lg"
                placeholder="Usuario"
                defaultValue={""}
                {...register("usuario", {
                  required: true,
                })}
              />
              {errors.usuario?.type === "required" && (
                <p className="absolute left-3 -bottom-5 z-20 mt-1 bg-red-500 text-white text-sm px-3 py-1 rounded-xl shadow-lg">
                  Ingrese nombre de usuario
                </p>
              )}
            </div>
            <div className="relative w-3/5">
              <input
                className="w-full rounded-3xl z-10 my-1 py-2 px-5 border-solid border-transparent hover:border-black border-2 text-lg"
                type="password"
                placeholder="Contraseña"
                autoComplete="off"
                defaultValue={""}
                {...register("contraseña", {
                  required: true,
                })}
              />
              {errors.contraseña?.type === "required" && (
                <p className="absolute left-3 -bottom-5 z-20 mt-1 bg-red-500 text-white text-sm px-3 py-1 rounded-xl shadow-lg">
                  Ingrese contraseña
                </p>
              )}
            </div>
            <input
              type="submit"
              value={"Login ➜"}
              className="w-48 bg-white text-green-services-100 rounded-3xl z-10 mt-2 -mb-1 p-2 text-lg  hover:bg-green-services-300 hover:text-black hover:-translate-y-1 transition"
            />
          </form>
        </div>
      </div>
    </>
  );
}
