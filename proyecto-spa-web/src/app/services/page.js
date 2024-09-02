import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="services-container">
    <h1 className="services-header">Servicios</h1>
    <div className="service-block">
        <h2>Masajes</h2>
      <Image
        src="/medical-person.jpg"
        alt="Persona en atuendo médico"
        width={300}
        height={200}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.</p>
    </div>
    <div className="service-block">
        <h2>Belleza</h2>
      <Image
        src="/dropper-bottle.jpg"
        alt="Manos con gotero"
        width={300}
        height={200}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.</p>
    </div>
    <div className="service-block">
        <h2>Tratamientos Faciales</h2>
      <Image
        src="/spa-items.jpg"
        alt="Artículos de spa"
        width={300}
        height={200}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.</p>
    </div>
    <div className="service-block">
        <h2>Tratamientos Corporales</h2>
      <Image
        src="/spa-items.jpg"
        alt="Artículos de spa"
        width={300}
        height={200}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.</p>
    </div>
    
  </div>
  );
}

