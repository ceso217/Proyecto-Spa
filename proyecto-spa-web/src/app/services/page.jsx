"use client"
import React, { useState } from "react";
import Image from "next/image";
import { corinthia } from "../ui/fonts";

// Componente para las tarjetas de servicio
const ServiciosArticulo = ({ titulo, imagen, ancho, alto, color }) => {
  const [fecha, setFecha] = useState("");

  return (
    <div className={`p-5 ${color} flex flex-col items-center`}>
      <h3 className="text-5xl font-bold text-green-services-300 mb-4 hover:underline decoration-2 hover:text-green-500" style={corinthia.style}>
        {titulo}
      </h3>
      
      {/* Imagen del servicio */}
      <Image src={imagen} width={ancho} height={alto} alt={titulo} className="mb-4" />

      <div className="flex-grow"></div>

      <div className="w-full flex justify-between items-end mt-4">
        
        {/* Selector de fecha a la izquierda */}
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="p-2 rounded-lg border-2 border-black text-center bg-green-100"
        />

        {/* Botón de "Pedir turno" a la derecha */}
        <button
          onClick={() => alert(`Has pedido un turno para el servicio: ${titulo} el ${fecha}`)}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full"
        >
          Pedir turno
        </button>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <>
      <h3
        className="bg-green-services-100 text-7xl text-center text-white font-mono border-y-2 pt-3 border-teal-900"
        style={corinthia.style}
      >
        Servicios
      </h3>

      {/* Sección con fondo de imagen SVG */}
      <div
        className="grid grid-cols-3 gap-4 p-10 bg-orange-100"

      >
        <ServiciosArticulo
          titulo="Masajes"
          imagen="/fotomasajeser.svg"
          ancho="300"
          alto="300"
          color="bg-orange-50"
        />
        <ServiciosArticulo
          titulo="Belleza"
          imagen="/belleza.svg"
          ancho="500"
          alto="300"
          color="bg-orange-50"
        />
        <ServiciosArticulo
          titulo="Tratamientos Faciales"
          imagen="/tratamientocor.svg"
          ancho="450"
          alto="300"
          color="bg-orange-50"
        />
      </div>
    </>
  );
}
