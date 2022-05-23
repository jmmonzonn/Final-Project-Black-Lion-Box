import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserHeader } from "../component/user/userHeader";
import { SubscriptionTiers } from "../component/admin/adminSubscriptionTiers";
import { UserModifyProfile } from "../component/user/userModifyProfile";

import "../../styles/home.css";
import { UserThisWeek } from "../component/user/userThisWeek";

// Funciones que se utilizan para definir el estilo de los botones de las tabs en el componente.

const active_class =
  "tab inline-block p-4 rounded-t-lg border-b-2 text-L-Gray-dark hover:text-A-Magenta dark:text-D-Gray-light dark:hover:text-M-Lime border-A-Magenta dark:border-M-Lime";
// tab inline-block p-4 rounded-t-lg border-b-2 text-L-Gray-dark hover:text-A-Magenta dark:text-D-Gray-light dark:hover:text-M-Lime border-A-Magenta dark:border-M-Lime
// tab inline-block p-4 rounded-t-lg border-b-2 text-L-Gray-dark hover:text-A-Magenta dark:text-D-Gray-light dark:hover:text-M-Lime border-A-Magenta dark:border-M-Lime text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500"
const deactive_class =
  "tab inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-A-Magenta hover:border-gray-300 dark:hover:text-M-Lime text-L-Gray-dark dark:text-D-Gray-light";

export const UserDashboard = () => {
  // Fix para que Flowbite reinicie los eventos al cargar la página. Sin esto, no funcionan los modals, toggles y botones no funcionan.

  useEffect(() => {
    window.document.dispatchEvent(
      new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true,
      })
    );

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
    actions.getUser();
    actions.getUserSessions();
    actions.getThisWeek();
  }, []);

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
    <div className="patternBg dark:patternBgD w-full h-fit min-h-screen bg-center py-10">
      <div className="container mx-auto">
        <div className=" col-span-full mx-auto">
          <div>
            {/* Carga el encabezado de la sección de usuario */}

            <UserHeader />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mb-4 border-b">
            <ul
              className="flex flex-wrap -mb-px font-bellfort text-xl text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              {/* Tab de la sección de sesiones */}

              <li className="mr-2" role="presentation">
                <button
                  className={active_class}
                  id="sessions-tab"
                  data-tabs-target="#sessions"
                  type="button"
                  // role="tab"
                  aria-controls="sessions"
                  aria-selected="true"
                  onClick={(e) => {
                    changeTab(e);
                  }}
                >
                  Sesiones
                </button>
              </li>

              {/* Tab de la sección de tipos de editar suscripción */}

              {/* <li className="mr-2" role="presentation">
                <button
                  className={deactive_class}
                  id="training-tab"
                  data-tabs-target="#training"
                  type="button"
                  // role="tab"
                  aria-controls="training"
                  aria-selected="false"
                  onClick={(e) => {
                    changeTab(e);
                  }}
                >
                  Suscripción
                </button>
              </li> */}

              {/* Tab de la sección de editar los datos del usuario */}

              <li className="mr-2" role="presentation">
                <button
                  className={deactive_class}
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  // role="tab"
                  aria-controls="profile"
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
            className="p-4 bg-L-Gray-light dark:bg-D-Gray-dark border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10"
            id="sessions"
            role="tabpanel"
            aria-labelledby="sessions-tab"
          >
            <UserThisWeek />
          </div>

          {/* Contenido de la sección de administración de suscripciones

          <div
            className="hidden p-4 bg-L-Gray-light dark:bg-D-Gray-dark border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10"
            id="training"
            role="tabpanel"
            aria-labelledby="training-tab"
          >
            <SubscriptionTiers />
          </div> */}

          {/* Contenido de la sección de tarifas de suscripciones */}

          <div
            className="hidden p-4 bg-L-Gray-light dark:bg-D-Gray-dark border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <UserModifyProfile />
          </div>
        </div>
      </div>
    </div>
  );
};
