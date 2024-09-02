import React from "react";
import Image from "next/image";
import {ServiciosArticulo} from "../../components/Varios"


export default function page() {
  return (
    <>
      <h3 className="bg-rose-300 text-3xl"> Servicios </h3>
      <ServiciosArticulo titulo="Masajes" imagen="/fotomasajeser.svg" ancho="200" alto="300" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam." color="bg-rose-300" />
      <ServiciosArticulo titulo="Masajes" imagen="/fotomasajeser.svg" ancho="200" alto="300" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam." color="bg-amber-100" reverse />
      <ServiciosArticulo titulo="Masajes" imagen="/fotomasajeser.svg" ancho="200" alto="300" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam." color="bg-rose-300" />
      <ServiciosArticulo titulo="Masajes" imagen="/fotomasajeser.svg" ancho="200" alto="300" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam." color="bg-amber-100" reverse />
    </>
  );
}