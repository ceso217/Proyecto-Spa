import React from 'react'
import Image from "next/image";


export function ServiciosArticulo({ titulo, imagen, ancho, alto, texto, color, reverse=false }) {
  const isReverse = reverse ? "flex-row-reverse" : "";
  return (
    <article className={"flex p-10 text-2xl " + color +" "+ isReverse} >
      <aside className='flex flex-col items-center'>
        <h3>{titulo}</h3>
        <Image className="img-services"
        src={imagen}
        alt="imagen"
        width={ancho}
        height={alto}
            />
      </aside>
      <p className='self-center px-10'>{texto}</p>
    </article>
  )
}