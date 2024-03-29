import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AdminCreateUser = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [modifyUser, setModifyUser] = useState({});
  const [oldUser, setOldUser] = useState({});
  const [usersList, setUsersList] = useState([]);
  const [userValue, setUserValue] = useState(null);
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
      .then((data) => {
        console.log("getusersworkinclass");
        setUsersList(data);
        window.document.dispatchEvent(
          new Event("DOMContentLoaded", {
            bubbles: true,
            cancelable: true,
          })
        );
      });
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

  return (
    <>
      <div className="container px-10 py-4">
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row">
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Nombre
              </div>
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Apellidos
              </div>
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Nombre de usuario
              </div>
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Email
              </div>
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Teléfono
              </div>
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Dirección
              </div>
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Rol
              </div>
              {/* <div className="table-cell font-bellfort text-left font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Id
              </div> */}
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Modificar
              </div>
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Eliminar
              </div>
            </div>
          </div>
          <div className="table-row-group">
            {usersList.map((value, index) => {
              return (
                <div className="table-row" key={index}>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.first_name}
                  </div>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.last_name}
                  </div>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.username}
                  </div>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.email}
                  </div>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.phone}
                  </div>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.adress}
                  </div>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.role}
                  </div>
                  {/* <div className="table-cell text-center">{value.id}</div> */}
                  <div className="table-cell text-center">
                    <button
                      className="py-2.5 border-b-2 border-transparent text-L-Gray-dark dark:text-D-Gray-light hover:text-A-Magenta dark:hover:text-M-Lime mx-1.5 sm:mx-2"
                      onClick={() => {
                        setOldUser(value);
                        setModifyUser(value);
                      }}
                      type="button"
                      data-modal-toggle="modify-modal"
                    >
                      <FontAwesomeIcon icon={["fas", "pen-to-square"]} />
                    </button>
                  </div>
                  <div className="table-cell text-center">
                    <button
                      data-modal-toggle="delete-modal"
                      onClick={() => {
                        setUserValue(value.id);
                      }}
                      type="button"
                      className="py-2.5 border-b-2 border-transparent text-L-Gray-dark dark:text-D-Gray-light hover:text-A-Magenta dark:hover:text-M-Lime mx-1.5 sm:mx-2"
                    >
                      <FontAwesomeIcon icon={["fas", "xmark"]} />
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
          className="py-2 px-6 text-sm font-medium text-L-Gray-dark focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-A-Magenta hover:text-L-Gray-light focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
            <div className="relative bg-L-Gray-light rounded-lg shadow dark:bg-D-Gray-dark">
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
                    <label
                      className="form-check-label"
                      htmlhtmlFor="exampleCheck1"
                    >
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
                    <label
                      className="form-check-label"
                      htmlhtmlFor="exampleCheck1"
                    >
                      Marketing y comunicaciones
                    </label>
                  </div>
                </div>
                <button
                  data-modal-toggle="authentication-modal"
                  type="button"
                  className="py-2 px-6 text-sm font-medium text-L-Gray-dark focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-A-Magenta hover:text-L-Gray-light focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                    document
                      .querySelectorAll("[modal-backdrop]")
                      .forEach((element) => {
                        element.remove();
                      });
                  }}
                >
                  Registrar nuevo usuario
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modify-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-L-Gray-light rounded-lg shadow dark:bg-D-Gray-dark">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={() => {
                  document
                    .querySelectorAll("[modal-backdrop]")
                    .forEach((element) => {
                      element.remove();
                    });
                }}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="modify-modal"
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
                Modificar usuario
              </h3>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Nombre
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setModifyUser({
                      ...modifyUser,
                      first_name: e.target.value,
                    });
                    console.log(oldUser);
                    console.log(modifyUser);
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  defaultValue={oldUser.first_name ? oldUser.first_name : ""}
                ></input>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Apellidos
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setModifyUser({ ...modifyUser, last_name: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  defaultValue={oldUser.last_name ? oldUser.last_name : ""}
                ></input>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setModifyUser({ ...modifyUser, username: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  defaultValue={oldUser.username ? oldUser.username : ""}
                ></input>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => {
                    setModifyUser({ ...modifyUser, email: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  defaultValue={oldUser.email ? oldUser.email : ""}
                ></input>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Teléfono
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setModifyUser({ ...modifyUser, phone: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  defaultValue={oldUser.phone ? oldUser.phone : ""}
                ></input>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Dirección
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setModifyUser({ ...modifyUser, adress: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  defaultValue={oldUser.adress ? oldUser.adress : ""}
                ></input>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Avatar
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setModifyUser({
                      ...modifyUser,
                      avatar_url: e.target.value,
                    });
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
                    setModifyUser({ ...modifyUser, info: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  defaultValue={oldUser.info ? oldUser.info : ""}
                ></input>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Rol
                </label>
                <select
                  onChange={(e) => {
                    setModifyUser({ ...modifyUser, role_id: e.target.value });
                  }}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled selected value={oldUser.role}>
                    Cambiar rol ({oldUser.role ? oldUser.role : ""})
                  </option>
                  {rolesList.map((value, index) => {
                    return (
                      <option key={index} value={value.id}>
                        {value.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <button
                data-modal-toggle="modify-modal"
                type="button"
                className="py-2 px-6 text-sm font-medium text-L-Gray-dark focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-A-Magenta hover:text-L-Gray-light focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  fetch(
                    process.env.BACKEND_URL + "/api/edit_user/" + oldUser.id,
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(modifyUser),
                    }
                  )
                    .then((resp) => resp.json())
                    .then((data) => getUsers());
                  document
                    .querySelectorAll("[modal-backdrop]")
                    .forEach((element) => {
                      element.remove();
                    });
                  setModifyUser("");
                  setOldUser("");
                }}
              >
                Modificar usuario
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        id="delete-modal"
        tabIndex="-1"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
        aria-hidden="true"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={() => {
                  document
                    .querySelectorAll("[modal-backdrop]")
                    .forEach((element) => {
                      element.remove();
                    });
                }}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="delete-modal"
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

            <div className="p-6 pt-0 text-center">
              <svg
                className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                ¿Seguro que quieres eliminar este usuario?
              </h3>
              <button
                data-modal-toggle="delete-modal"
                type="button"
                onClick={() => {
                  fetch(
                    process.env.BACKEND_URL + "/api/delete_user/" + userValue,
                    {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  )
                    .then((resp) => resp.json())
                    .then((data) => getUsers());
                  document
                    .querySelectorAll("[modal-backdrop]")
                    .forEach((element) => {
                      element.remove();
                    });
                }}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Sí,seguro
              </button>
              <button
                data-modal-toggle="delete-modal"
                type="button"
                onClick={() => {
                  document
                    .querySelectorAll("[modal-backdrop]")
                    .forEach((element) => {
                      element.remove();
                    });
                }}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
