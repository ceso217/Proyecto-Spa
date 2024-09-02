import Image from "next/image";
import "../../styles/Home.module.css";
import { Corinthia } from "@next/font/google";

const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div className="container">
      <div className="hero">
        <Image
          src="/portada.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="overlay">
          <Image
            src="/logo.svg"
            alt="Descripción de la imagen"
            width={400}
            height={400}
          />
          <h1 className={corinthia.className}>Sentirse Bien</h1>
        </div>
      </div>
    </div>
      <div className="Somos">
        <div className = "item">
          <h2>Vive una experiencia inolvidable</h2>
        </div>
        <div className = "item">
            <Image
              src= "/fotopiedras.svg"
              alt = "fotos de persona recibiendo masaje"
              width = {300}
              height={200}
            />
          </div>
          <div className = "item">
            <Image
              src= "/fotomasaje.svg"
              alt = "fotod de persona recibiendo masaje"
              width = {300}
              height={200}
            />
          </div>
    </div>
    </>
  );
}