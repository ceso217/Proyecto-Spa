"use client";
import React, { useState } from "react";
import axios from "axios"; // Asegúrate de importar axios
import Image from "next/image";
import { useSession } from "next-auth/react";

const CrearServicio = () => {
  const { data: session } = useSession();
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [tipo, setTipo] = useState("");
  const [precio, setPrecio] = useState("");

  const handleCrearServicio = async (e) => {
    e.preventDefault();

    if (!titulo || !imagen || !tipo || !precio) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      // Hacer una petición POST a la API para crear el servicio
      const response = await axios.post("/api/servicios", {
        titulo: titulo,
        imagen: imagen,
        tipo: tipo,
        precio: parseFloat(precio) * 100, // Convertir a centavos
      });

      if (response.status === 201) {
        alert(`Servicio creado: ${titulo}`);
        // Resetea el formulario
        setTitulo("");
        setImagen("");
        setTipo("");
        setPrecio("");
      }
    } catch (error) {
      console.error("Error al crear el servicio:", error);
      alert("Hubo un error al crear el servicio. Intenta de nuevo.");
    }
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-4">Crear Servicio</h2>
      <form onSubmit={handleCrearServicio} className="flex flex-col">
        <label className="mb-2">
          Título:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded-lg w-full mb-4"
            required
          />
        </label>

        <label className="mb-2">
          Imagen URL:
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded-lg w-full mb-4"
            required
          />
        </label>

        <label className="mb-2">
          Tipo de Servicio:
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded-lg w-full mb-4"
            required
          />
        </label>

        <label className="mb-2">
          Precio (en ARS):
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded-lg w-full mb-4"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Crear Servicio
        </button>
      </form>

      {imagen && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Vista previa de la imagen:</h3>
          <Image
            src={imagen}
            width={300} // Ajusta según necesites
            height={200} // Ajusta según necesites
            alt={titulo}
            className="mt-2 rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default CrearServicio;
