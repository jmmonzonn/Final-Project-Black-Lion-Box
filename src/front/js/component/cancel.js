import React from "react";

export const Cancel = () => {
  return (
    <div className="container h-screen text-center mx-auto">
      <div className="row">
        <div className="col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-40 mx-auto fill-A-Magenta dark:fill-M-Lime mt-6"
          >
            <path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z" />
          </svg>

          <p className="text-4xl text-L-Gray-dark dark:text-D-Gray-light mt-6">
            Tu suscripción no ha podido completarse en éste momento
          </p>
          <p className="text-2xl text-L-Gray-dark dark:text-D-Gray-light mt-6">
            El proceso de pago no ha podido ser completado, inténtalo de nuevo
            en unos minutos o ponte en contacto con nuestro equipo de soporte.
          </p>

          <a
            href="/"
            className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring mt-6"
          >
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              Volver al inicio
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
