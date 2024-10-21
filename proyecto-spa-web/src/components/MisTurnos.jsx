import React from "react";
import { format } from "date-fns";

export default function TurnoConfirmado({ item }) {
  return (
    <div className="flex p-4 bg-white shadow text-center">
      <div className="w-1/3">
        <p>{item.service}</p>
      </div>
      <div className="w-1/3">
        <p>{format(new Date(item.date), "dd/MM/yyyy")}</p>
      </div>
      <div className="w-1/3">
        <p>{format(new Date(item.date), "HH:mm")}</p>
      </div>
    </div>
  );
}
