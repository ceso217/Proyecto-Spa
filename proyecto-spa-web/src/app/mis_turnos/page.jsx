"use client";
import React from "react";
import { cormorant, montserrat } from "@/app/ui/fonts";
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import axios from "axios";
import MisTurnos from "@/components/MisTurnos"
import MisTurnosConfirmados from "@/components/MisTurnosConfirmados"
import MisTurnosRechazados from "@/components/MisTurnosRechazados"

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
          className="text-7xl mt-10 text-green-services-300"
          style={cormorant.style}
        >
          Mis Turnos
        </h1>

        <div className="w-full py-16 text-center">
          <h2 className="py-4 text-3xl">Turnos pendientes</h2>
          <div className="flex p-4 bg-orange-100 shadow rounded-t">
            <div className="w-1/3">
              <p>Servicio</p>
            </div>
            <div className="w-1/3">
              <p>Fecha</p>
            </div>
            <div className="w-1/3">
              <p>Horario</p>
            </div>
          </div>
          {/* Turnos confirmados */}
          {collection
            .filter((item) => item.accept === 0 && item.user === user.username) // Filtra los elementos que cumplen la condición
            .map((item) => (
              <div key={item._id}>
                <MisTurnos item={item} />
              </div>
            ))}
        </div>

        <div className="w-full py-16 text-center">
          <h2 className="py-4 text-3xl">Turnos confirmados</h2>
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
          {/* Turnos confirmados */}
          {collection
            .filter((item) => item.accept === 1 && item.user === user.username) // Filtra los elementos que cumplen la condición
            .map((item) => (
              <div key={item._id}>
                <MisTurnosConfirmados item={item} />
              </div>
            ))}
        </div>

        <div className="w-full py-16 text-center">
          <h2 className="py-4 text-3xl">Turnos rechazados</h2>
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
              <p>Motivo</p>
            </div>
          </div>
          {/* Turnos rechazados */}
          {collection
            .filter((item) => item.accept === 2 && item.user === user.username) // Filtra los elementos que cumplen la condición
            .map((item) => (
              <div key={item._id}>
                <MisTurnosRechazados item={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
