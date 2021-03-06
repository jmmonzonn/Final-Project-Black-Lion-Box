import React, { useEffect } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Login } from "./login";

export const Navbar = (props) => {
  let history = useHistory();

  // Función del botón para entrar en el área de admin, en caso de estar logueado con unas credenciales válidas

  const buttonAdmin = () => {
    return (
      <button
        type="button"
        className="border-b-2 border-transparent text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light mx-1.5 sm:mx-2"
        onClick={() => history.push("/admin/dashboard")}
      >
        <FontAwesomeIcon icon={["fas", "user"]} />
      </button>
    );
  };

  // Función del botón para entrar en el área de user, en caso de estar logueado con unas credenciales válidas

  const buttonUser = () => {
    return (
      <button
        type="button"
        className="border-b-2 border-transparent text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light mx-1.5 sm:mx-2"
        onClick={() => history.push("/user/dashboard")}
      >
        <FontAwesomeIcon icon={["fas", "user"]} />
      </button>
    );
  };

  // Función del botón para salir de tu sesión, elimina el contenido almacenado en local storage.

  const logout = () => {
    return (
      <button
        type="button"
        className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("id");
          localStorage.removeItem("email");
          localStorage.removeItem("role");
          props.setLogged(false);
          window.location.pathname == "/"
            ? location.reload()
            : history.push("/");
        }}
      >
        Desconectarse
      </button>
    );
  };

  // Función del botón que te lleva al formulario de login

  const login = () => {
    return (
      <button
        type="button"
        className="py-2 px-6 text-sm font-medium text-L-Gray-dark focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-A-Magenta hover:text-L-Gray-light focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => history.push("/login")}
      >
        Entrar
      </button>
    );
  };

  // Función que pinta la navegación estás en el home. Pinta los anchors de las diferentes secciones del landing.

  const navbarHome = () => {
    return (
      <>
        <li>
          <a
            href="#Elgimnasio"
            className="ml-16 border-b-2 border-transparent hover: text-L-Gray-dark dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-2"
            aria-current="page"
          >
            El Gimnasio
          </a>
        </li>
        <li>
          <a
            href="#Suscripciones"
            className="border-b-2 border-transparent hover: text-L-Gray-dark dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-2"
          >
            Suscripciones
          </a>
        </li>
        <li>
          <a
            href="#Contacto"
            className="border-b-2 border-transparent hover: text-L-Gray-dark dark:text-M-Lime hover:border-M-Lime dark:hover:border-D-Gray-light mx-1.5 sm:mx-2"
          >
            Contacto
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/blacklionbox/?hl=en"
            className="border-b-2 border-transparent text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light mx-1.5 sm:mx-2"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Black-Lion-Box-109771724135332"
            className="border-b-2 border-transparent text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light mx-1.5 sm:mx-2"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </a>
        </li>
      </>
    );
  };

  // CONFIGURACIÓN NECESARIA DEL TEMA OSCURO

  useEffect(() => {
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

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
    <nav className=" bg-L-Gray-light border-L-Gray-med px-2 sm:px-4 py-2.5 rounded dark:bg-D-Gray-dark">
      <div className="container flex justify-between mx-auto">
        <div className="flex items-center">
          <div>
            {/* Logo principal del navbar */}
            <button
              className="flex items-center"
              type="button"
              onClick={() => history.push("/")}
            >
              <img
                src="https://res.cloudinary.com/blacklionbox/image/upload/v1650757336/white-black-lion-box_large_oenn7r.png"
                className="mr-3 h-4 sm:h-9"
                alt="Black Lion Box"
              />
            </button>
          </div>

          <div>
            <div
              className="hidden justify-start items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-4"
            >
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-bellfort">
                {window.location.pathname == "/" ? navbarHome() : ""}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {/* Inicio de los botones de acciones de usuario */}

          <div className="flex md:order-2">
            {/* Botón de cambio a modo oscuro */}

            <button
              id="theme-toggle"
              type="button"
              className="text-L-Gray-dark dark:text-M-Lime hover:text-M-Lime dark:hover:text-D-Gray-light border-transparent focus:outline-none rounded-lg text-sm p-2.5"
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
            {localStorage.getItem("token") && props.logged
              ? localStorage.getItem("role") == "admin"
                ? buttonAdmin()
                : buttonUser()
              : ""}

            {localStorage.getItem("token") && props.logged ? logout() : login()}
          </div>
        </div>
      </div>
    </nav>
  );
};
