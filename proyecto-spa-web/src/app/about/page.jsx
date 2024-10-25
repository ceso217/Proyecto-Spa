import React from "react";
import Image from "next/image";
import "../../styles/landing.css";
import { cormorant, montserrat } from "../ui/fonts";
import Carousel from "@/components/Carousel";

export default function page() {
  return (
    <>
      <div className="bg-orange-100 text-lg" id="somos" style={montserrat.style}>

        <div className="item">

          <h2
            className="text-7xl text-green-services-300 text-center flex-col pt-14 pb-24"
            style={cormorant.style}>
            Quienes Somos
          </h2>
          {/* Sección de "The Team" */}
          <div className="h-[calc(100vh-20rem)] flex items-center justify-content flex-row" >

            <div className="row">
              <div className="team-item">
                <Image src="https://img2.rtve.es/i/?w=800&i=1457687588350.jpg&crop=yes" className="rounded-3xl" alt="Dra. Florinda" width={800} height={450} />
                <h3>Dra. Florinda</h3>
                <div className="team-info">
                  <p className="position">Cosmetóloga</p>
                </div>
                <p className="description">Especialista en cosmetología, dedicada al cuidado de la piel y la belleza. Con amplia experiencia en tratamientos faciales y estéticos, su objetivo es resaltar la salud y la belleza natural de cada paciente.</p>
              </div>
              <div className="team-item">
                <Image src="https://shawellness.com/shamagazine/wp-content/uploads/2015/09/Dra.Gloria-Sabater-genetica-y-envejecimiento-piel-800x450.jpg" className="rounded-3xl" alt="Dra. Ana Felicidad" width={800} height={450} />
                <h3>Dra. Ana Felicidad</h3>
                <div className="team-info">
                  <p className="position">Dra. General</p>
                </div>
                <p className="description">Apasionada especialista en bienestar con más de 10 años de experiencia en la industria del spa y la salud holística. Su enfoque integral y su habilidad para conectar con las personas la convierten en una profesional excepcional en el arte del masaje terapéutico y los tratamientos relajantes.</p>
              </div>
              <div className="team-item">
                <Image src="https://www.f1latam.com/img/prin/fco03.jpg" className="rounded-3xl" alt="Dr. Franco Colapinto" width={800} height={450} />
                <h3>Dr. Franco Colapinto</h3>
                <div className="team-info">
                  <p className="position">Masajista</p>
                </div>
                <p className="description">Masajista profesional con una vasta experiencia en técnicas de relajación y masajes terapéuticos. Ayuda a sus pacientes a aliviar tensiones y mejorar su bienestar físico mediante tratamientos personalizados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-orange-100">
        <h2
          className="text-7xl text-green-services-300 text-center flex-col pt-28 pb-16"
          style={cormorant.style}
        >
          Galeria de Fotos
        </h2>
        <Carousel />
      </div>
    </>
  );
}