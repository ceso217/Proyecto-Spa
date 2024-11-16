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
      className="bg-green-services-100 py-8 text-white"
      style={montserrat.style}
    >
      {/* Contenedor Principal */}
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center lg:items-start mb-8 lg:mb-12 px-4">
        {/* Logo */}
        <div className="w-full lg:w-1/5 flex justify-center mb-6 lg:mb-0">
          <Image
            src="/logo.svg"
            alt="Logotipo Sentirse Bien"
            width={200}
            height={200}
          />
        </div>

        {/* Links principales */}
        <div className="w-full lg:w-3/5 flex flex-wrap justify-around">
          {/* Contamos con */}
          <div className="flex flex-col items-center text-center mb-6 lg:mb-0">
            <h3 className="text-black text-xl pb-2">Contamos con</h3>
            <Link href="/about" className="hover:underline">
              Cosmetóloga
            </Link>
            <Link href="/about" className="hover:underline">
              Especialista
            </Link>
            <Link href="/about" className="hover:underline">
              Masajista
            </Link>
          </div>

          {/* Desarrolladores */}
          <div className="flex flex-col items-center text-center mb-6 lg:mb-0">
            <h3 className="text-black text-xl pb-2">Desarrolladores</h3>
            <Link
              href="https://github.com/ceso217"
              className="hover:underline"
              target="_blank"
            >
              Cecilio Baroni
            </Link>
            <Link
              href="https://github.com/LeonardoBrabo"
              className="hover:underline"
              target="_blank"
            >
              Leonardo Brabo
            </Link>
            <Link
              href="https://github.com/frankito48"
              className="hover:underline"
              target="_blank"
            >
              Franco Romero
            </Link>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center text-center mb-6 lg:mb-0">
            <h3 className="text-black text-xl pb-2">Support</h3>
            <Link href="/comingsoon" className="hover:underline">
              Blog
            </Link>
            <Link href="/comingsoon" className="hover:underline">
              Help
            </Link>
            <Link href="/comingsoon" className="hover:underline">
              FAQs
            </Link>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="w-full lg:w-1/5 flex justify-center lg:justify-end items-center space-x-4">
          <a
            href="https://www.facebook.com/p/Sentirse-BIEN-SPA-100078022921559/?_rdr"
            target="_blank"
            className="hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/sentirsebien.spa/"
            target="_blank"
            className="hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://x.com/sentirtebienspa?lang=es"
            target="_blank"
            className="hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-400 h-16 flex justify-center items-center text-center">
        <p className="text-sm lg:text-base">Copyright © 2024 Infinite Loops</p>
      </div>
    </footer>
  );
};

export default Footer;
