import React from "react";

export const HomeFeat1 = () => {
  // Función que calcula el parallax de las imágenes

  (function () {
    // Add event listener
    // document.addEventListener("mousemove", parallax);
    const elem = document.querySelectorAll("#newfeats1, #newfeats2");
    elem.forEach((item) => {
      item.addEventListener("mousemove", parallax);
    });
    // Magic happens here
    function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${
        50 - (_mouseY - _h) * 0.001
      }%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.002}% ${
        50 - (_mouseY - _h) * 0.002
      }%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.006}% ${
        50 - (_mouseY - _h) * 0.006
      }%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      e.target.style.backgroundPosition = x;
    }
  })();

  return (
    // Inicio de la sección Gimnasio
    <div className="container mx-auto text-center " id="Elgimnasio">
      {/* Fila de la primera imagen  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 items-center  h-max">
        {/* Primera imagen con parallax */}
        <div id="newfeats1">
          <div className="newfeatstext"></div>
        </div>

        {/* Texto con glitch de la primera imagen */}
        <div>
          <h4
            className="hero glitch layers font-bellfort"
            data-text="ENTRENAMIENTO FUNCIONAL"
          >
            <span className=" text-L-Gray-dark dark:text-D-Gray-light">
              FORTALECE TU CUERPO
            </span>
          </h4>
          <p className="font-bellfort pt-8 text-3xl text-L-Gray-med dark:text-D-Gray-med">
            NOTARÁS LOS CAMBIOS PROGRESIVAMENTE DESDE EL PRIMER MES DE
            ENTRENAMIENTO
          </p>
        </div>
      </div>

      {/* Fila de la segunda imagen  */}

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 items-center  h-max">
        {/* Texto con glitch de la segunda imagen */}

        <div>
          <h4
            className="hero glitch layers font-bellfort"
            data-text="ENTRENAMIENTO FUNCIONAL"
          >
            <span className=" text-L-Gray-dark dark:text-D-Gray-light">
              ENTRENADORES PERSONALIZADOS
            </span>
          </h4>
          <h6 className="font-bellfort pt-8 text-3xl text-L-Gray-med dark:text-D-Gray-med">
            TODAS LAS SESIONES SON DIRIGIDAS POR NUESTROS ENTRENADORES
          </h6>

          {/* Segunda imagen con parallax */}
        </div>
        <div id="newfeats2">
          <div className="newfeatstext"></div>
        </div>
      </div>
    </div>
  );
};
