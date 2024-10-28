"use client";
import React, { useState, useEffect } from "react";
import { cormorant, montserrat } from "@/app/ui/fonts";
import { useSession } from "next-auth/react";
import axios from "axios";
import TurnoConfirmado from "@/components/TurnoConfirmado";

export default function Clientes() {
  const [collection, setCollection] = useState([]);
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { data: session, status } = useSession();
  const user = session?.user;

  const hoy = new Date();
  const fechaDeHoy = hoy.toISOString().split("T")[0]; // Formato: "YYYY-MM-DD"


  // Definimos fetchData fuera del useEffect para que sea accesible globalmente en el componente
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/dates");
      setCollection(response.data); // Actualiza el estado con los datos obtenidos
      setFilteredCollection(response.data); // Actualiza también el estado filtrado
    } catch (error) {
      console.error("Error fetching collection:", error);
    }
  };

  // useEffect para cargar los datos cuando el componente se monta
  useEffect(() => {
    fetchData(); // Llamada inicial para obtener los datos
  }, []);


  const filtrarTurnosPorFecha = () => {
    const filtered = collection.filter((item) => {
      const fechaTurno = new Date(item.date.split('/').reverse().join('-')); // Ajusta esto según el formato de fecha en `item.date`
      const start = startDate ? new Date(`${startDate}T00:00:00`) : null;
      const end = endDate ? new Date(`${endDate}T00:00:00`) : null;

      if (end) {
        end.setHours(23, 59, 59, 999);
      }
      if (start) {
        start.setHours(0, 0, 0, 0);
      }

      let isValidDate = true;
      if (start && end) {
        isValidDate = fechaTurno >= start && fechaTurno <= end;
      } else if (start) {
        isValidDate = fechaTurno >= start;
      } else if (end) {
        isValidDate = fechaTurno <= end;
      }

      return isValidDate;
    });

    setFilteredCollection(filtered);
  };

  const handleUpdate = async (
    id,
    profesional,
    currentStatus,
    motivoRechazo
  ) => {
    if (currentStatus === "aceptar") {
      if (profesional === "Elige una opción") {
        alert("Por favor seleccione un profesional");
        return;
      }
    }

    if (currentStatus === "aceptar") {
      try {
        await axios.patch(`/api/dates/${id}`, {
          professional: profesional,
          accept: 1,
        });
        // Volver a cargar las fechas actualizadas
        fetchData();
      } catch (error) {
        console.error("Error al aceptar el turno:", error);
        alert("Hubo un error al aceptar el turno. Intenta de nuevo.");
      }
    } else if (currentStatus === "rechazar") {
      try {
        await axios.patch(`/api/dates/${id}`, {
          professional: "Elige una opción",
          accept: 2,
          rejectedReason: motivoRechazo,
        });
        // Volver a cargar las fechas actualizadas
        fetchData();
      } catch (error) {
        console.error("Error al aceptar el turno:", error);
        alert("Hubo un error al aceptar el turno. Intenta de nuevo.");
      }
    }
  };

  return (
    <div className="w-full h-auto bg-orange-50 p-2" style={montserrat.style}>
      <div className="m-4 flex flex-col items-center">
        <h1
          className="text-7xl mt-10 text-green-services-300"
          style={cormorant.style}
        >
          Turnos
        </h1>

        {/* Filtros de fechas */}
        <div className="flex justify-center my-4">
          <input
            type="date"
            value={startDate || ""}
            onChange={(e) => setStartDate(e.target.value)}
            className="mr-4 p-2 border rounded"
          />
          <input
            type="date"
            value={endDate || ""}
            onChange={(e) => setEndDate(e.target.value)}
            className="mr-4 p-2 border rounded"
          />
          <button
            onClick={filtrarTurnosPorFecha}
            className="px-4 py-2 bg-green-services-300 text-white rounded"
          >
            Filtrar
          </button>
        </div>

        <div className="w-full py-16 text-center">
          <h2 className="py-4 text-3xl">Mis Turnos a atender</h2>
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

          {/* Turnos confirmados filtrados */}
          {filteredCollection
            .filter((item) => item.professional.includes(user.fullname)) // Filtra los elementos por el profesional
            .map((item) => (
              <div key={item._id}>
                <TurnoConfirmado item={item} />
              </div>
            ))}

          {/* Turnos de hoy */}
          <h2 className="py-4 text-3xl mt-8">Turnos de Hoy</h2>
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
          {collection
            .filter(
              (item) =>
                item.professional.includes(user.fullname) &&
                item.date.split("T")[0] === fechaDeHoy
            ) // Filtra los elementos que cumplen la condición de hoy
            .map((item) => (
              <div key={item._id}>
                <TurnoConfirmado item={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
