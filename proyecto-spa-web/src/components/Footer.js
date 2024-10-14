import React from "react";
import Link from "next/link";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importa los estilos CSS
config.autoAddCss = false; // Evita agregar CSS automáticamente para evitar conflictos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { montserrat } from "@/app/ui/fonts";

const Footer = () => {
  return (
    <footer
      className="bg-green-services-100 py-12 text-white"
      style={montserrat.style}
    >
      <div className="container mx-auto flex mb-12 h-40">
        <div className="w-1/5 flex justify-center h-full">
          <Image
            src="/logo.svg"
            alt="Logotipo Sentirse Bien"
            width={200}
            height={200}
          />
        </div>
        <div className="flex justify-around w-3/5 ">
          <div className="flex flex-col justify-around items-center">
            <h3 className="text-black text-xl">Contamos con</h3>
            <Link href="/about">Cosmetologa</Link>
            <Link href="/about">Especialista</Link>
            <Link href="/about">Masajista</Link>
          </div>
          <div className="flex flex-col justify-around items-center text-white">
            <h3 className="text-black text-xl">Desarrolladores</h3>
            <Link href="https://github.com/ceso217">Cecilio Baroni</Link>
            <Link href="https://github.com/LeonardoBrabo">Leonardo Brabo</Link>
            <Link href="https://github.com/frankito48">Franco Romero</Link>
          </div>
          <div className="flex flex-col justify-around items-center text-white">
            <h3 className="text-black text-xl">Support</h3>
            <Link href="/comingsoon">Blog</Link>
            <Link href="/comingsoon">Help</Link>
            <Link href="/comingsoon">FAQs</Link>
          </div>
        </div>
        <div className="w-1/5 flex flex-col justify-around items-center text-black">
          <a
            href="https://www.facebook.com/p/Sentirse-BIEN-SPA-100078022921559/?_rdr"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/sentirsebien.spa/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://x.com/sentirtebienspa?lang=es" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
        </div>
      </div>
      <div className="border-t border-gris h-24 flex justify-center items-center">
        <p>Copyright © 2024 Infinite Loops</p>
      </div>
    </footer>
  );
};

export default Footer;
