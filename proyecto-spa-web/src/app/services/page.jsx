import React from "react";
import Image from "next/image";
import { ServiciosArticulo } from "../../components/Varios";
import { corinthia } from "../ui/fonts";

export default function page() {
  return (
    <>
      <h3
        className="bg-green-services-100 text-7xl text-center text-white font-mono border-y-2 pt-3 border-teal-900"
        style={corinthia.style}
      >
        {" "}
        Servicios{" "}
      </h3>
      <ServiciosArticulo
        titulo="Masajes"
        imagen="/fotomasajeser.svg"
        ancho="200"
        alto="180"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam."
        color="bg-green-services-200"
      />
      <ServiciosArticulo
        titulo="Belleza"
        imagen="/belleza.svg"
        ancho="200"
        alto="200"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam."
        color="bg-amber-100"
        reverse
      />
      <ServiciosArticulo
        titulo="Tratamientos Faciales"
        imagen="/tratamientocor.svg"
        ancho="200"
        alto="200"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam."
        color="bg-green-services-200"
      />
      <ServiciosArticulo
        titulo="Tratamientos Corporales"
        imagen="/tratamientofacial.svg"
        ancho="200"
        alto="200"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam."
        color="bg-amber-100"
        reverse
      />
    </>
  );
}
