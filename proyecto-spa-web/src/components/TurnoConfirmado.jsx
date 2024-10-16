import React from "react";

export default function TurnoConfirmado({ item }) {
  return (
    <div className="flex p-4 bg-white shadow text-center">
      <div className="w-1/5">
        <p>{item.client}</p>
      </div>
      <div className="w-1/5">
        <p>{item.service}</p>
      </div>
      <div className="w-1/5">
        <p>{item.date}</p>
      </div>
      <div className="w-1/5">
        <p>{item.time}</p>
      </div>
      <div className="w-1/5">
        <p>{item.professional}</p>
      </div>
    </div>
  );
}
