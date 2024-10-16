"use client";
import React from "react";
import { cormorant, montserrat } from "@/app/ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import TurnoConfirmado from "@/components/TurnoConfirmado";
import TurnoConfirmar from "@/components/TurnoConfirmar";

export default function Clientes() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/dates");
        setCollection(response.data);
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen bg-orange-50 p-2" style={montserrat.style}>
      <div className="m-4 flex flex-col items-center">
        <h1 className="text-7xl mt-10" style={cormorant.style}>
          Turnos
        </h1>

        <div className="w-full py-16 text-center">
          <h2 className="py-4 text-3xl">Turnos a confirmar</h2>
          <div className="flex p-4 bg-orange-100 shadow rounded-t">
            <div className="w-1/6">
              <p>Cliente</p>
            </div>
            <div className="w-1/6">
              <p>Servicio</p>
            </div>
            <div className="w-1/6">
              <p>Fecha</p>
            </div>
            <div className="w-1/6">
              <p>Horario</p>
            </div>
            <div className="w-1/6">
              <p>Profesional</p>
            </div>
            <div className="w-1/6">
              <p>Decisión</p>
            </div>
          </div>
          {/* Turnos confirmados */}
          {collection.map((item) => (
            <div key={item._id}>
              <TurnoConfirmar item={item} />
            </div>
          ))}
        </div>

        <div className="w-full py-16 text-center">
          <h2 className="py-4 text-3xl">Turnos confirmados</h2>
          <div className="flex p-4 bg-orange-100 shadow rounded-t ">
            <div className="w-1/5">
              <p>Cliente</p>
            </div>
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
          </div>
          {/* Turnos confirmados */}
          {collection.map((item) => (
            <div key={item._id}>
              <TurnoConfirmado item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
