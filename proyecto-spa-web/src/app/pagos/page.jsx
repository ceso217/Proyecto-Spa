"use client";
import React, { useState, useEffect } from "react";
import { cormorant, montserrat } from "@/app/ui/fonts";
import axios from "axios";
import PagosComp from "@/components/PagosComp";
import { jsPDF } from "jspdf";  
import "jspdf-autotable";


export default function Pagos() {
  const [collection, setCollection] = useState([]);
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/pagos");
      setCollection(response.data);
      setFilteredCollection(response.data); // Inicialmente, mostrar todos los pagos
    } catch (error) {
      console.error("Error fetching collection:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  


  

  //filtra por fecha de inicio y fin...con algunos problemitas
  const filtrarPorFecha = () => {
    const filtered = collection.filter((item) => {
      const fechaPago = new Date(item.fecha.split('/').reverse().join('-')); // Convertir la fecha de pago a un objeto Date
      const start = startDate ? new Date(startDate.split('/').reverse().join('-')) : null; // Convertir la fecha de inicio a un objeto Date
      const end = endDate ? new Date(endDate.split('/').reverse().join('-')) : null; // Convertir la fecha de fin a un objeto Date
  
      // Ajustar la hora de fin para incluir todo el día
      if (end) {
        end.setHours(23, 59, 59, 999);
      }
  
      // Set the start date to 00:00:00
      if (start) {
        start.setHours(0, 0, 0, 0);
      }
  
      // Comprobar si se debe filtrar por startDate y endDate
      let isValidDate = true;
  
      if (start && end) {
        // Si las fechas de inicio y fin son iguales, comparar solo si son iguales a fechaPago
        if (start.getTime() === end.getTime()) {
          isValidDate = fechaPago.getTime() === start.getTime(); // Exact match
        } else {
          // Si las fechas son diferentes, comprobar rango
          isValidDate = fechaPago >= start && fechaPago <= end;
        }
      } else if (start) {
        isValidDate = fechaPago >= start; // Si solo hay start
      } else if (end) {
        isValidDate = fechaPago <= end; // Si solo hay end
      }
  
      return isValidDate; // Filtrar solo si la fecha es válida
    });
  
    setFilteredCollection(filtered);
  };
  


  

  const generarPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Resumen de Pagos", 14, 22);

    const tableColumn = ["Cliente", "Correo", "Servicio", "Pago", "Fecha de pago"];
    const tableRows = [];

    filteredCollection.forEach(item => {
      const pagoData = [
        item.cliente,
        item.correo,
        item.servicio,
        `$${item.monto}`,
        item.fecha
      ];
      tableRows.push(pagoData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      theme: 'grid',
      headStyles: { fillColor: [22, 160, 133] },
    });

    doc.save("resumen_pagos.pdf");
  };

  return (
    <div className="w-full h-auto bg-orange-50 p-2" style={montserrat.style}>
      <div className="m-4 flex flex-col items-center">
        <h1 className="text-7xl mt-10 text-green-services-300" style={cormorant.style}>
          Pagos
        </h1>

        <div className="flex space-x-4 mb-4">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 border rounded"
          />
          <button
            onClick={filtrarPorFecha}
            className="bg-green-services-300 text-white px-4 py-2 rounded"
          >
            Filtrar por Fecha
          </button>
        </div>

        <div className="w-full py-16 text-center">
          <div className="flex p-4 bg-orange-100 shadow rounded-t">
            <div className="w-1/5"><p>Cliente</p></div>
            <div className="w-1/5"><p>Correo</p></div>
            <div className="w-1/5"><p>Servicio</p></div>
            <div className="w-1/5"><p>Pago</p></div>
            <div className="w-1/5"><p>Fecha de pago</p></div>
          </div>

          {/* Renderizar los componentes de la colección filtrada */}
          {filteredCollection.map((item) => (
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
