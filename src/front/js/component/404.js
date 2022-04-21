import React from "react";

export const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-L-Gray-light dark:bg-D-Gray-dark dark:border-D-Gray-med">
      <h1 className="text-9xl font-extrabold text-L-Gray-dark dark:text-D-Gray-light tracking-widest">
        404
      </h1>
      <div className="bg-M-Lime px-2 text-sm rounded rotate-12 absolute">
        Página no encontrada
      </div>
      <button className="mt-5">
        <a
          href="/"
          className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            Volver al inicio
          </span>
        </a>
      </button>
    </main>
  );
};
