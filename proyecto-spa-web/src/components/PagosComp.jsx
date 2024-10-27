import React from "react";
import { format } from "date-fns";

export default function PagosComp({ item }) {
  return (
    <div className="flex p-4 bg-white shadow text-center">
      <div className="w-1/5">
        <p>{item.cliente}</p>
      </div>
      <div className="w-1/5">
        <p>{item.correo}</p>
      </div>
      <div className="w-1/5">
        <p>{item.servicio}</p>
      </div>
      <div className="w-1/5">
        <p>${item.monto}</p> {/* Si el monto está en centavos */}
      </div>
      <div className="w-1/5">
        <p>{item.metodoPago}</p> {/* Si el monto está en centavos */}
      </div>
      <div className="w-1/5">
        <p>{format(new Date(item.fecha), "dd/MM/yyyy")}</p>
      </div>
    </div>
  );
}