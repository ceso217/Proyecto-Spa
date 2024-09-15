import React from "react";
import Image from "next/image";
import { corinthia, montserrat } from "../app/ui/fonts";

export function ServiciosArticulo({
  titulo,
  imagen,
  ancho,
  alto,
  texto,
  color,
  reverse = false,
}) {
  const isReverse = reverse ? "flex-row-reverse" : "";
  return (
    <div className={color} style={montserrat.style}>
      <h3 className="text-center text-3xl pt-6 ">{titulo}</h3>
      <article
        className={
          "flex justify-items-center items-center p-10 text-2xl h-96 text-center " +
          isReverse
        }
      >
        <Image
          className="rounded-lg"
          src={imagen}
          alt="imagen"
          width={ancho}
          height={alto}
        />
        <aside className={`flex flex-col place-content-between`}>
          <p className="self-center px-10">{texto}</p>
        </aside>
      </article>
    </div>
  );
}
