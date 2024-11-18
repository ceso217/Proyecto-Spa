import { useEffect, useState } from "react";
import { corinthia, cormorant, montserrat } from "@/app/ui/fonts";

export default function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // Evita que el navegador muestre el mensaje predeterminado
      event.preventDefault();
      setDeferredPrompt(event);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Usuario instaló la PWA");
        } else {
          console.log("Usuario canceló la instalación");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <>
      {isInstallable && (
        <div className="bg-orange-100 flex justify-center items-center text-lg text-center" style={montserrat.style}>
          <div className="flex flex-col justify-evenly items-center h-[350px] w-[700px] bg-orange-50 my-16 rounded-2xl p-4">
            <h2 className="text-6xl text-green-services-300" style={cormorant.style}>Conseguí nuestra App!</h2>
            <p>Podes descargar nuestra app acá mismo!</p>
            <button
              onClick={handleInstallClick}
              className="px-4 py-2 bg-green-services-200 text-white rounded-3xl transition hover:-translate-y-1 shadow-lg"
            >
              Instalar App
            </button>
          </div>
        </div>
      )}
    </>
  );
}
