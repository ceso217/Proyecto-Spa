import React from "react";
import { format } from "date-fns";

export default function TurnoConfirmado({ item }) {
  return (
    <div className="flex text-sm md:text-lg items-center p-4 bg-white shadow text-center break-words hyphens-auto">
      <div className="w-1/4">
        <p>{item.service}</p>
      </div>
      <div className="w-1/4">
        <p>{format(new Date(item.date), "dd/MM/yyyy")}</p>
      </div>
      <div className="w-1/4">
        <p>{format(new Date(item.date), "HH:mm")}</p>
      </div>
      <div className="w-1/4">
        <p>{item.professional}</p>
      </div>
    </div>
  );
}
