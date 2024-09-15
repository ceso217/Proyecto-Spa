import React from "react";
import CardNotice from "@/components/CardNotice";

const Notice = () => {
  return (
    <div className="min-h-screen bg-customBackground flex justify-center items-center py-20">
      <div className="container mx-auto p-12 bg-gray-100 rounded-xl">
        <h1 className="text-4xl uppercase font-bold from-current mb-8">
          Ultimas Noticias
        </h1>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
          <CardNotice
            imageSrc="https://images.pexels.com/photos/3101547/pexels-photo-3101547.jpeg?auto=compress&cs=tinysrgb&w=600"
            title= "Renovación Holística: El spa ‘Sentirse Bien’ inaugura su nueva ala de terapias alternativas"
            location="Local"
            description="El spa ‘Aguas Serenas’ ha abierto una nueva sección dedicada a terapias alternativas, incluyendo acupuntura, reiki y baños de sonido. Esta renovación busca ofrecer a los clientes una experiencia de bienestar integral."
          />
          <CardNotice
            imageSrc="https://images.pexels.com/photos/67721/pexels-photo-67721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Nuevos productos de gran calidad ingresan a nuestro local esta temporada"
            location="Productos"
            description="Nuevos productos ingresan a nuestro spa que aportarán mejores beneficios para que te encuentres con un ambiente renovador, no te los podes perder!."
          />
          <CardNotice
            imageSrc="https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="5 de las mejores cremas para el cuidado de la piel"
            location="Recomendaciones"
            description="Hoy te recomendamos 5 de los mejores productos disponibles para mantener tu piel suave y saludable. No te podes perder de este top 5 sabras lo que realmente hace bien a tu piel."
          />
        </div>
      </div>
    </div>
  );
}

export default Notice;