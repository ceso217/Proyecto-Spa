import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <p className="text">REFLECT BOX</p>
      <button></button>
      <Image
        src="/flor.svg"
        alt="Descripción de la imagen"
        width={250}
        height={250}
      />
    </div>
  );
}

