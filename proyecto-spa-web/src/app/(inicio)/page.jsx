import Image from "next/image";
import Link from "next/link";
import "../../styles/Home.module.css";
import { corinthia, cormorant, montserrat } from "../ui/fonts";
import Comments from "@/components/Comments";


export default function Home() {
  
  return (
    <>
      <div>
        <div className="hero">
          <Image
            src="/portada.svg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute flex flex-col text-9xl -translate-y-60 items-center">
            <Image
              src="/logo.svg"
              alt="Descripción de la imagen"
              width={400}
              height={400}
            />
            <h1 style={corinthia.style}>Sentirse Bien</h1>
          </div>
        </div>
      </div>

      <div className="Somos" id="somos">
        <div className="item">
          <Image
            src="/fotopiedras.svg"
            alt="fotos de persona recibiendo masaje"
            width={400}
            height={600}
          />
        </div>
        <div className="item">
          <h2
            className="text-7xl text-green-services-300 text-center"
            style={cormorant.style}
          >
            Quienes Somos
          </h2>
          <p className="pt-9" style={montserrat.style}>
            Buscamos atraer la atención de nuestros clientes a través de
            experiencias inspiradas en la seducción de los sentidos. Adaptamos
            las propuestas con el objetivo de que logre desconectarse
            completamente de la rutina y disfrute de un momento de bienestar, en
            total armonía con la naturaleza.
          </p>
        </div>
        <div className="item i2">
          <Image
            src="/fotomasaje.svg"
            alt="fotod de persona recibiendo masaje"
            width={400}
            height={600}
          />
        </div>
      </div>

      <div className="flex bg-green-services-100">
        <div className=" flex items-center w-6/12 text-center text-white">
          <div className="flex flex-col items-center">
            <h2 className="text-7xl mb-5" style={cormorant.style}>
              Pedí tu Turno!
            </h2>
            <p
              className="text-base p-6 mb-5 leading-6 w-3/5"
              style={montserrat.style}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum
              ultricies egestas, dolor sem laoreet orci, quis finibus justo quam
              at nibh. Vestibulum ipsum tortor, suscipit non enim vitae.
              Tincidunt scelerisque augue. Nunc quis fringilla magna, vel
              sollicitudin quam.
            </p>
            <Link href="/comingsoon">
              <button className="bg-green-services-200 text-2xl hover:no-underline text-white rounded-xl cursor-pointer py-3.5 px-7 transition hover:-translate-y-1 shadow-lg">
                Contactanos
              </button>
            </Link>
          </div>
        </div>
        <div className="w-6/12">
          <Image
            src="ctabata.svg"
            alt="Descripción de la imagen"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="Encuentranos">
        <div className="item">
          <Image
            src="/silla.svg"
            alt="Imagen decorativa"
            width={400}
            height={300}
          />
        </div>
        <div className="item i2">
          <h2
            className="text-7xl text-green-services-300 pb-8"
            style={cormorant.style}
          >
            ¡Encuéntranos!
          </h2>
          <p style={montserrat.style}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum
            ultricies.
          </p>
        </div>
        <div className="item">
          <Image
            src="/pileta.svg"
            alt="Imagen decorativa"
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581361.0577490767!2d-64.4921250948583!3d-28.76664233563793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329977b18b6df7%3A0x8f9c10933bb46db8!2sSENTIRSE%20BIEN%20SPA!5e0!3m2!1ses-419!2sar!4v1725247558743!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Comments />
    </>
  );
}
