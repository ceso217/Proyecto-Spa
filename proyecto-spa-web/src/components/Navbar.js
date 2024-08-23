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
          style={{ fontSize: "70px", color: "#F8DCDC", marginTop: "55px" }}
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
          <Link href="/services">Servicios</Link>
        </li>
        <li>
          <Link href="/news">Noticias</Link>
        </li>
        <li>
          <Link href="/jobs">Empleo</Link>
        </li>
      </ul>
      <div className="actions">
        <button>Login</button>
      </div>
    </nav>
  );
}
