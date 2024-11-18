"use client";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import axios from "axios";
import { useSession } from "next-auth/react"
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function TurnoConfirmar({ item }) {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [collection, setCollection] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/servicios");
      setCollection(response.data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      console.error("Error fetching collection:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Solo se ejecuta al montar el componente

  const servicioFiltrado = collection.find((item2) => item2.titulo === item.service);

  //método para guardar el pago del turno
  const handleGuardarPago = async (method) => {
    try {
      await axios.post("/api/pagos", {
        monto: servicioFiltrado.precio / 100,
        cliente: user?.fullname,
        correo: user?.email,
        servicio: item.service,
        metodoPago: method, //Guarda el método de pago seleccionado (debito o credito)
        fecha: new Date().toISOString().replace("T", " ").substring(0, 19),
      });
    } catch (error) {
      console.error("Error al guardar el pago:", error);
      alert("Hubo un error al guardar el pago. Intenta de nuevo.");
    }
  };

  const handleActualizarPagado = async () => {
    try {
      await axios.patch(`/api/dates/${item._id}`, {
        pay: true,
      });
    } catch (error) {
      console.error("Error al reservar el horario:", error);
      alert("Hubo un error al reservar el horario. Intenta de nuevo.");
    }
  };

  const handleMethodSelection = async (method) => {
    setSelectedMethod(method);
    setShowPaymentPopup(false);
    handleActualizarPagado();
    await handleGuardarPago(method); //pasar el método de pago seleccionado
    await handleCheckout(servicioFiltrado);
  };

  //método para rediccionar al link de pago
  const handleCheckout = async (servicio) => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ servicio }),
      });

      const data = await response.json();
      if (response.ok) {
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({ sessionId: data.id });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al procesar el pago.");
    }
  };

  return (
    <div className="flex text-sm md:text-lg items-center p-4 bg-white shadow break-words hyphens-auto text-center">
      <div className="w-1/5 text-center">
        <p>{item.service}</p>
      </div>
      <div className="w-1/5 text-center">
        <p>{format(new Date(item.date), "dd/MM/yyyy")}</p>
      </div>
      <div className="w-1/5 text-center">
        <p>{format(new Date(item.date), "HH:mm")}</p>
      </div>
      <div className="w-1/5 text-center">
        <p>{item.professional}</p>
      </div>
      <div className="w-1/5 flex justify-evenly">
        <button
          onClick={() => setShowPaymentPopup(true)}
          className="bg-green-500 text-white w-28 mt-2 md:px-2 md:py-1 rounded-3xl text-sm md:text-lg transition-transform duration-200 hover:scale-105"
        >
          Pagar
        </button>
        {/* Popup */}
        {showPaymentPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg shadow-lg relative">
              <button
                onClick={() => setShowPaymentPopup(false)}
                className="absolute top-2 right-2 text-gray-700 font-bold text-xl"
              >
                ✖
              </button>
              <h2 className="text-2xl font-semibold mb-4">Seleccione el método de pago</h2>
              <button
                onClick={() => handleMethodSelection("Credito")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
              >
                Tarjeta de Crédito
              </button>
              <button
                onClick={() => handleMethodSelection("Debito")}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Tarjeta de Débito
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
