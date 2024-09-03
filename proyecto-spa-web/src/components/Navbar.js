import Link from "next/link";
import Image from "next/image";
import { Corinthia } from "@next/font/google";


const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src="/logo.svg" alt="Logo" width={170} height={170} />
        <Link
          href="/"
          className={corinthia.className}
          style={{ fontSize: "70px", color: "#F8DCDC", marginTop: "55px", textDecoration: "none" }}
        >
          Sentirse Bien
        </Link>
      </div>
      <ul className="navLinks">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#somos">Quienes Somos</Link>
        </li>
        <li>
          <Link href="/services">Servicios</Link>
        </li>
        <li>
          <Link href="/comingsoon">Noticias</Link>
        </li>
        <li>
          <Link href="/comingsoon">Empleo</Link>
        </li>
      </ul>
      <div className="actions">
        <Image
          src="/flor.svg"
          alt="Descripción de la imagen"
          width={100}
          height={4000}
        />
        <button>Login</button>
      </div>
    </nav>
  );
}
