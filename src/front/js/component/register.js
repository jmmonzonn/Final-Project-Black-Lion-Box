import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({});

  return (
    // Determina el fondo y establece el tamaño completo de la página.

    <div className="patternBg dark:patternBgD w-full h-screen bg-center py-44">
      {/* Crea una grid con los parámetros específicos para que centrar el contenido en las diferentes resoluciones de pantalla */}

      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10 bg-L-Gray-light dark:bg-D-Gray-dark">
        <form>
          <div class="relative z-0 mb-6 w-full group ">
            <input
              type="user"
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
              name="floating_user"
              className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-A-Magenta peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_user"
              className="absolute text-sm text-L-Gray-dark dark:text-D-Gray-med duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-A-Magenta peer-focus:dark:text-M-Lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre de Usuario:
            </label>
          </div>

          <div class="relative z-0 mb-6 w-full group">
            <input
              type="email"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-A-Magenta peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="absolute text-sm text-L-Gray-dark dark:text-D-Gray-med duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-A-Magenta peer-focus:dark:text-M-Lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Correo Electrónico
            </label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-A-Magenta peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="absolute text-sm text-L-Gray-dark dark:text-D-Gray-med duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-A-Magenta peer-focus:dark:text-M-Lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contraseña
            </label>
          </div>
          <div class="grid xl:grid-cols-2 xl:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_first_name"
                onChange={(e) => {
                  setUser({ ...user, first_name: e.target.value });
                }}
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-A-Magenta peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="absolute text-sm text-L-Gray-dark dark:text-D-Gray-med duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-A-Magenta peer-focus:dark:text-M-Lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nombre
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                onChange={(e) => {
                  setUser({ ...user, last_name: e.target.value });
                }}
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-A-Magenta peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="absolute text-sm text-L-Gray-dark dark:text-D-Gray-med duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-A-Magenta peer-focus:dark:text-M-Lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Apellido
              </label>
            </div>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="direction"
              onChange={(e) => {
                setUser({ ...user, adress: e.target.value });
              }}
              name="floating_direction"
              className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-A-Magenta peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_direction"
              className="absolute text-sm text-L-Gray-dark dark:text-D-Gray-med duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-A-Magenta peer-focus:dark:text-M-Lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Dirección
            </label>
          </div>
          <div class="grid xl:grid-cols-2 xl:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                onChange={(e) => {
                  setUser({ ...user, phone: e.target.value });
                }}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-A-Magenta peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="absolute text-sm text-L-Gray-dark dark:text-D-Gray-med duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-A-Magenta peer-focus:dark:text-M-Lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Teléfono
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                onChange={(e) => {
                  setUser({ ...user, info: e.target.value });
                }}
                name="floating_info"
                id="floating_info"
                className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-A-Magenta peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_info"
                className="absolute text-sm text-L-Gray-dark dark:text-D-Gray-med duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-A-Magenta peer-focus:dark:text-M-Lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Información adicional
              </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <div className="flex items-start mb-6">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  onClick={() => {
                    user.conditions_terms
                      ? user.conditions_terms == true
                        ? setUser({ conditions_terms: false })
                        : setUser({ conditions_terms: true })
                      : setUser({ ...user, conditions_terms: true });
                  }}
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-A-Magenta dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-M-Lime dark:ring-offset-gray-800"
                  required
                />

                <div class="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    Acepto los{" "}
                    <a
                      href="/userterms"
                      className="text-A-Magenta hover:underline dark:text-M-Lime"
                    >
                      términos y condiciones.
                    </a>
                  </label>
                </div>
              </div>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <div class="flex items-start mb-6">
                <input
                  id="mkt"
                  aria-describedby="mkt"
                  type="checkbox"
                  onClick={() => {
                    user.marketing_comunication
                      ? user.marketing_comunication == true
                        ? setUser({ marketing_comunication: false })
                        : setUser({ marketing_comunication: true })
                      : setUser({ ...user, marketing_comunication: true });
                  }}
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-A-Magenta dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-M-Lime dark:ring-offset-gray-800"
                  required
                />

                <div className="ml-3 text-sm">
                  <label
                    htmlFor="mkt"
                    class="font-medium text-gray-900 dark:text-gray-300"
                  >
                    Acepto el envío de comunicaciones
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              fetch(process.env.BACKEND_URL + "/api/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((resp) => resp.json())
                .then((data) => console.log(data));
            }}
            className="py-2.5 px-8 mr-2 mb-2 text-m font-medium text-gray-900 focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-A-Magenta hover:text-M-Lime focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Registro
          </button>
        </form>
      </div>
    </div>
  );
};
