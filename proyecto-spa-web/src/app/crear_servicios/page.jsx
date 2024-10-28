"use client";
import React, { useState } from "react";
import axios from "axios"; // Asegúrate de importar axios
import Image from "next/image";
import { useSession } from "next-auth/react";
import { cormorant, montserrat } from "@/app/ui/fonts";

const CrearServicio = () => {
  const { data: session } = useSession();
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [tipo, setTipo] = useState("Elige una opción");
  const [precio, setPrecio] = useState("");
  const [profesional, setProfesional] = useState("Elige una opción");

  const handleCrearServicio = async (e) => {
    e.preventDefault();

    if (!titulo || !imagen || !tipo || !precio || !profesional) {
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
        professional: profesional,
      });

      if (response.status === 201) {
        alert(`Servicio creado: ${titulo}`);
        // Resetea el formulario
        setTitulo("");
        setImagen("");
        setTipo("");
        setPrecio("");
        setProfesional("");
      }
    } catch (error) {
      console.error("Error al crear el servicio:", error);
      alert("Hubo un error al crear el servicio. Intenta de nuevo.");
    }
  };

  const handleChangeTipo = (event) => {
    setTipo(event.target.value);
  };

  const handleChangeProfesional = (event) => {
    setProfesional(event.target.value);
  };

  return (
    <div className="h-screen bg-orange-100 flex justify-center items-center text-lg" style={montserrat.style}>
      <div className="bg-orange-50 w-1/2 py-6 px-7 rounded-xl shadow-lg">
        <h2 className="font-bold mb-10 text-center text-7xl text-green-services-300" style={cormorant.style}>Agregar nuevo Servicio</h2>
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
            Profesional a cargo:
            <select
              id="options"
              value={profesional}
              onChange={handleChangeProfesional}
              className="w-56 p-2 mx-2 border rounded"
            >
              <option value="Elige una opción" disabled>Elige una opción</option>
              <option value="Dra. Ana Felicidad">Dra. Ana Felicidad</option>
              <option value="Dra. Florinda">Dra. Florinda</option>
              <option value="Dr. Franco Colapinto">Dr. Franco Colapinto</option>
            </select>
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
            <select
              id="options"
              value={tipo}
              onChange={handleChangeTipo}
              className="w-60 p-2 mx-2 border rounded"
            >
              <option value="Elige una opción" disabled>
                Elige una opción
              </option>
              <option value="Masaje">Masajes</option>
              <option value="Belleza">Belleza</option>
              <option value="Tratamientos faciales">Tratamientos faciales</option>
              <option value="Tratamientos corporales">Tratamientos corporales</option>
            </select>
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
            className="bg-green-services-300 text-white font-bold py-3 px-4 rounded-3xl w-1/2 mx-auto transition hover:-translate-y-1"
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
    </div>
  );
};

export default CrearServicio;
