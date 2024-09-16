// components/Carousel.jsx

"use client"
import { useState } from 'react';

const images = [
  "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
  "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg",
  "https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg",
  "https://images.pexels.com/photos/6629557/pexels-photo-6629557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6724402/pexels-photo-6724402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <img 
          src={images[currentIndex]} 
          alt={`Image ${currentIndex}`} 
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Botón Anterior */}
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
        &#8592;
      </button>

      {/* Botón Siguiente */}
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
        &#8594;
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)} 
            className={`mx-2 w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
