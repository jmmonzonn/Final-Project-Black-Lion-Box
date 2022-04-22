import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { AdminHeader } from "../component/adminHeader";
import { AdminSuscription } from "../component/adminSuscription";
import { AdminSessions } from "../component/adminSessions";
import { AdminCreateUser } from "../component/adminCreateUser";
import { SubscriptionTiers } from "../component/adminSubscriptionTiers";
import { AdminSessionType } from "../component/adminSessionType";
import { AdminUserSessions } from "../component/adminUserSession";
import { ThisWeek } from "../component/thisWeek";
import "../../styles/home.css";
import { unmountComponentAtNode } from "react-dom";

export const AdminDashboard = () => {
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
    <div className="container block items-center justify-center mx-auto">
      <div className="container flex items-center justify-center mx-auto">
        <div className="flex items-center">
          {/* Carga el encabezado de la sección de administración */}

          <AdminHeader />
        </div>
      </div>
      <div className="container flex items-center justify-center mx-auto">
        <div className="mb-4 border-b border-gray-200">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            {/* Tab de la sección de usuarios */}

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
                Usuarios
              </button>
            </li>

            {/* Tab de la sección de tipos de entrenamiento */}

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
                Tipos de entrenamiento
              </button>
            </li>

            {/* Tab de la sección de tarifas */}

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
                Tarifas
              </button>
            </li>

            {/* Tab de la sección de Sesiones */}

            <li role="presentation">
              <button
                className={deactive_class}
                id="sessions-tab"
                data-tabs-target="#sessions"
                type="button"
                role="tab"
                aria-controls="sessions"
                aria-selected="false"
                onClick={(e) => {
                  changeTab(e);
                }}
              >
                Sesiones
              </button>
            </li>

            {/* Tab de la sección de tipos de sesión. */}

            <li role="presentation">
              <button
                className={deactive_class}
                id="session_type-tab"
                data-tabs-target="#session_type"
                type="button"
                role="tab"
                aria-controls="session_type"
                aria-selected="false"
                onClick={(e) => {
                  changeTab(e);
                }}
              >
                Tipo de sesiones
              </button>
            </li>

            {/* Tab de la sesión User Sessions (temp) */}
            <li role="presentation">
              <button
                className={deactive_class}
                id="user_sessions-tab"
                data-tabs-target="#user_sessions"
                type="button"
                role="tab"
                aria-controls="user_sessions"
                aria-selected="false"
                onClick={(e) => {
                  changeTab(e);
                }}
              >
                User sesions
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div id="myTabContent">
        {/* Contenido de la sección de gestión de usuarios */}

        <div
          className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="users"
          role="tabpanel"
          aria-labelledby="users-tab"
        >
          <AdminCreateUser />
        </div>

        {/* Contenido de la sección de administración de suscripciones */}

        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="training"
          role="tabpanel"
          aria-labelledby="training-tab"
        >
          <AdminSuscription />
        </div>

        {/* Contenido de la sección de tarifas de suscripciones */}

        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="subscription"
          role="tabpanel"
          aria-labelledby="subscription-tab"
        >
          <SubscriptionTiers />
        </div>

        {/* Contenido de la sección de gestión de sesiones */}

        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="sessions"
          role="tabpanel"
          aria-labelledby="sessions-tab"
        >
          <AdminSessions />
        </div>

        {/* Contenido de la sección de gestión de los tipos de sesión */}

        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="session_type"
          role="tabpanel"
          aria-labelledby="session_type-tab"
        >
          <AdminSessionType />
        </div>

        {/* Contenido de la sección de gestión de las sesiones por usuario (temp) */}

        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="user_sessions"
          role="tabpanel"
          aria-labelledby="user_sessions-tab"
        >
          <AdminUserSessions />
        </div>
      </div>
    </div>
  );
};
