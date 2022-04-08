import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const AdminSuscription = () => {
  const { store, actions } = useContext(Context);
  const [suscription, setSuscription] = useState({});
  const [suscriptionList, setSuscriptionList] = useState([]);
  let history = useHistory();

  useEffect(() => {
    getSuscriptions();
  }, []);

  const getSuscriptions = () => {
    fetch(process.env.BACKEND_URL + "/api/get_suscription_types", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((resp) => resp.json())
      .then((data) => setSuscriptionList(data));
  };

  return (
    <>
      <div>
        <div className="table w-full ...">
          <div className="table-header-group ...">
            <div className="table-row">
              <div className="table-cell text-left ...">Nombre</div>
            </div>
          </div>
          <div className="table-row-group">
            {suscriptionList.map((value, index) => {
              return (
                <div className="table-row" key={index}>
                  <div className="table-cell ...">{value.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="training-modal"
      >
        Añadir nuevo tipo de entrenamiento
      </button>

      <div
        id="training-modal"
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
                data-modal-toggle="training-modal"
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
                Introduce los datos del nuevo tipo de entrenamiento:
              </h3>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Nombre
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setSuscription({ ...suscription, name: e.target.value });
                  }}
                  className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Introduce nombre"
                ></input>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  fetch(process.env.BACKEND_URL + "/api/suscription_type", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                    body: JSON.stringify(suscription),
                  })
                    .then((resp) => resp.json())
                    .then((data) => {
                      getSuscriptions();
                    });
                }}
              >
                Añadir
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
