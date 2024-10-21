import React from "react";
import { format } from "date-fns";

export default function TurnoRechazado({ item }) {
  return (
    <div className="flex p-4 bg-white shadow text-center">
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
        <p>{item.rejectedReason}</p>
      </div>
    </div>
  );
}
