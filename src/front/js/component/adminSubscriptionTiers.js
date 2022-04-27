import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SubscriptionTiers = () => {
  const { store, actions } = useContext(Context);
  const [suscription, setSuscription] = useState({});
  const [suscriptionList, setSuscriptionList] = useState([]);
  const [suscriptionTypeList, setSuscriptionTypeList] = useState([]);
  let history = useHistory();

  useEffect(() => {
    getSuscriptions();
    getSuscriptions_type();
  }, []);

  const getSuscriptions = () => {
    fetch(process.env.BACKEND_URL + "/api/get_suscriptions", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((resp) => resp.json())
      .then((data) => setSuscriptionList(data));
  };

  const getSuscriptions_type = () => {
    fetch(process.env.BACKEND_URL + "/api/get_suscription_types", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((resp) => resp.json())
      .then((data) => setSuscriptionTypeList(data));
  };
  /* Funcion para eliminar subscripciones */
  const deleteSuscription = (id) => {
    fetch(process.env.BACKEND_URL + "/api/delete_suscriptions/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((resp) => resp.json())
      .then((data) => getSuscriptions());
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
                Descripción
              </div>
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Precio
              </div>
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Sesiones
              </div>
              <div className="table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Tipo de entrenamiento
              </div>
              {/* <div className="table-cell font-bellfort text-left font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Id
              </div> */}
              <div className="table-cell font-bellfort text-left font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Modificar
              </div>
              <div className="table-cell font-bellfort text-left font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2">
                Eliminar
              </div>
            </div>
          </div>
          <div className="table-row-group">
            {suscriptionList.map((value, index) => {
              return (
                <div className="table-row" key={index}>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.name}
                  </div>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.description}
                  </div>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.price}
                  </div>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.tokens}
                  </div>
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    {value.suscription_type}
                  </div>
                  {/* <div className="table-cell">{value.id}</div> */}
                  <div className="table-cell">
                    <button
                      type="submit"
                      className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
                    >
                      📝
                    </button>
                  </div>
                  <div className="table-cell ...">
                    <button
                      type="submit"
                      className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
                      onClick={() => {
                        deleteSuscription(value.id);
                      }}
                    >
                      ❌
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="container flex items-center justify-center mx-auto my-8">
          <button
            className="py-2 px-6 text-sm font-medium text-L-Gray-dark focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-A-Magenta hover:text-L-Gray-light focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="button"
            data-modal-toggle="subscription-modal"
          >
            Añadir nueva tarifa
          </button>

          <div
            id="subscription-modal"
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
                    data-modal-toggle="subscription-modal"
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
                        setSuscription({
                          ...suscription,
                          name: e.target.value,
                        });
                      }}
                      className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Introduce nombre"
                    ></input>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Descripción
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setSuscription({
                          ...suscription,
                          description: e.target.value,
                        });
                      }}
                      className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Introduce apellido"
                    ></input>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Precio
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setSuscription({
                          ...suscription,
                          price: e.target.value,
                        });
                      }}
                      className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Introduce usuario"
                    ></input>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Sesiones
                    </label>
                    <input
                      type="password"
                      onChange={(e) => {
                        setSuscription({
                          ...suscription,
                          tokens: e.target.value,
                        });
                      }}
                      className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Introduce contraseña"
                    ></input>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Tipos de entrenamiento
                    </label>
                    <select
                      onChange={(e) => {
                        setSuscription({
                          ...suscription,
                          suscription_type_id: e.target.value,
                        });
                      }}
                      id="trainings"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option disabled selected value="">
                        Selecciona el tipo de entrenamiento
                      </option>
                      {suscriptionTypeList.map((value, index) => {
                        return (
                          <option key={index} value={value.id}>
                            {value.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="py-2 px-6 text-sm font-medium text-L-Gray-dark focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-A-Magenta hover:text-L-Gray-light focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => {
                      fetch(process.env.BACKEND_URL + "/api/suscription", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization:
                            "Bearer " + localStorage.getItem("token"),
                        },
                        body: JSON.stringify(suscription),
                      })
                        .then((resp) => resp.json())
                        .then((data) => getSuscriptions());
                    }}
                  >
                    Añadir tarifa
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
