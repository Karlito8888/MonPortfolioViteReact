import React, { useEffect, useRef } from "react";

const Mouse = () => {
  const cursorRef = useRef(null); // Utilisation de useRef pour stocker la référence du curseur

  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = e.y + "px";
        cursorRef.current.style.left = e.x + "px";
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);

    const addHoverEffect = (link) => {
      link.addEventListener("mouseover", () => {
        cursorRef.current?.classList.add("hovered");
      });

      link.addEventListener("mouseleave", () => {
        if (cursorRef.current) {
          cursorRef.current.style.transition = ".3s ease-out";
          cursorRef.current.classList.remove("hovered");
        }
      });
    };

    document.querySelectorAll(".hover").forEach(addHoverEffect);

    // Nettoyage en retournant une fonction
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.querySelectorAll(".hover").forEach((link) => {
        link.removeEventListener("mouseover", () =>
          cursorRef.current?.classList.add("hovered")
        );
        link.removeEventListener("mouseleave", () => {
          if (cursorRef.current) {
            cursorRef.current.style.transition = ".2s ease-out";
            cursorRef.current.classList.remove("hovered");
          }
        });
      });
    };
  }, []);

  return <span ref={cursorRef} className="cursor"></span>; // Utiliser ref ici
};

export default Mouse;
