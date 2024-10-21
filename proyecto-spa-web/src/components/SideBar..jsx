"use client";
import React, { useState } from "react";
import Link from "next/link";
import { corinthia } from "@/app/ui/fonts";
import Image from "next/image";
import { FaHome, FaInfoCircle, FaConciergeBell, FaNewspaper, FaBriefcase, FaArchive, FaPersonBooth } from "react-icons/fa";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón del menú a la izquierda */}
      <button className="text-white ml-4" onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 hover:text-gray-300 transition duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {/* Fondo oscuro cuando el menú está abierto */}
      <div
        className={`${!open && "hidden"
          } bg-black/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-40`}
        onClick={() => setOpen(false)}
      ></div>
      {/* Contenido del sidebar */}
      <div
        className={`${open ? "w-80" : "w-0"
          } bg-gradient-to-b from-green-services-100 to-green-300 min-h-screen fixed top-0 left-0 transition-all duration-300 ease-in-out z-50 shadow-lg`}
      >
        <div className={`${!open && "hidden"} pt-6`}>
          {/* Botón para cerrar el menú */}
          <button
            className="ml-4 text-white mb-10"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 transition duration-200 hover:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Elementos del menú estilizados */}
          <div className="hover:bg-green-600 cursor-pointer py-4 mb-2 text-lg ">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center text-white text-xl transition-all relative pb-4"
            >
              <FaHome className="mr-3" /> Inicio
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 border-b-2 border-white mt-4" />
            </Link>
          </div>

          <div className="hover:bg-green-600 cursor-pointer py-4 mb-2 text-lg">
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center text-white text-xl transition-all relative pb-4"
            >
              <FaInfoCircle className="mr-3" /> Mi Perfil
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 border-b-2 border-white mt-4" />
            </Link>
          </div>

          <div className="hover:bg-green-600 cursor-pointer py-4 mb-2 text-lg">
            <Link
              href="/clientes"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center text-white text-xl transition-all relative pb-4"
            >
              <FaPersonBooth className="mr-3" /> Todos los Clientes
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 border-b-2 border-white mt-4" />
            </Link>
          </div>

          <div className="hover:bg-green-600 cursor-pointer py-4 mb-2 text-lg">
            <Link
              href="/mis_turnos"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center text-white text-xl transition-all relative pb-4"
            >
              <FaConciergeBell className="mr-3" /> Mis Turnos
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 border-b-2 border-white mt-4" />
            </Link>
          </div>

          <div className="hover:bg-green-600 cursor-pointer py-4 mb-2 text-lg">
            <Link
              href="/turnos_hoy"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center text-white text-xl transition-all relative pb-4"
            >
              <FaNewspaper className="mr-3" /> Turnos para Hoy
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 border-b-2 border-white mt-4" />
            </Link>
          </div>

          <div className="hover:bg-green-600 cursor-pointer py-4 mb-2 text-lg">
            <Link
              href="/turnos"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center text-white text-xl transition-all relative pb-4"
            >
              <FaBriefcase className="mr-3" /> Todos los turnos
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 border-b-2 border-white mt-4" />
            </Link>
          </div>

          <div className="hover:bg-green-600 cursor-pointer py-4 mb-2 text-lg">
            <Link
              href="/pagos"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center text-white text-xl transition-all relative pb-4"
            >
              <FaArchive className="mr-3" /> Pagos
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 border-b-2 border-white mt-4" />
            </Link>
          </div>
        </div>
      </div>
      {/* Logo e imagen a la derecha
      <div className="flex items-center mr-4">
        <Link
          href="/"
          className="text-7xl text-orange-100 mt-11"
          style={corinthia.style}
        >
          Sentirse Bien
        </Link>
        <Image src="/logo.svg" alt="Logo" width={145} height={145} />
      </div> */}
    </>
  );
};

export default SideBar;
