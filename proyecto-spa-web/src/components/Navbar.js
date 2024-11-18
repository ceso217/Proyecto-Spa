"use client";
import Link from "next/link";
import Image from "next/image";
import { corinthia, cormorant, montserrat } from "@/app/ui/fonts";
import "../styles/landing.css";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="w-full h-28 bg-green-services-100 flex items-center justify-between px-4 lg:px-8 overflow-hidden"
      style={montserrat.style}
    >
      {/* Logo y título */}
      <div className="flex items-center justify-center w-[450px]">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={64}
          height={64}
          className="-translate-y-3 md:w-[170px] md:h-[170px]"
        />
        <Link
          href="/"
          className="absolute text-4xl text-orange-100 mt-11 md:text-7xl md:static"
          style={corinthia.style}
        >
          Sentirse Bien
        </Link>
      </div>

      {/* Menú principal */}
      <ul className="hidden md:flex md:space-x-8 items-center text-sm lg:text-lg text-orange-50">
        <li className="transition hover:-translate-y-1">
          <Link href="/">Home</Link>
        </li>
        <li className="transition hover:-translate-y-1">
          <Link href="/about">Quienes Somos</Link>
        </li>
        <li className="transition hover:-translate-y-1">
          <Link href="/servicios">Servicios</Link>
        </li>
        <li className="transition hover:-translate-y-1">
          <Link href="/notice">Noticias</Link>
        </li>
        <li className="transition hover:-translate-y-1">
          <Link href="/employment">Empleo</Link>
        </li>
      </ul>
      {/* Botones de acción (Login / Logout / Registrarse) */}
      <div className="flex xl:flex-row items-center space-x-2 xl:w-[450px] justify-end">
        <>
          <Image
            src="/flor.svg"
            alt="Descripción de la imagen"
            width={100}
            height={4000}
            className="hidden xl:block translate-x- translate-y-[100px] flex-none"
          />
          <Link
            href="/login"
            className="px-3 py-2 -mr-28 bg-orange-100 rounded-3xl text-sm lg:text-lg shadow-md transition hover:-translate-y-1"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-3 py-2 bg-orange-100 rounded-3xl text-sm lg:text-lg shadow-md transition hover:-translate-y-1"
          >
            Registrarse
          </Link>
        </>
      </div>
    </nav>
  );
}

export default Navbar;
