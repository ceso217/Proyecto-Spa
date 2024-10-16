"use client";
import React, { useState } from "react";

export default function TurnoConfirmar({ item }) {
  const [profesional, setProfesional] = useState("");

  const handleChange = (event) => {
    setProfesional(event.target.value);
  };

  const actualizarTurno = async () => {
    try {
      // Hacer una petición POST a la API para guardar la fecha y el servicio
      const response = await axios.patch(`/api/dates/${id}`, {
        service: titulo,
        date: fecha,
        user: user?.username, // Asigna el usuario que pidió el turno
        client: user?.fullname,
        time: "18:00",
        professional: "Dr. Felicidad",
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
    <div className="flex p-4 bg-white shadow text-center">
      <div className="w-1/6">
        <p>{item.client}</p>
      </div>
      <div className="w-1/6">
        <p>{item.service}</p>
      </div>
      <div className="w-1/6">
        <p>{item.date}</p>
      </div>
      <div className="w-1/6">
        <p>{item.time}</p>
      </div>
      <div className="w-1/6">
        <select
          id="options"
          value={profesional}
          onChange={handleChange}
          className="w-48 p-2 border rounded"
        >
          <option value="" disabled>
            Elige una opción
          </option>
          <option value="opcion1">Dra. Ana Felicidad</option>
          <option value="opcion2">Dra. Florinda</option>
          <option value="opcion3">Dr. Franco Colapinto</option>
        </select>
      </div>
      <div className="w-1/6 flex justify-evenly">
        <button
          onClick={() => actualizarTurno(item._id)}
          className="bg-green-500 text-white w-28 mt-2 px-2 py-1 rounded-3xl text-base"
        >
          Aceptar
        </button>
        <button
          onClick={() => actualizarTurno(item._id)}
          className="bg-red-500 text-white w-28 mt-2 px-2 py-1 rounded-3xl text-base"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}

{
  /* <select
        id="options"
        value={profesional}
        onChange={handleChange}
        className="w-10 p-2 border rounded"
      >
        <option value="" disabled>
          Elige una opción
        </option>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
        <option value="opcion4">Opción 4</option>
      </select>
      <button
        onClick={() => actualizarTurno(item._id)}
        className="bg-red-500 text-white mt-2 px-2 py-1 rounded-3xl text-base"
      > */
}
