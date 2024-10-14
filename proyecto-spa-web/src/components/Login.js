"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { corinthia, montserrat } from "../app/ui/fonts";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
      username: data.username,
      password: data.password,
      redirect: false,
    });

    console.log(res);

    if (res?.error) return setError(res.error);

    if (res?.ok) return router.push("/");
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
        <div className="flex flex-col justify-center items-center w-[600px] h-[500px] bg-green-950 rounded-3xl shadow-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-evenly w-full h-3/4 items-center "
            style={montserrat.style}
          >
            <div className="relative w-3/5 flex justify-center">
              <h1
                className="text-white text-9xl mb-3 -mt-8"
                style={corinthia.style}
              >
                Bienvenido
              </h1>
              {error && (
                <p className="absolute -bottom-2 z-20 mt-1 bg-red-500 text-white text-lg px-12 py-1 rounded-2xl shadow-lg">
                  {error}
                </p>
              )}
            </div>
            <div className="relative w-3/5">
              <input
                className="w-full rounded-3xl bg-orange-50 z-10 my-1 py-2 px-5 border-solid border-transparent hover:border-black border-2 text-lg"
                placeholder="Usuario"
                defaultValue={""}
                {...register("username", {
                  required: true,
                })}
              />
              {errors.username?.type === "required" && (
                <p className="absolute left-3 -bottom-5 z-20 mt-1 bg-red-500 text-white text-sm px-3 py-1 rounded-xl shadow-lg">
                  Ingrese nombre de usuario
                </p>
              )}
            </div>
            <div className="relative w-3/5">
              <input
                className="w-full bg-orange-50 rounded-3xl z-10 my-1 py-2 px-5 border-solid border-transparent hover:border-black border-2 text-lg"
                type="password"
                placeholder="Contraseña"
                autoComplete="off"
                defaultValue={""}
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="absolute left-3 -bottom-5 z-20 mt-1 bg-red-500 text-white text-sm px-3 py-1 rounded-xl shadow-lg">
                  Ingrese contraseña
                </p>
              )}
            </div>
            <input
              type="submit"
              value={"Login ➜"}
              className="w-48 bg-orange-50 text-green-services-100 rounded-3xl z-10 mt-2 -mb-1 p-2 text-lg  hover:bg-green-services-300 shadow-xl hover:text-black hover:-translate-y-1 transition border-solid border-transparent hover:border-white border-2"
            />
          </form>
          <p className="z-10 text-orange-50 text-sm " style={montserrat.style}>
            ¿Aún no estás registrado?{" "}
            <Link href="/register" className="text-red-600 hover:underline">
              Registrarme!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
