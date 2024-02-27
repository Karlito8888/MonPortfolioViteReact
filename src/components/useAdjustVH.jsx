import { useEffect } from "react";

export function useAdjustVH() {
  useEffect(() => {
    const adjustVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Ajuster la hauteur au chargement et au redimensionnement de la fenêtre
    window.addEventListener("resize", adjustVH);
    window.addEventListener("load", adjustVH);

    // Ajustement initial
    adjustVH();

    // Nettoyer les écouteurs d'événements lors du démontage
    return () => {
      window.removeEventListener("resize", adjustVH);
      window.removeEventListener("load", adjustVH);
    };
  }, []);
}
