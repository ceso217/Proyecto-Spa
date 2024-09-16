"use client"
import React, { useState } from "react";
import Image from "next/image";
import { corinthia } from "../ui/fonts";

// Componente para las tarjetas de servicio
const ServiciosArticulo = ({ titulo, imagen, ancho, alto, color, precio }) => {
  const [fecha, setFecha] = useState("");

  return (
    <div className={`p-5 ${color} flex flex-col items-center`}>
      <h3
        className="text-5xl font-bold text-green-services-300 mb-4 hover:underline decoration-2 hover:text-green-500"
        style={corinthia.style}
      >
        {titulo}
      </h3>

      {/* Imagen del servicio */}
      <Image src={imagen} width={ancho} height={alto} alt={titulo} className="mb-4" />

      {/* Mostrar el precio */}
      <p className="text-2xl font-semibold text-gray-700 mb-4">Precio: ${precio}</p>

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

      <div className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center pt-7 font-bold"
        style={corinthia.style}
      > Masajes</div>
      {/* Sección con fondo de imagen SVG */}
      <div
        className="grid grid-cols-3 gap-4 p-10 bg-orange-100"

      >
        <ServiciosArticulo
          titulo="Anti-stress"
          imagen="/fotomasajeser.svg"
          ancho="300"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
        <ServiciosArticulo
          titulo="Descontracturantes"
          imagen="/belleza.svg"
          ancho="500"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
        <ServiciosArticulo
          titulo="Masajes con piedras calientes"
          imagen="/tratamientocor.svg"
          ancho="450"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
      </div>

      <div className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 "
        style={corinthia.style}
      > Belleza</div>

      <div
        className="grid grid-cols-3 gap-4 p-10 bg-orange-100"

      >
        <ServiciosArticulo
          titulo="Lifting de pestaña"
          imagen="/fotomasajeser.svg"
          ancho="300"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
        <ServiciosArticulo
          titulo="Depilación facial"
          imagen="/belleza.svg"
          ancho="500"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
        <ServiciosArticulo
          titulo="TBelleza de manos y pies"
          imagen="/tratamientocor.svg"
          ancho="450"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />      
      </div>

      <div className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 "
        style={corinthia.style}
      > Tratamientos Faciales</div>

      <div
        className="grid grid-cols-3 gap-4 p-10 bg-orange-100"

      >
        <ServiciosArticulo
          titulo="Punta de Diamante: Micro exfoliación"
          imagen="/fotomasajeser.svg"
          ancho="300"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
        <ServiciosArticulo
          titulo="Limpieza profunda + Hidratación"
          imagen="/belleza.svg"
          ancho="500"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
        <ServiciosArticulo
          titulo="Crio frecuencia facial"
          imagen="/tratamientocor.svg"
          ancho="450"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
      </div>
      <div className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 "
        style={corinthia.style}
      > Tratamientos Corporales</div>

      <div
        className="grid grid-cols-3 gap-4 p-10 bg-orange-100"

      >
        <ServiciosArticulo
          titulo="VelaSlim"
          imagen="/fotomasajeser.svg"
          ancho="300"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
        <ServiciosArticulo
          titulo="DermoHealth"
          imagen="/belleza.svg"
          ancho="500"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
        <ServiciosArticulo
          titulo="Criofrecuencia"
          imagen="/tratamientocor.svg"
          ancho="450"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
        </div>
    </>
  );
}
