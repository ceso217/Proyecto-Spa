import Image from "next/image";
import "../../styles/Home.module.css";
import { Corinthia } from "@next/font/google";

const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
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
  );
}