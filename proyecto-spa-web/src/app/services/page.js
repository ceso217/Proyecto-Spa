import React from "react";
import Image from "next/image";
import styles from  "../../styles/Services.module.css";
import { Corinthia } from "@next/font/google";

const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
});

export default function page() {
  return (
    <div className={styles["services-container"]}>
    <h1 className={styles["services-header"]}>Servicios</h1>
      <div className={styles["service-block"]}>
        <div className={styles["services-titles"]}>
        <div className={styles["minicont"]}>
        <h2>Masajes</h2>
        
      <Image className="img-services"
        src="/fotomasajeser.svg"
        alt="Persona en atuendo médico"
        width={300}
        height={200}
            />
          
          </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.</p>
          </div>
          
    </div>
      <div className={styles["service-block"]}>
        <div className={styles["services-titles-r"]}>
        <div className={styles["minicont"]}>
        <h2>Belleza</h2>
      <Image
        src="/belleza.svg"
        alt="Manos con gotero"
        width={300}
        height={200}
            />
            </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.</p>
        </div>
        </div>
      <div className={styles["service-block"]}>
        <div className={styles["services-titles"]}>
        <div className={styles["minicont"]}>
        <h2>Tratamientos Faciales</h2>
      <Image
        src="/tratamientofacial.svg"
        alt="Artículos de spa"
        width={300}
        height={200}
            />
            </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.</p>
        </div>
        </div>
      <div className={styles["service-block"]}>
        <div className={styles["services-titles-r"]}>
        <div className={styles["minicont"]}>
        <h2>Tratamientos Corporales</h2>
      <Image
        src="/tratamientocor.svg"
        alt="Artículos de spa"
        width={300}
        height={200}
            />
            </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.</p>
    </div>
    </div>
        
  </div>
  );
}

