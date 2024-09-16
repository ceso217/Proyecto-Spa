import React from "react";
import Image from "next/image";
import "../../styles/landing.css";
import { cormorant, montserrat } from "../ui/fonts";
import Carousel from "@/components/Carousel";



export default function page() {
  const message =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";
  return (
    <>
    <div className="AboutUs" id="somos">
      <div className="item">
        <h2
            className="text-7xl text-green-services-300 text-center flex-col py-10"
            style={cormorant.style}>
            Quienes Somos
          </h2>
          {/* Sección de "The Team" */}
          <div className="h-[calc(100vh-20rem)] flex items-center justify-content flex-row" >

            <div className="row">
              <div className="team-item">
                <img src="/logo.svg" className="team-img" alt="LEO" />
                <h3>Dra. Florinda</h3>
                <div className="team-info">
                  <p className="position">Cosmetóloga</p>
                </div>
                <p className="description">{message}</p>
              </div>
              <div className="team-item">
                <img src="/logo.svg" className="team-img" alt="FRANKITO" />
                <h3>Dra. Ana Felicidad</h3>
                <div className="team-info">
                  <p className="position">Dra. General</p>
                </div>
                <p className="description">Apasionada especialista en bienestar con más de 10 años de experiencia en la industria del spa y la salud holística. Su enfoque integral y su habilidad para conectar con las personas la convierten en una profesional excepcional en el arte del masaje terapéutico y los tratamientos relajantes.</p>
              </div>
              <div className="team-item">
                <img src="/logo.svg" className="team-img" alt="CECI" />
                <h3>Dr. Franco Colapinto</h3>
                <div className="team-info">
                  <p className="position">Masajista</p>
                </div>
                <p className="description">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <h2
            className="text-7xl text-green-services-300 text-center flex-col py-10"
            style={cormorant.style}>
            Galeria de Fotos
          </h2>
      <Carousel/>
      </div>
    
    </>
  );
}
