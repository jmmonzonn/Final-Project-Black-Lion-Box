import React from "react";
import { Alert } from "./alert";

export const MainHeader = () => {
  return (
    <div>
      <div className="bg-headerbg text-center dark:bg-headerbgD mb-12 w-full h-max">
        <div className="col-auto">
          <video
            className="logoheader sm:scale-75 h-3/4 mx-auto pt-4"
            src="https://res.cloudinary.com/blacklionbox/video/upload/v1650464596/hola_VP9_1_rmst1a.webm"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="col-auto">
          <div className="pt-4">
            <p className="sm:w-1/4 w-4/5 display-5 text-L-Gray-light text-2xl font-medium opacity-75 mx-auto">
              REGÍSTRATE ANTES DEL 31/05 Y DISFRUTA DEL PRIMER MES CON UN
              DESCUENTO DEL 20% CON EL CÓDIGO:{" "}
              <span className=" text-M-Lime"> SPRINGSTRONG</span>
            </p>
          </div>
          <div>
            <a href="#Suscripciones">
              <button className="mt-5 mb-20 text-L-Gray-dark focus:ring-4 focus:outline-none rounded-lg text-4xl px-6 py-3.5 text-center font-bellfort bg-M-Lime">
                APÚNTATE AHORA!
              </button>
            </a>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};
