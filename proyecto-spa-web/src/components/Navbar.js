"use client";
import Link from "next/link";
import Image from "next/image";
import { corinthia, cormorant, montserrat } from "@/app/ui/fonts";
import "../styles/landing.css";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import SideBar from "./SideBar.";

function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="w-full h-28 bg-green-services-100 flex overflow-hidden justify-between"
      style={montserrat.style}
    >
      <div className="w-[48px] flex ">
        <SideBar />
      </div>
      <div className="w-[512px] flex items-center">
        <Image src="/logo.svg" alt="Logo" width={170} height={170} />
        <Link
          href="/"
          className="text-7xl text-orange-100 mt-11"
          style={corinthia.style}
        >
          Sentirse Bien
        </Link>
      </div>
      <ul className="w-[700px] flex justify-around items-center text-lg justify-self-center text-orange-50 ">
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
        {/* {session ? (
          <li className="transition hover:-translate-y-1">
            <Link href="/profile">Perfil</Link>
          </li>
        ) : (
          ""
        )} */}
      </ul>
      <div className="w-[210px]">
        <Image
          src="/flor.svg"
          alt="Descripción de la imagen"
          width={100}
          height={4000}
          className="translate-x-32 translate-y-4"
        />
      </div>
      <div className="w-[350px] flex items-center justify-end no-underline justify-self-end">
        {session ? (
          <button
            className="px-4 py-2 mr-4 bg-orange-100 rounded-3xl text-lg shadow-2xl transition hover:-translate-y-1"
            onClick={() => {
              signOut({ callbackUrl: "/login" });
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              href="/register"
              className="px-4 py-2 mr-4 bg-orange-100 rounded-3xl text-lg shadow-2xl transition hover:-translate-y-1"
            >
              Registrarse
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 mr-4 bg-orange-100 rounded-3xl text-lg shadow-2xl transition hover:-translate-y-1"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
