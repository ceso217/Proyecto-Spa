"use client";
import React from "react";
import { cormorant, montserrat } from "@/app/ui/fonts";
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import axios from "axios";
import PagosComp from "@/components/PagosComp";
import { jsPDF } from "jspdf";  // Importa jsPDF
import "jspdf-autotable"; // Importa la extensión para tablas
import { format } from "date-fns";

export default function Pagos() {
  const [collection, setCollection] = useState([]);

  // Definimos fetchData fuera del useEffect para que sea accesible globalmente en el componente
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/pagos");
      setCollection(response.data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      console.error("Error fetching collection:", error);
    }
  };

  // useEffect para cargar los datos cuando el componente se monta
  useEffect(() => {
    fetchData(); // Llamada inicial para obtener los datos
  }, []);

  // Función para generar el PDF
  const generarPDF = () => {
    const doc = new jsPDF();

    // Título del PDF
    doc.setFontSize(18);
    doc.text("Resumen de Pagos", 14, 22);

    // Generar tabla
    const tableColumn = ["Cliente", "Correo", "Servicio", "Pago", "Fecha de pago"];
    const tableRows = [];

    // Insertar datos en el PDF
    collection.forEach(item => {
      const pagoData = [
        item.cliente,
        item.correo,
        item.servicio,
        `$${item.monto}`, // Formato de pago en dólares
        format(new Date(item.fecha), "dd/MM/yyyy") + "  " + format(new Date(item.fecha), "HH:mm")
      ];
      tableRows.push(pagoData);
    });

    // Agregar tabla al PDF
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      theme: 'grid',
      headStyles: { fillColor: [22, 160, 133] },  // Color verde
    });

    // Descargar el PDF
    doc.save("resumen_pagos.pdf");
  };

  return (
    <div className="w-full h-auto bg-orange-50 p-2" style={montserrat.style}>
      <div className="m-4 flex flex-col items-center">
        <h1
          className="text-7xl mt-10 text-green-services-300"
          style={cormorant.style}
        >
          Pagos
        </h1>

        <div className="w-full py-16 text-center">
          <div className="flex p-4 bg-orange-100 shadow rounded-t">
            <div className="w-1/5">
              <p>Cliente</p>
            </div>
            <div className="w-1/5">
              <p>Correo</p>
            </div>
            <div className="w-1/5">
              <p>Servicio</p>
            </div>
            <div className="w-1/5">
              <p>Pago</p>
            </div>
            <div className="w-1/5">
              <p>Fecha de pago</p>
            </div>
          </div>

          {/* Renderizar los componentes de la colección */}
          {collection.map((item) => (
            <div key={item._id}>
              <PagosComp item={item} />
            </div>
          ))}

          {/* Botón para descargar el resumen en PDF */}
          <button
            onClick={generarPDF}
            className="mt-6 bg-green-services-300 text-white px-4 py-2 rounded"
          >
            Descargar Resumen
          </button>
        </div>
      </div>
    </div>
  );
}
