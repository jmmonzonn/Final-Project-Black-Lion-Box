import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserHeader } from "../component/userHeader";
import { SubscriptionTiers } from "../component/adminSubscriptionTiers";
import { ViewSessions } from "../component/userViewSessions";
import { UserModifyProfile } from "../component/userModifyProfile";

import "../../styles/home.css";
import { ThisWeek } from "../component/thisWeek";
export const UserDashboard = () => {
  // Funciones que se utilizan para definir el estilo de los botones de las tabs en el componente.

  const active_class =
    "tab inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500";
  const deactive_class =
    "tab inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700";

  // Función que modifica las etiquetas de css de la navegación de tabs para activar y desactivar la pestaña activa.

  const changeTab = (e) => {
    let id = e.target.getAttribute("data-tabs-target");

    document
      .querySelectorAll("#myTabContent > div")
      .forEach((el) => el.classList.add("hidden"));

    document.querySelector(id).classList.remove("hidden");

    // Desactiva los botones que no están en foco en la navegación por tabs.

    document
      .querySelectorAll(".tab")
      .forEach((element) => (element.className = deactive_class));

    // Activa los botones al activarse en la navegación por tabs.

    document.querySelector(`#${e.target.id}`).className = active_class;
  };

  const { store, actions } = useContext(Context);
  let history = useHistory();

  return (
    <div className="container mx-auto">
      <div className=" col-span-full mx-auto">
        <div>
          {/* Carga el encabezado de la sección de usuario */}

          <UserHeader />
        </div>
      </div>
      <div className="container flex items-center justify-center mx-auto">
        <div className="mb-4 border-b border-L-Gray-light dark:border-D-Gray-dark">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            {/* Tab de la sección de sesiones */}

            <li className="mr-2" role="presentation">
              <button
                className={active_class}
                id="users-tab"
                data-tabs-target="#users"
                type="button"
                role="tab"
                aria-controls="users"
                aria-selected="true"
                onClick={(e) => {
                  changeTab(e);
                }}
              >
                Sesiones
              </button>
            </li>

            {/* Tab de la sección de tipos de editar suscripción */}

            <li className="mr-2" role="presentation">
              <button
                className={deactive_class}
                id="training-tab"
                data-tabs-target="#training"
                type="button"
                role="tab"
                aria-controls="training"
                aria-selected="false"
                onClick={(e) => {
                  changeTab(e);
                }}
              >
                Suscripción
              </button>
            </li>

            {/* Tab de la sección de editar los datos del usuario */}

            <li className="mr-2" role="presentation">
              <button
                className={deactive_class}
                id="subscription-tab"
                data-tabs-target="#subscription"
                type="button"
                role="tab"
                aria-controls="subscription"
                aria-selected="false"
                onClick={(e) => {
                  changeTab(e);
                }}
              >
                Editar perfil
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div id="myTabContent">
        {/* Contenido de la sección de gestión de sesiones */}

        <div
          className="p-4 bg-L-Gray-light rounded-lg dark:bg-D-Gray-dark"
          id="users"
          role="tabpanel"
          aria-labelledby="users-tab"
        >
          <ThisWeek />
        </div>

        {/* Contenido de la sección de administración de suscripciones */}

        <div
          className="p-4 bg-L-Gray-light rounded-lg dark:bg-D-Gray-dark"
          id="training"
          role="tabpanel"
          aria-labelledby="training-tab"
        >
          <SubscriptionTiers />
        </div>

        {/* Contenido de la sección de tarifas de suscripciones */}

        <div
          className="p-4 bg-L-Gray-light rounded-lg dark:bg-D-Gray-dark"
          id="subscription"
          role="tabpanel"
          aria-labelledby="subscription-tab"
        >
          <UserModifyProfile />
        </div>
      </div>
    </div>
  );
};
