import React, { useEffect, useState } from "react";

const PedirTurnoModal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false); // Controla visibilidad real
  const [shouldRender, setShouldRender] = useState(false); // Controla si se renderiza

  // Activar visibilidad cuando se abre
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 10); // Inicia la animación
    } else {
      setIsVisible(false); // Oculta con transición
      setTimeout(() => setShouldRender(false), 200); // Elimina del DOM tras animación
    }
  }, [isOpen]);

  if (!shouldRender) return null; // No renderiza si no debe

  return (
    <div className="fixed inset-0 bg-black bg-opacity-35 flex justify-center items-center z-50 text-center">
      <div
        className={`w-[500px] h-auto bg-orange-50 p-6 rounded-lg shadow-lg transform transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
      >
        <button className="text-red-500 text-lg float-right" onClick={onClose}>
          ✖
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default PedirTurnoModal;
