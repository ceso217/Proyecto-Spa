import React from "react";
import axios from "axios";

export default function DateCard({ date, onDelete }) {
  const handleDelete = async () => {
    if (confirm("¿Estás seguro de que quieres eliminar este elemento?")) {
      try {
        await onDelete(date._id); // Llama a la función onDelete pasada como prop
      } catch (error) {
        console.error("Error deleting element:", error);
        alert("Error al eliminar el elemento.");
      }
    }
  };

  return (
    <div className="mx-auto ">
      <p>Servicio: {date.service}</p>
      <p>Fecha: {date.date}</p>
      <div className="flex">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white mt-2 px-2 py-1 rounded-3xl text-base"
        >
          Cancelar turno
        </button>
      </div>
    </div>
  );
}
