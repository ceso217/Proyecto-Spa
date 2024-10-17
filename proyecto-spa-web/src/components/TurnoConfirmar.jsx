"use client";
import React, { useState } from "react";
import Modal from "../components/Modal";

export default function TurnoConfirmar({ item, onUpdate }) {
  const [profesional, setProfesional] = useState("Elige una opción");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [motivoRechazo, setMotivoRechazo] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (event) => {
    setProfesional(event.target.value);
  };

  const handleUpdate = async (currentStatus) => {
    try {
      await onUpdate(item._id, profesional, currentStatus, motivoRechazo); // Llama a la función onUpdate pasada como prop
    } catch (error) {
      console.error("Error updating element:", error);
      alert("Error al actualizar el elemento.");
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
          <option value="Elige una opción" disabled>
            Elige una opción
          </option>
          <option value="Dra. Ana Felicidad">Dra. Ana Felicidad</option>
          <option value="Dra. Florinda">Dra. Florinda</option>
          <option value="Dr. Franco Colapinto">Dr. Franco Colapinto</option>
        </select>
      </div>
      <div className="w-1/6 flex justify-evenly">
        <button
          onClick={() => handleUpdate("aceptar")}
          className="bg-green-500 text-white w-28 mt-2 px-2 py-1 rounded-3xl text-base transition-transform duration-200 hover:scale-105"
        >
          Aceptar
        </button>
        <button
          onClick={openModal}
          className="bg-red-500 text-white w-28 mt-2 px-2 py-1 rounded-3xl text-base transition-transform duration-200 hover:scale-105"
        >
          Rechazar
        </button>
        {/* Ventana modal de rechazar */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-bold mb-4">
            Ingrese el motivo del rechazo
          </h2>
          <textarea
            value={motivoRechazo}
            onChange={(e) => setMotivoRechazo(e.target.value)}
            placeholder="Escriba aquí el motivo"
            className="w-11/12 p-2"
            rows={9}
          ></textarea>
          <div className="flex justify-evenly">
            <button
              onClick={() => {
                handleUpdate("rechazar");
                closeModal();
              }}
              className="bg-green-500 text-white w-28 mt-2 px-2 py-1 rounded-3xl text-base transition-transform duration-200 hover:scale-105"
            >
              Enviar
            </button>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white w-28 mt-2 px-2 py-1 rounded-3xl text-base transition-transform duration-200 hover:scale-105"
            >
              Cancelar
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
