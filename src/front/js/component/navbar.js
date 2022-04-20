import React, { useEffect } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import isolight from "../../img/black-lion-box_large.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  let history = useHistory();

  // CONFIGURACIÓN NECESARIA DEL TEMA OSCURO

  useEffect(() => {
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );
    console.log(themeToggleDarkIcon);
    console.log(themeToggleLightIcon);

    // Change the icons inside the button based on previous settings

    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.classList.remove("hidden");
    }

    var themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", function () {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
  }, []);

  return (
    <nav className="bg-L-Gray-light dark:bg-D-Gray-dark dark:border-D-Gray-med mx-auto">
      {/* Logo principal Header */}

      <div className="container flex items-center justify-center px-6 py-3 mx-auto text-L-Gray-dark dark:text-D-Gray-light capitalize">
        <a href="/" alt="Big Lion Box">
          <img src={isolight} className="mr-3 h-16 sm:h-9" />
        </a>

        {/* Inicio de botones de navegación interna del home */}

        <a
          href="/"
          className="border-b-2 border-transparent hover: text-gray-800 dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-6"
        >
          El gimnasio
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover: text-gray-800 dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-6"
        >
          Suscripciones{" "}
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-6"
        >
          Contacto
        </a>

        {/* Fin de botones de navegación interna del home */}

        {/* Inicio de botones de redes sociales y modo oscuro */}
        <a
          href="https://www.instagram.com/blacklionbox/?hl=en"
          className="border-b-2 border-transparent text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light mx-1.5 sm:mx-6"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>

        <a
          href="https://www.facebook.com/Black-Lion-Box-109771724135332"
          className="border-b-2 border-transparent text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light mx-1.5 sm:mx-6"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </a>

        <button
          id="theme-toggle"
          type="button"
          className="text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light border-transparent focus:outline-none rounded-lg text-sm p-2.5 mr-5"
        >
          <svg
            id="theme-toggle-dark-icon"
            className="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            className="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Fin de botones de redes sociales  y modo oscuro */}

        {/* Inicio de botones de acciones de usuario */}
        <div>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => history.push("/register")}
          >
            registro
          </button>

          <button
            onClick={() => history.push("/login")}
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            entrar
          </button>

          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => {
              localStorage.removeItem("token");
              history.push("/");
            }}
          >
            desconectar
          </button>
        </div>

        {/* Fin de botones de acciones de usuario */}
      </div>
    </nav>
  );
};
