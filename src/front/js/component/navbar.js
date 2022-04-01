import React from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import isolight from "../../img/BLB_ISO_Light_64px.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  let history = useHistory();

  return (
    <nav className="bg-L-Gray-light">
      <div className="container flex items-center justify-center px-6 py-8 mx-auto text-L-Gray-dark capitalize">
        <img src={isolight} className="mr-3 h-16 sm:h-9" alt="Big Lion Box" />
        <a
          href="#"
          className="border-b-2 border-transparent hover: text-gray-800 hover:border-M-Lime mx-1.5 sm:mx-6"
        >
          home
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover: text-gray-800 hover:border-M-Lime mx-1.5 sm:mx-6"
        >
          el gimnasio
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 hover:border-M-Lime mx-1.5 sm:mx-6"
        >
          sesiones
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 hover:border-M-Lime mx-1.5 sm:mx-6"
        >
          contacto
        </a>

        <a
          href="https://www.instagram.com/blacklionbox/?hl=en"
          className="border-b-2 border-transparent hover:text-gray-800 hover:border-M-Lime mx-1.5 sm:mx-6"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>

        <a
          href="https://www.facebook.com/Black-Lion-Box-109771724135332"
          className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </a>

        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => history.push("/register")}
        >
          registro
        </button>

        <button
          onClick={() => history.push("/login")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          entrar
        </button>

        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => {
            localStorage.removeItem("token");
            history.push("/");
          }}
        >
          desconectar
        </button>
      </div>
    </nav>
  );
};
