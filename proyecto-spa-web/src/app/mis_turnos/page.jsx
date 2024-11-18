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
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

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
    <div className="w-full h-auto bg-orange-50 px-4 sm:px-8 py-8 text-center" style={montserrat.style}>
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1
          className="text-6xl md:text-7xl mt-10 text-green-services-300 text-center"
          style={cormorant.style}
        >
          Mis Turnos
        </h1>

        <h2 className="py-4 text-2xl sm:text-3xl mt-8">Turnos pagados</h2>

        <div className="w-full pb-16 pt-8">
          <div className="flex flex-wrap items-center p-4 bg-orange-100 shadow rounded-t text-sm sm:text-base">
            <div className="flex-1 text-center">
              <p>Servicio</p>
            </div>
            <div className="flex-1 text-center">
              <p>Fecha</p>
            </div>
            <div className="flex-1 text-center">
              <p>Horario</p>
            </div>
            <div className="flex-1 text-center">
              <p>Profesional</p>
            </div>
          </div>
          {collection
            .filter((item) => {
              const turnoFecha = new Date(item.date); // Convierte la fecha a un objeto Date
              const hoy = new Date(); // Obtiene la fecha actual
              hoy.setHours(0, 0, 0, 0); // Asegúrate de comparar solo la fecha, sin hora

              return (
                item.user === user.username &&
                item.pay === true &&
                turnoFecha >= hoy // Verifica que la fecha del turno no haya pasado
              );
            })
            .map((item) => (
              <div key={item._id}>
                <MisTurnosConfirmados item={item} />
              </div>
            ))}
        </div>

        <h2 className="py-4 text-2xl sm:text-3xl mt-8">Turnos pendientes de pago</h2>
        <div className="w-full pb-16 pt-8">
          <div className="flex break-words hyphens-auto items-center p-4 bg-orange-100 shadow rounded-t text-sm sm:text-base">
            <div className="flex-1 text-center">
              <p>Servicio</p>
            </div>
            <div className="flex-1 text-center">
              <p>Fecha</p>
            </div>
            <div className="flex-1 text-center">
              <p>Horario</p>
            </div>
            <div className="flex-1 text-center">
              <p>Profesional</p>
            </div>
            <div className="flex-1 text-center">
              <p>Pago Diferido</p>
            </div>
          </div>
          {collection
            .filter((item) => {
              const turnoFecha = new Date(item.date); // Convierte la fecha a un objeto Date
              const hoy = new Date();
              hoy.setHours(0, 0, 0, 0);

              return (
                item.user === user.username &&
                item.pay === false &&
                turnoFecha >= hoy
              );
            })
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
