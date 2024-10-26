"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { cormorant, montserrat } from "../ui/fonts";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import PedirTurnoModal from "@/components/PedirTurnoModal";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const ServiciosArticulo = ({ item, ancho, alto }) => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [fecha, setFecha] = useState("");
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fecha actual
  const hoy = new Date();
  const año = hoy.getFullYear();
  const mes = (hoy.getMonth() + 1).toString().padStart(2, '0'); // Mes comienza en 0, así que sumamos 1
  const dia = hoy.getDate().toString().padStart(2, '0');

  // Crear una nueva fecha sumando un mes
  const unMesDesdeHoy = new Date(hoy);
  unMesDesdeHoy.setMonth(hoy.getMonth() + 1); // Aquí usamos hoy.getMonth() en lugar de mes

  // Formato de la fecha de hoy en ISO (YYYY-MM-DD)
  const fechaHoyISO = `${año}-${mes}-${dia}`;

  // Obtener la fecha un mes después
  const nuevoAño = unMesDesdeHoy.getFullYear();
  const nuevoMes = (unMesDesdeHoy.getMonth() + 1).toString().padStart(2, '0'); // Asegura que tenga dos dígitos
  const nuevoDia = unMesDesdeHoy.getDate().toString().padStart(2, '0');

  // Formato de la fecha un mes después en ISO (YYYY-MM-DD)
  const fechaUnMesISO = `${nuevoAño}-${nuevoMes}-${nuevoDia}`;

  console.log("Fecha de hoy:", fechaHoyISO); // Ejemplo: "2024-10-26"
  console.log("Fecha un mes después:", fechaUnMesISO); // Ejemplo: "2024-11-26"

  // comprueba que día es
  const diaSemana = new Date(fecha).getDay();

  //
  const fechaSeleccionada = fecha !== "";

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
      await axios.post("/api/pagos", {
        monto: item.precio / 100,
        cliente: user?.fullname,
        correo: user?.email,
        servicio: item.titulo,
        fecha: new Date().toISOString().replace("T", " ").substring(0, 19),
      });
    } catch (error) {
      console.error("Error al guardar el pago:", error);
      alert("Hubo un error al guardar el pago. Intenta de nuevo.");
    }
  };

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

  const handlePedirTurnoClick = () => {
    if (!fecha) {
      alert("Por favor selecciona una fecha.");
      return;
    }
    setShowConfirmPopup(true);
  };

  const handleConfirmSelection = (confirm) => {
    setShowConfirmPopup(false);
    if (confirm) {
      setShowPaymentPopup(true);
    }
  };

  const handleMethodSelection = async (method) => {
    setSelectedMethod(method);
    setShowPaymentPopup(false);
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
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="p-2 rounded-lg border-2 border-black text-center bg-green-100 mx-5"
            />
          </div>
          <button
            // onClick={handlePedirTurnoClick}
            onClick={openModal}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full"
          >
            Pedir turno
          </button>
          <PedirTurnoModal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className="text-xl font-bold mb-4">
              Selecciona tu turno!
            </h2>
            <label className="pr-3">Día:</label>
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} min={fechaHoyISO} max={fechaUnMesISO} className="border border-black rounded-xl p-2 mt-6 mb-10" />
            <h3>Turnos disponibles:</h3>

            {fechaSeleccionada ? (
              diaSemana === 5 || diaSemana === 6 ? (  // 5 = Sábado, 6 = Domingo
                <p className="text-sm p-2 mt-6 mb-10">No abrimos fines de semana ):</p>
              ) : (
                <select name="Turnos disponibles" className="border border-black rounded-xl p-2 mt-4 mb-10">
                  <option value="8">8:00</option>
                  <option value="9">9:00</option>
                  <option value="10">10:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                </select>
              )
            ) : (
              <p className="text-sm p-2 mt-6 mb-10">Por favor, selecciona una fecha.</p>
            )}
            <div className="flex justify-evenly">
              {/* <button
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
              </button> */}
            </div>
          </PedirTurnoModal>
        </div>
      ) : null
      }

      {
        showConfirmPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg shadow-lg relative">
              <button
                onClick={() => setShowConfirmPopup(false)}
                className="absolute top-2 right-2 text-gray-700 font-bold text-xl"
              >
                ×
              </button>
              <h2 className="text-2xl font-semibold mb-4">¿Desea pagar ahora?</h2>
              <button
                onClick={() => handleConfirmSelection(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
              >
                Sí
              </button>
              <button
                onClick={() => handleConfirmSelection(false)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                No
              </button>
            </div>
          </div>
        )
      }

      {
        showPaymentPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg shadow-lg relative">
              <button
                onClick={() => setShowPaymentPopup(false)}
                className="absolute top-2 right-2 text-gray-700 font-bold text-xl"
              >
                ×
              </button>
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
        )
      }
    </div >
  );
};

export default function Page() {
  const [collection, setCollection] = useState([]);
  const prueba = new Date("2024-10-26T03:00:00Z")
  console.log(prueba)
  prueba.setHours(16)
  console.log(prueba)

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
    <div className="bg-orange-100 text-green-services-300" style={montserrat.style}>
      <h3 className="text-7xl text-center text-green-services-300 font-mono pt-8 pb-4 " style={cormorant.style}>
        Servicios
      </h3>

      <div className="text-6xl flex-col text-center pt-7 font-bold " style={cormorant.style}>
        Masajes
      </div>
      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
        {collection
          .filter((item) => item.tipo === "Masaje")
          .map((item) => (
            <div key={item._id}>
              <ServiciosArticulo item={item} ancho={500} alto={300} />
            </div>
          ))}
      </div>

      <h2 className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 " style={cormorant.style}>
        Belleza
      </h2>

      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
        {collection
          .filter((item) => item.tipo === "Belleza")
          .map((item) => (
            <div key={item._id}>
              <ServiciosArticulo item={item} ancho={500} alto={300} />
            </div>
          ))}
      </div>

      <div className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 " style={cormorant.style}>
        Tratamientos Faciales
      </div>

      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
        {collection
          .filter((item) => item.tipo === "Tratamientos faciales")
          .map((item) => (
            <div key={item._id}>
              <ServiciosArticulo item={item} ancho={500} alto={300} />
            </div>
          ))}
      </div>
      <div className="bg-orange-100 text-green-services-300 text-6xl flex-col text-center py-3 " style={cormorant.style}>
        Tratamientos Corporales
      </div>

      <div className="grid grid-cols-3 gap-4 p-10 bg-orange-100">
        {collection
          .filter((item) => item.tipo === "Tratamientos corporales")
          .map((item) => (
            <div key={item._id}>
              <ServiciosArticulo item={item} ancho={500} alto={300} />
            </div>
          ))}
      </div>
    </div>
  );
}
