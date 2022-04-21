import React from "react";

export const MainHeader = () => {
  return (
    <div>
      <div className="headerbg mb-12 w-full h-screen">
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
          <div className=" py-14">
            <h2
              className="hero glitch layers font-bellfort"
              data-text="NO PAIN, NO GAIN"
            >
              <span>NO PAIN, NO GAIN</span>
            </h2>
          </div>
          <p className="sm:w-1/4 w-4/5 display-5 text-L-Gray-light text-2xl font-medium opacity-75 mx-auto">
            REGÍSTRATE ANTES DEL 31/05 Y DISFRUTA DEL PRIMER MES CON UN
            DESCUENTO DEL 20% CON EL CÓDIGO:{" "}
            <span className=" text-M-Lime"> SPRINGSTRONG</span>
          </p>
          <div>
            <button className="mt-5 text-L-Gray-dark bg-gradient-to-r from-M-Lime via-red-300 to-M-Lime hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-heading font-medium rounded-lg text-2xl px-6 py-3.5 text-center">
              APÚNTATE AHORA!
            </button>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};
