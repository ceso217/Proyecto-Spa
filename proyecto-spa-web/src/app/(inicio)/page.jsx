"use client"
import Image from "next/image";
import Link from "next/link";
import "../../styles/Home.module.css";
import { corinthia, cormorant, montserrat } from "../ui/fonts";
import Comments from "@/components/Comments";
import PWAInstallButton from "@/components/PWAInstallButton";

export default function Home() {

  return (
    <>
      <div className="relative h-screen w-full">
        <div className="">
          <Image
            src="/portada.svg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-start text-center mt-24 md:-mt-4">
            <Image
              src="/logo.svg"
              alt="Descripción de la imagen"
              width={300}
              height={300}
              className="sm:w-72 sm:h-72"
            />
            <h1
              className="text-8xl md:text-9xl md:-mt-20"
              style={corinthia.style}
            >
              Sentirse Bien
            </h1>
          </div>
        </div>
      </div>
      <PWAInstallButton />
      <div className="flex flex-col lg:flex-row bg-green-services-100 -mt-1">
        <div className="flex items-center justify-center w-full lg:w-6/12 text-center text-white p-6">
          <div className="flex flex-col items-center">
            <h2
              className="text-4xl sm:text-5xl lg:text-7xl mb-5"
              style={cormorant.style}
            >
              Pedí tu Turno!
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl px-4 lg:px-6 mb-5 leading-6 max-w-md"
              style={montserrat.style}
            >
              ¡Te invitamos a reservar tu turno de manera fácil y rápida! Elige el servicio que prefieras y selecciona la fecha que más te convenga.
              Nos encargaremos de brindarte la mejor experiencia para tu bienestar.
            </p>
            <Link href="/services">
              <button className="bg-green-services-200 text-lg sm:text-xl lg:text-2xl hover:no-underline text-white rounded-xl cursor-pointer py-3.5 px-7 transition hover:-translate-y-1 shadow-lg">
                Pedi tu turno!
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex items-center justify-center">
          <Image
            src="ctabata.svg"
            alt="Descripción de la imagen"
            width={500}
            height={500}
            className="w-full h-auto max-w-md lg:max-w-full"
          />
        </div>
      </div>

      <div className="mapa w-full h-auto sm:h-[400px] lg:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.381361140757!2d-64.16012346937052!3d-31.376046512425226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329977b18b6df7%3A0x8f9c10933bb46db8!2sSENTIRSE%20BIEN%20SPA!5e0!3m2!1ses-419!2sar!4v1729833281039!5m2!1ses-419!2sar"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* <div className="bg-[#f2f1e3] h-auto lg:h-[600px] flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between px-4 sm:px-8 lg:px-[50px]">
        <div className="flex-1 p-4 sm:p-6 w-full lg:max-w-[45%]">
          <Image
            src="/Pibas.svg"
            alt="Imagen decorativa"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 p-4 sm:p-6 w-full lg:max-w-[45%] text-center">
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl text-green-services-300 pb-4 sm:pb-6"
            style={cormorant.style}
          >
            ¡Dejanos un comentario!
          </h2>
          <p
            className="text-base sm:text-lg lg:text-[18px] text-[#4b4b4b]"
            style={montserrat.style}
          >
            Te invitamos a dejar un comentario sobre tu visita. Cuéntanos qué te ha parecido, qué te ha gustado más y en qué podemos mejorar. ¡Nos encantaría saber tu opinión!
          </p>
        </div>
        <div className="flex-1 p-4 sm:p-6 w-full lg:max-w-[45%]">
          <Comments />
        </div>
      </div> */}
    </>
  );
}
