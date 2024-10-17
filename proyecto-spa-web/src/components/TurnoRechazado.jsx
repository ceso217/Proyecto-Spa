import React from "react";

export default function TurnoRechazado({ item }) {
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
        <p>{item.rejectedReason}</p>
      </div>
    </div>
  );
}
