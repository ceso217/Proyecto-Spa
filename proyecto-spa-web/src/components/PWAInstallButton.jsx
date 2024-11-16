import { useEffect, useState } from "react";

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
        <button
          onClick={handleInstallClick}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Instalar App
        </button>
      )}
    </>
  );
}
