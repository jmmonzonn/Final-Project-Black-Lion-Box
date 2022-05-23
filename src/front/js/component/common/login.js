import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  let history = useHistory();
  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("role") == "admin"
    ) {
      history.push("/admin/dashboard");
    } else if (
      localStorage.getItem("token") &&
      localStorage.getItem("role") == "user"
    ) {
      history.push("/user/dashboard");
    }
  }, []);

  let login = () => {
    fetch(process.env.BACKEND_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.username);
          localStorage.setItem("id", data.id);
          localStorage.setItem("email", data.email);
          localStorage.setItem("role", data.role);
          props.logged(true);
          if (data.role == "admin") {
            history.push("/admin/dashboard");
          } else {
            history.push("/user/dashboard");
          }
        } else {
          history.push("/register");
        }
      });
  };

  return (
    // Determina el fondo y establece el tamaño completo de la página.

    <div className="patternBg dark:patternBgD w-full h-screen bg-center py-44">
      {/* Crea una grid con los parámetros específicos para que centrar el contenido en las diferentes resoluciones de pantalla */}

      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10 bg-L-Gray-light dark:bg-D-Gray-dark">
        <form>
          {/* Input y label de Nombre de usuario */}

          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
              onKeyDown={(e) => {
                e.key === "Enter" ? login() : null;
              }}
              name="floating_username"
              class="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-M-Lime peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_username"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre de usuario
            </label>
          </div>
          {/* Input y label de Password */}
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              onKeyDown={(e) => {
                e.key === "Enter" ? login() : null;
              }}
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-M-Lime peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-L-Gray-dark peer-focus:dark:text-M-Lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contraseña
            </label>
          </div>

          <button
            type="button"
            onClick={() => {
              login();
            }}
            className="py-2.5 px-8 mr-2 mb-2 text-m font-medium text-gray-900 focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-M-Lime focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
{
}
