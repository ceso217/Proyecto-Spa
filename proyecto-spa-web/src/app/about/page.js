import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <p className="text-lg font-semibold text-gray-700 leading-relaxed">
        REFLECT BOX
      </p>
      <button>Soy un boton</button>
      <Image
        src="/flor.svg"
        alt="Descripción de la imagen"
        width={250}
        height={250}
      />
    </div>
  );
}
