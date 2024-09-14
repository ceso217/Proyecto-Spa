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
            imageSrc="https://i.imgur.com/lmYYa2s.png"
            title="Papież gigant"
            location="New York"
            description="Częstochowski pomnik Jana Pawła II wyjątkowo interesująco wpisuje się w poprzemysłowy krajobraz tego miasta."
          />
          <CardNotice
            imageSrc="https://i.imgur.com/csPYilq.png"
            title="Papież gigant"
            location="New York"
            description="Powstały w 2013 roku, uchodzi za najwyższego Karola Wojtyłę w Polsce."
          />
          <CardNotice
            imageSrc="https://i.imgur.com/chvO4cX.png"
            title="Papież gigant"
            location="New York"
            description="Częstochowski pomnik Jana Pawła II wyjątkowo interesująco wpisuje się w poprzemysłowy krajobraz tego miasta."
          />
        </div>
      </div>
    </div>
  );
}

export default Notice;