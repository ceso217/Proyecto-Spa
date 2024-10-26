"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { cormorant, montserrat } from "../ui/fonts";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const ServiciosArticulo = ({ item, ancho, alto }) => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [fecha, setFecha] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Estado para mostrar el popup
  const [selectedMethod, setSelectedMethod] = useState(""); // Estado para el método de pago

  const handlePedirTurno = async () => {
    try {
      const response = await axios.post("/api/dates", {
        service: item.titulo,
        date: fecha,
        user: user?.username,
        client: user?.fullname,
        accept: 0,
      });

      if (response.status === 201) {
        alert(`Has pedido un turno para el servicio: ${item.titulo} el ${fecha}`);
      }
    } catch (error) {
      console.error("Error al pedir el turno:", error);
      alert("Hubo un error al pedir el turno. Intenta de nuevo.");
    }
  };

  const handleGuardarPago = async () => {
    try {
      const response = await axios.post("/api/dates", {
        service: item.titulo,
        date: fecha,
        user: user?.username, // Asigna el usuario que pidió el turno
        client: user?.fullname,
        accept: 0,
      });
    } catch (error) {
      console.error("Error al guardar el pago:", error);
      alert("Hubo un error al guardar el pago. Intenta de nuevo.");
    }
  };

  const handleCheckout = async (servicio) => {
    if (!fecha) {
      alert("Por favor selecciona una fecha.");
      return;
    }

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

  const handlePedirTurnoClick = () => {
    if (!fecha) {
      alert("Por favor selecciona una fecha.");
      return;
    }
    setShowPopup(true); // Muestra el popup
  };

  const handleMethodSelection = async (method) => {
    setSelectedMethod(method);
    setShowPopup(false); // Oculta el popup
    await handlePedirTurno();
    await handleGuardarPago();
    await handleCheckout(item);
  };

  return (
    <div className="p-5 bg-orange-50 flex flex-col items-center h-[700px]">
      <h3 className="text-5xl font-bold text-black mb-4 h-[100px]" style={cormorant.style}>
        {item.titulo}
      </h3>

      <Image src={item.imagen} width={ancho} height={alto} alt={item.titulo} className="mb-4" />

      <p className="text-2xl font-semibold text-gray-700 mb-4">
        Precio: ${item.precio / 100}
      </p>

      <div className="flex-grow"></div>

      {session ? (
        <div className="w-full flex justify-between items-end mt-4">
          <div className="flex items-center">
            <p>Fecha de reserva: </p>
            <input
              type="datetime-local"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="p-2 rounded-lg border-2 border-black text-center bg-green-100 mx-5"
            />
          </div>
          <button
            onClick={handlePedirTurnoClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full"
          >
            Pedir turno
          </button>
        </div>
      ) : (
        ""
      )}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Seleccione el método de pago</h2>
            <button
              onClick={() => handleMethodSelection("Tarjeta de Crédito")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
            >
              Tarjeta de Crédito
            </button>
            <button
              onClick={() => handleMethodSelection("Tarjeta de Débito")}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Tarjeta de Débito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/servicios");
        setCollection(response.data);
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div
      className="bg-orange-100 text-green-services-300"
      style={montserrat.style}
    >
      <h3
        className="text-7xl text-center text-green-services-300 font-mono pt-8 pb-4 "
        style={cormorant.style}
      >
        Servicios
      </h3>

      <div
        className="text-6xl flex-col text-center pt-7 font-bold "
        style={cormorant.style}
      >
        Masajes
      </div>
      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
        {collection
          .filter((item) => item.tipo === "Masaje") // Filtra los elementos que cumplen la condición
          .map((item) => (
            <div key={item._id}>
              <ServiciosArticulo item={item} ancho={500} alto={300} />
            </div>
          ))}
      </div>

      <h2
        className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 "
        style={cormorant.style}
      >
        Belleza
      </h2>

      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
        {collection
          .filter((item) => item.tipo === "Belleza") // Filtra los elementos que cumplen la condición
          .map((item) => (
            <div key={item._id}>
              <ServiciosArticulo item={item} ancho={500} alto={300} />
            </div>
          ))}
      </div>

      <div
        className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 "
        style={cormorant.style}
      >
        {" "}
        Tratamientos Faciales
      </div>

      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
        {collection
          .filter((item) => item.tipo === "Tratamientos faciales") // Filtra los elementos que cumplen la condición
          .map((item) => (
            <div key={item._id}>
              <ServiciosArticulo item={item} ancho={500} alto={300} />
            </div>
          ))}
      </div>
      <div
        className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 "
        style={cormorant.style}
      >
        {" "}
        Tratamientos Corporales
      </div>

      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
        {collection
          .filter((item) => item.tipo === "Tratamientos corporales") // Filtra los elementos que cumplen la condición
          .map((item) => (
            <div key={item._id}>
              <ServiciosArticulo item={item} ancho={500} alto={300} />
            </div>
          ))}
      </div>
    </div>
  );
}
