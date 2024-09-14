"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { corinthia, montserrat } from "../app/ui/fonts";
import { useForm } from "react-hook-form";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      // Envía los datos en formato JSON
      const signupResponse = await axios.post("/api/auth/signup", {
        username: data.usuario,
        fullname: data.nombreCompleto,
        email: data.email,
        password: data.password,
        birthdate: data.fechaNacimiento,
      });

      console.log(signupResponse);

      const res = await signIn("credentials", {
        username: signupResponse.data.username,
        password: data.password,
        redirect: false,
      });

      if (res?.ok) return router.push("/");

      console.log(res);
      // Maneja la respuesta si es necesario
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;

        if (message.includes("usuario")) {
          setError("username", {
            type: "manual",
            message: message, // El mensaje que viene del backend
          });
        } else if (message.includes("email")) {
          setError("email", {
            type: "manual",
            message: message, // El mensaje que viene del backend
          });
        } else if (message.includes("contraseña")) {
          setError("password", {
            type: "manual",
            message: message, // El mensaje que viene del backend
          });
        }
      }
      console.log(error);
    }
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
        <div className="flex flex-col justify-center items-center w-600 h-800 bg-green-950 rounded-3xl shadow-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-evenly w-full h-full my-16 items-center"
            style={montserrat.style}
          >
            <h1
              className="text-white text-9xl mb-3 -mt-8"
              style={corinthia.style}
            >
              Registro
            </h1>
            <div className="relative w-3/5">
              <input
                className="w-full rounded-3xl bg-orange-50 z-10 my-1 py-2 px-5 border-solid border-transparent hover:border-black border-2 text-lg"
                placeholder="Usuario"
                defaultValue={""}
                {...register("username", {
                  required: "Ingrese nombre de usuario",
                })}
              />
              {errors.username && (
                <p className="absolute left-3 -bottom-5 z-20 mt-1 bg-red-500 text-white text-sm px-3 py-1 rounded-xl shadow-lg">
                  {errors.usuario.message}
                </p>
              )}
            </div>
            <div className="relative w-3/5">
              <input
                className="w-full rounded-3xl bg-orange-50 z-10 my-1 py-2 px-5 border-solid border-transparent hover:border-black border-2 text-lg"
                placeholder="Nombre Completo"
                defaultValue={""}
                {...register("nombreCompleto", {
                  required: "Ingrese nombre completo",
                })}
              />
              {errors.nombreCompleto && (
                <p className="absolute left-3 -bottom-5 z-20 mt-1 bg-red-500 text-white text-sm px-3 py-1 rounded-xl shadow-lg">
                  {errors.nombreCompleto.message}
                </p>
              )}
            </div>
            <div className="relative w-3/5">
              <input
                className="w-full rounded-3xl bg-orange-50 z-10 my-1 py-2 px-5 border-solid border-transparent hover:border-black border-2 text-lg"
                placeholder="E-mail"
                defaultValue={""}
                {...register("email", {
                  required: "Ingrese un email válido",
                  pattern: {
                    value:
                      /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
                    message: "El formato del email no es válido",
                  },
                })}
              />
              {errors.email && (
                <p className="absolute left-3 -bottom-5 z-20 mt-1 bg-red-500 text-white text-sm px-3 py-1 rounded-xl shadow-lg">
                  {errors.email.message}
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
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "Contraseña debe tener al menos 6 carácteres",
                  },
                })}
              />
              {errors.password && (
                <p className="absolute left-3 -bottom-5 z-20 mt-1 bg-red-500 text-white text-sm px-3 py-1 rounded-xl shadow-lg">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="relative w-3/5">
              <input
                className="w-full rounded-3xl bg-orange-50 z-10 my-1 py-2 px-5 border-solid border-transparent hover:border-black border-2 text-lg"
                type="date"
                placeholder="Fecha de Nacimiento"
                defaultValue={""}
                {...register("fechaNacimiento", {
                  required: "Ingrese fecha de nacimiento",
                })}
              />
              {errors.fechaNacimiento && (
                <p className="absolute left-3 -bottom-5 z-20 mt-1 bg-red-500 text-white text-sm px-3 py-1 rounded-xl shadow-lg">
                  {errors.fechaNacimiento.message}
                </p>
              )}
            </div>
            <input
              type="submit"
              value={"Registrarme!"}
              className="w-48 bg-orange-50 text-green-services-100 rounded-3xl z-10 mt-2 -mb-1 p-2 text-lg hover:bg-green-services-300 shadow-xl hover:text-black hover:-translate-y-1 transition"
            />
          </form>
          <p
            className="z-10 text-orange-50 text-sm pb-9 -mt-9 "
            style={montserrat.style}
          >
            ¿Ya estás registrado?{" "}
            <Link href="/login" className="text-red-600 hover:underline">
              Ingresar!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
