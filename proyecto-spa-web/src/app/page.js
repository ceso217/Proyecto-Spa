import Image from "next/image";
import "./globals.css";
import { Corinthia } from "@next/font/google";
import styles from "../styles/Home.module.css";

const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image
          src="/portada.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.overlay}>
          <Image
            src="/logo.svg"
            alt="Descripción de la imagen"
            width={250}
            height={250}
          />
          <h1 className={corinthia.className}>Sentirse Bien</h1>
        </div>
      </div>
    </div>
  );
}
