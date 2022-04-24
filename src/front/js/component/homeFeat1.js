import React from "react";

export const HomeFeat1 = () => {
  (function () {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#newfeats1");
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
      elem.style.backgroundPosition = x;
    }
  })();

  return (
    <div className="container mx-auto text-center " id="Elgimnasio">
      <div className="grid grid-cols-2 gap-4 items-center">
        <div id="newfeats1">
          <div className="newfeatstext"></div>
        </div>
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
    </div>
  );
};
