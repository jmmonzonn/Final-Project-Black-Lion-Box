import React from "react";
import { Alert } from "../component/alert";

export const MainHeader = () => {
  return (
    <div>
      <div className="bg-headerbg text-center dark:bg-headerbgD mb-12 w-full h-screen">
        <div className="col-auto">
          <video
            className="logoheader sm:w-2/5 w-3/4 mx-auto pt-12 max-h-60screen"
            src="https://res.cloudinary.com/blacklionbox/video/upload/v1650464596/hola_VP9_1_rmst1a.webm"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="col-auto">
          <div className=" pt-14">
            <h2
              className="hero glitch layers font-bellfort"
              data-text="NO PAIN, NO GAIN"
            >
              <span>NO PAIN, NO GAIN</span>
            </h2>
          </div>
          <div className="pt-4">
            <p className="sm:w-1/4 w-4/5 display-5 text-L-Gray-light text-2xl font-medium opacity-75 mx-auto">
              REGÍSTRATE ANTES DEL 31/05 Y DISFRUTA DEL PRIMER MES CON UN
              DESCUENTO DEL 20% CON EL CÓDIGO:{" "}
              <span className=" text-M-Lime"> SPRINGSTRONG</span>
            </p>
          </div>
          <div>
            <a href="#Suscripciones">
              <button className="mt-5 text-L-Gray-dark focus:ring-4 focus:outline-none rounded-lg text-4xl px-6 py-3.5 text-center font-bellfort bg-M-Lime">
                APÚNTATE AHORA!
              </button>
            </a>
            <Alert content="Test" style="bg-M-Lime text-L-Gray-light" />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

// py-2.5 px-5 mr-2 mb-2  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
