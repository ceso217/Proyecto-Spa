"use client";
import Link from "next/link";
import Image from "next/image";
import { corinthia, cormorant, montserrat } from "@/app/ui/fonts";
import "../styles/landing.css";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src="/logo.svg" alt="Logo" width={170} height={170} />
        <Link
          href="/"
          className="text-7xl text-orange-100 mt-11"
          style={corinthia.style}
        >
          Sentirse Bien
        </Link>
      </div>
      <ul className="navLinks">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Quienes Somos</Link>
        </li>
        <li>
          <Link href="/servicios">Servicios</Link>
        </li>
        <li>
          <Link href="/notice">Noticias</Link>
        </li>
        <li>
          <Link href="/employment">Empleo</Link>
        </li>
        {session ? (
          <li>
            <Link href="/profile">Perfil</Link>
          </li>
        ) : (
          ""
        )}
      </ul>
      <div className="actions">
        <Image
          src="/flor.svg"
          alt="Descripción de la imagen"
          width={100}
          height={4000}
        />
      </div>
      {session ? (
        <button
          className="btnlogin"
          onClick={() => {
            signOut({ callbackUrl: "/login" });
          }}
        >
          Logout
        </button>
      ) : (
        <Link href="/login">
          <button className="btnlogin">Login</button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
