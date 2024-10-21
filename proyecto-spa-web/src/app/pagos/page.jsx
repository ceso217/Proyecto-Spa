"use client";
import React from "react";
import { cormorant, montserrat } from "@/app/ui/fonts";
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import axios from "axios";
import PagosComp from "@/components/PagosComp";

export default function Pagos() {
  const [collection, setCollection] = useState([]);

  // Definimos fetchData fuera del useEffect para que sea accesible globalmente en el componente
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/pagos");
      setCollection(response.data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      console.error("Error fetching collection:", error);
    }
  };

  // useEffect para cargar los datos cuando el componente se monta
  useEffect(() => {
    fetchData(); // Llamada inicial para obtener los datos
  }, []);

  return (
    <div className="w-full h-auto bg-orange-50 p-2" style={montserrat.style}>
      <div className="m-4 flex flex-col items-center">
        <h1
          className="text-7xl mt-10 text-green-services-300"
          style={cormorant.style}
        >
          Pagos
        </h1>

        <div className="w-full py-16 text-center">
          {/* <h2 className="py-4 text-3xl">Turnos pendientes</h2> */}
          <div className="flex p-4 bg-orange-100 shadow rounded-t">
            <div className="w-1/5">
              <p>Cliente</p>
            </div>
            <div className="w-1/5">
              <p>Correo</p>
            </div>
            <div className="w-1/5">
              <p>Servicio</p>
            </div>
            <div className="w-1/5">
              <p>Pago</p>
            </div>
            <div className="w-1/5">
              <p>Fecha de pago</p>
            </div>
          </div>
          {/* Turnos confirmados */}
          {collection
            .map((item) => (
              <div key={item._id}>
                <PagosComp item={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
