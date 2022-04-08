import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const AdminCreateUser = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [usersList, setUsersList] = useState([]);
  const [rolesList, setRolesList] = useState([]);
  let history = useHistory();

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getRoles();
  }, []);

  const getUsers = () => {
    fetch(process.env.BACKEND_URL + "/api/get_users", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((resp) => resp.json())
      .then((data) => setUsersList(data));
  };

  const getRoles = () => {
    fetch(process.env.BACKEND_URL + "/api/get_role", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((resp) => resp.json())
      .then((data) => setRolesList(data));
  };

  const createRole = (role) => {
    setUser({ ...user, role: role });
  };
  return (
    <>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="authentication-modal"
      >
        Añadir nuevo usuario
      </button>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <form
              className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
              action="#"
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Introduce los datos del nuevo usuario:
              </h3>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Nombre
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setUser({ ...user, first_name: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Introduce nombre"
                ></input>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Apellidos
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setUser({ ...user, last_name: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Introduce apellido"
                ></input>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Introduce usuario"
                ></input>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Contraseña
                </label>
                <input
                  type="password"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Introduce contraseña"
                ></input>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Introduce email"
                ></input>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Teléfono
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setUser({ ...user, phone: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Introduce teléfono"
                ></input>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Dirección
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setUser({ ...user, adress: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Introduce dirección"
                ></input>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Avatar
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setUser({ ...user, avatar_url: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Introduce url de tu avatar"
                ></input>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Info
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setUser({ ...user, info: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Introduce info"
                ></input>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Rol
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {rolesList.map((value, index) => {
                    return (
                      <option
                        key={index}
                        onClick={() => {
                          createRole(value.name);
                        }}
                      >
                        {value.name}
                      </option>
                    );
                  })}
                </select>

                <div class="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    onClick={() => {
                      user.conditions_terms
                        ? user.conditions_terms == true
                          ? setUser({ conditions_terms: false })
                          : setUser({ conditions_terms: true })
                        : setUser({ ...user, conditions_terms: true });
                    }}
                  ></input>
                  <label className="form-check-label" for="exampleCheck1">
                    Aceptar términos y condiciones
                  </label>
                </div>

                <div class="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    onClick={() => {
                      user.marketing_comunication
                        ? user.marketing_comunication == true
                          ? setUser({ marketing_comunication: false })
                          : setUser({ marketing_comunication: true })
                        : setUser({ ...user, marketing_comunication: true });
                    }}
                  ></input>
                  <label className="form-check-label" for="exampleCheck1">
                    Marketing y comunicaciones
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  fetch(process.env.BACKEND_URL + "/api/signup", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                  })
                    .then((resp) => resp.json())
                    .then((data) => getUsers());
                }}
              >
                Registrar nuevo usuario
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Nombre de usuario</th>
              <th scope="col">Email</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Dirección</th>
              <th scope="col">Rol</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.username}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>{value.adress}</td>
                  <td>{value.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
