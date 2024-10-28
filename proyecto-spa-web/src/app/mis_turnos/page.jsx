"use client";
import React from "react";
import { cormorant, montserrat } from "@/app/ui/fonts";
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import axios from "axios";
import MisTurnos from "@/components/MisTurnos"
import MisTurnosConfirmados from "@/components/MisTurnosConfirmados"
import MisTurnosRechazados from "@/components/MisTurnosRechazados"
import TurnoConfirmar from "@/components/TurnoConfirmar";

export default function Clientes() {
  const [collection, setCollection] = useState([]);
  const { data: session, status } = useSession();
  const user = session?.user;

  // Definimos fetchData fuera del useEffect para que sea accesible globalmente en el componente
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/dates");
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
          className="text-7xl mt-10 text-green-services-300 border-green-services-300"
          style={cormorant.style}
        >
          Mis Turnos
        </h1>

        <h2 className="py-4 text-3xl mt-8">Turnos pagados</h2>

        <div className="w-full pb-16 pt-8 text-center">
          <div className="flex p-4 bg-orange-100 shadow rounded-t ">
            <div className="w-1/4">
              <p>Servicio</p>
            </div>
            <div className="w-1/4">
              <p>Fecha</p>
            </div>
            <div className="w-1/4">
              <p>Horario</p>
            </div>
            <div className="w-1/4">
              <p>Profesional</p>
            </div>
          </div>
          {collection
            .filter((item) => item.user === user.username && item.pay === true) // Filtra los elementos que cumplen la condición
            .map((item) => (
              <div key={item._id}>
                <MisTurnosConfirmados item={item} />
              </div>
            ))}
        </div>

        <h2 className="py-4 text-3xl mt-8">Turnos pendientes de pago</h2>
        <div className="w-full pb-16 pt-8 text-center">
          <div className="flex p-4 bg-orange-100 shadow rounded-t ">
            <div className="w-1/5">
              <p>Servicio</p>
            </div>
            <div className="w-1/5">
              <p>Fecha</p>
            </div>
            <div className="w-1/5">
              <p>Horario</p>
            </div>
            <div className="w-1/5">
              <p>Profesional</p>
            </div>
            <div className="w-1/5">
              <p>Pago Diferido</p>
            </div>
          </div>
          {collection
            .filter((item) => item.user === user.username && item.pay === false) // Filtra los elementos que cumplen la condición
            .map((item) => (
              <div key={item._id}>
                <TurnoConfirmar item={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
