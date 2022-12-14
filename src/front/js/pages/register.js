import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  const input = (type, userValue, name, label) => {
    return (
      <div class="relative z-0 mb-6 w-full group ">
        <input
          type={type}
          onChange={(e) => {
            setUser({ ...user, [userValue]: e.target.value });
          }}
          name={name}
          className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-A-Magenta peer"
          placeholder=" "
          required
        />
        <label
          htmlFor={name}
          className="absolute text-sm text-L-Gray-dark dark:text-D-Gray-med duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-A-Magenta peer-focus:dark:text-M-Lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </div>
    );
  };

  const inputChekbox = (id, type, userValue) => {
    return (
      <>
        <input
          id={id}
          aria-describedby={id}
          type={type}
          onClick={() => {
            `user.${userValue}`
              ? `user.${userValue}` == true
                ? setUser({ ...user, [userValue]: false })
                : setUser({ ...user, [userValue]: true })
              : setUser({ ...user, [userValue]: true });
          }}
          className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-A-Magenta dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-M-Lime dark:ring-offset-gray-800"
          required
        />
      </>
    );
  };
  return (
    // Determina el fondo y establece el tamaño completo de la página.

    <div className="patternBg dark:patternBgD w-full h-screen bg-center py-44">
      {/* Crea una grid con los parámetros específicos para que centrar el contenido en las diferentes resoluciones de pantalla */}

      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10 bg-L-Gray-light dark:bg-D-Gray-dark">
        <form>
          {input("user", "username", "floating_user", "Nombre de usuario: ")}
          {input("email", "email", "floating_email", "Correo electrónico")}
          {input("password", "password", "floating_password", "Contraseña")}
          <div class="grid xl:grid-cols-2 xl:gap-6">
            {input("text", "first_name", "floating_first_name", "Nombre")}
            {input("text", "last_name", "floating_last_name", "Apellido")}
          </div>
          {input("direction", "adress", "floating_direction", "Dirección")}
          <div class="grid xl:grid-cols-2 xl:gap-6">
            {input("tel", "phone", "floating_phone", "Teléfono")}
            {input("text", "info", "floating_info", "Información adicional")}
            <div className="flex items-start mb-6">
              {inputChekbox("terms", "checkbox", "conditions_terms")}

              <div class="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-medium text-gray-900 dark:text-gray-300"
                >
                  Acepto los
                  <a
                    href="/userterms"
                    target="_blank"
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
              {inputChekbox("mkt", "checkbox", "marketing_comunication")}

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

          <button
            type="button"
            onClick={() => {
              fetch(process.env.BACKEND_URL + "/api/postUser", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((resp) => resp.json())
                .then((data) => {
                  if (data.response.token) {
                    localStorage.setItem("token", data.response.token);
                    localStorage.setItem("username", data.response.username);
                    localStorage.setItem("id", data.response.id);
                    localStorage.setItem("email", data.response.email);
                    history.push("/addsubscription");
                  }
                });
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
