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

  // const deleteUser = (id) => {
  //   fetch(process.env.BACKEND_URL + "/api/delete_user/" + id, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //       Authorization: "Bearer " + localStorage.getItem("token"),
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data.response));
  // };

  return (
    <>
      <div className="container flex items-center justify-center mx-auto ">
        <div className="table w-full ...">
          <div className="table-header-group ...">
            <div className="table-row">
              <div className="table-cell text-left ...">Nombre</div>
              <div className="table-cell text-left ...">Apellidos</div>
              <div className="table-cell text-left ...">Nombre de usuario</div>
              <div className="table-cell text-left ...">Email</div>
              <div className="table-cell text-left ...">Teléfono</div>
              <div className="table-cell text-left ...">Dirección</div>
              <div className="table-cell text-left ...">Rol</div>
              <div className="table-cell text-left ...">Id</div>
            </div>
          </div>
          <div className="table-row-group">
            {usersList.map((value, index) => {
              return (
                <div className="table-row" key={index}>
                  <div className="table-cell ...">{value.first_name}</div>
                  <div className="table-cell ...">{value.last_name}</div>
                  <div className="table-cell ...">{value.username}</div>
                  <div className="table-cell ...">{value.email}</div>
                  <div className="table-cell ...">{value.phone}</div>
                  <div className="table-cell ...">{value.adress}</div>
                  <div className="table-cell ...">{value.role}</div>
                  <div className="table-cell ...">{value.id}</div>
                  <div className="table-cell ...">
                    <button
                      type="button"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => {
                        fetch(
                          process.env.BACKEND_URL +
                            "/api/delete_user/" +
                            value.id,
                          {
                            method: "DELETE",
                            headers: {
                              "Content-Type": "application/json",
                            },
                          }
                        )
                          .then((resp) => resp.json())
                          .then((data) => getUsers());
                      }}
                    >
                      Eliminar
                    </button>
                    <button
                      type="submit"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Modificar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center mx-auto my-8">
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
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
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

                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
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

                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
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

                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
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

                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
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

                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
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

                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
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

                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
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

                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
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
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Rol
                  </label>
                  <select
                    onChange={(e) => {
                      setUser({ ...user, role_id: e.target.value });
                    }}
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option disabled selected value="">
                      Selecciona rol
                    </option>
                    {rolesList.map((value, index) => {
                      return (
                        <option key={index} value={value.id}>
                          {value.name}
                        </option>
                      );
                    })}
                  </select>

                  <div className="form-check">
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
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Aceptar términos y condiciones
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck2"
                      onClick={() => {
                        user.marketing_comunication
                          ? user.marketing_comunication == true
                            ? setUser({ marketing_comunication: false })
                            : setUser({ marketing_comunication: true })
                          : setUser({ ...user, marketing_comunication: true });
                      }}
                    ></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">
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

        <button
          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="popup-modal"
        >
          Toggle modal
        </button>

        <div
          id="popup-modal"
          tabindex="-1"
          class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
          aria-hidden="true"
        >
          <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex justify-end p-2">
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="popup-modal"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div class="p-6 pt-0 text-center">
                <svg
                  class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
