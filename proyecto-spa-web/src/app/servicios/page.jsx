"use client";
import React, { useState } from "react";
import axios from "axios"; // Asegúrate de importar axios
import Image from "next/image";
import { cormorant, montserrat } from "../ui/fonts";
import { useSession } from "next-auth/react";

const ServiciosArticulo = ({ titulo, imagen, ancho, alto, color, precio }) => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [fecha, setFecha] = useState("");

  const handlePedirTurno = async () => {
    if (!fecha) {
      alert("Por favor selecciona una fecha.");
      return;
    }

    try {
      // Hacer una petición POST a la API para guardar la fecha y el servicio
      const response = await axios.post("/api/dates", {
        service: titulo,
        date: fecha,
        user: user?.username, // Asigna el usuario que pidió el turno
        client: user?.fullname,
        time: "18:00",
        professional: "Dr. Felicidad",
        accept: 0,
      });

      if (response.status === 201) {
        alert(`Has pedido un turno para el servicio: ${titulo} el ${fecha}`);
      }
    } catch (error) {
      console.error("Error al pedir el turno:", error);
      alert("Hubo un error al pedir el turno. Intenta de nuevo.");
    }
  };

  return (
    <div className={`p-5 ${color} flex flex-col items-center`}>
      <h3
        className="text-5xl font-bold text-black mb-4"
        style={cormorant.style}
      >
        {titulo}
      </h3>

      <Image
        src={imagen}
        width={ancho}
        height={alto}
        alt={titulo}
        className="mb-4"
      />

      <p className="text-2xl font-semibold text-gray-700 mb-4">
        Precio: ${precio}
      </p>

      <div className="flex-grow"></div>

      {session ? (
        <div className="w-full flex justify-between items-end mt-4">
          <div className="flex items-center">
            <p>Fecha de reserva: </p>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="p-2 rounded-lg border-2 border-black text-center bg-green-100 mx-5"
            />
          </div>
          <button
            onClick={handlePedirTurno}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full"
          >
            Pedir turno
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default function Page() {
  return (
    <div
      className="bg-orange-100 text-green-services-300"
      style={montserrat.style}
    >
      <h3
        className="text-7xl text-center text-green-services-300 font-mono pt-8 pb-4"
        style={cormorant.style}
      >
        Servicios
      </h3>

      <div
        className="text-6xl flex-col text-center pt-7 font-bold"
        style={cormorant.style}
      >
        Masajes
      </div>
      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
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

      <h2
        className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 "
        style={cormorant.style}
      >
        Belleza
      </h2>

      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
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
          titulo="Belleza de manos y pies"
          imagen="/tratamientocor.svg"
          ancho="450"
          alto="300"
          color="bg-orange-50"
          precio="2000"
        />
      </div>

      <div
        className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 "
        style={cormorant.style}
      >
        {" "}
        Tratamientos Faciales
      </div>

      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
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
      <div
        className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 "
        style={cormorant.style}
      >
        {" "}
        Tratamientos Corporales
      </div>

      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
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
    </div>
  );
}
