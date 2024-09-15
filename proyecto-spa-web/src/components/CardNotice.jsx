import { montserrat, cormorant } from "@/app/ui/fonts";
import React from "react";

export default function CardNotice({ imageSrc, title, location, description }) {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 rounded-md">
      <div>
        <img className="w-full h-64 object-cover" src={imageSrc} alt={title} />
        <div className="px-4 py-2">
          <h1
            className="text-xl font-gray-700 font-bold"
            style={montserrat.style}
          >
            {title}
          </h1>
          <div className="flex space-x-2 mt-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <h3 className="text-lg text-gray-600 font-semibold mb-2">
              {location}
            </h3>
          </div>
          <p className="text-sm tracking-normal" style={montserrat.style}>
            {description}
          </p>
          <button className="mt-12 w-full text-center text-orange-50 bg-green-services-300 py-2 rounded-lg hover:no-underline ">
            Leer más
          </button>
        </div>
      </div>
    </div>
  );
}
