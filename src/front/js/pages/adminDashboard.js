import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { AdminHeader } from "../component/adminHeader";
import { AdminUserList } from "../component/adminUserlist";
import { AdminSuscription } from "../component/adminSuscription";
import { AdminCreateUser } from "../component/adminCreateUser";

import { AdminRole } from "../component/adminRole.js";
import { SubscriptionTiers } from "../component/adminSubscriptionTiers";
import "../../styles/home.css";

export const AdminDashboard = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();

  return (
    <div className="container block items-center justify-center mx-auto">
      <div className="container flex items-center justify-center mx-auto">
        <div className="flex items-center">
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
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500"
                id="users-tab"
                data-tabs-target="#users"
                type="button"
                role="tab"
                aria-controls="users"
                aria-selected="true"
              >
                Usuarios
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                id="training-tab"
                data-tabs-target="#training"
                type="button"
                role="tab"
                aria-controls="training"
                aria-selected="false"
              >
                Tipos de entrenamiento
              </button>
            </li>

            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                id="subscription-tab"
                data-tabs-target="#subscription"
                type="button"
                role="tab"
                aria-controls="subscription"
                aria-selected="false"
              >
                Tarifas
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
              >
                Contacts
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div id="myTabContent">
        <div
          className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="users"
          role="tabpanel"
          aria-labelledby="users-tab"
        >
          <AdminCreateUser />
        </div>
        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="training"
          role="tabpanel"
          aria-labelledby="training-tab"
        >
          <AdminSuscription />
        </div>

        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="subscription"
          role="tabpanel"
          aria-labelledby="subscription-tab"
        >
          <SubscriptionTiers />
        </div>
        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
    // ) : // <div className="text-center mt-5">
    //   <div className="border-b border-gray-200 dark:border-gray-700">
    //     <div>
    //       <AdminHeader />
    //     </div>
    //     <ul className="nav nav-tabs" id="myTab" role="tablist">
    //       <li className="nav-item" role="presentation">
    //         <button
    //           className="nav-link active"
    //           id="home-tab"
    //           data-bs-toggle="tab"
    //           data-bs-target="#home"
    //           type="button"
    //           role="tab"
    //           aria-controls="home"
    //           aria-selected="true"
    //         >
    //           Listado de usuarios
    //         </button>
    //       </li>
    //       <li className="nav-item" role="presentation">
    //         <button
    //           className="nav-link"
    //           id="contact-tab"
    //           data-bs-toggle="tab"
    //           data-bs-target="#subscriptions"
    //           type="button"
    //           role="tab"
    //           aria-controls="contact"
    //           aria-selected="false"
    //         >
    //           Editar Suscripciones
    //         </button>
    //       </li>
    //     </ul>
    //     <div className="tab-content" id="myTabContent">
    //       <div
    //         className="tab-pane fade show active"
    //         id="home"
    //         role="tabpanel"
    //         aria-labelledby="home-tab"
    //       >
    //         <AdminUserList />
    //       </div>
    //       <div
    //         className="tab-pane fade"
    //         id="profile"
    //         role="tabpanel"
    //         aria-labelledby="profile-tab"
    //       ></div>
    //       <div
    //         className="tab-pane fade"
    //         id="subscriptions"
    //         role="tabpanel"
    //         aria-labelledby="contact-tab"
    //       >
    //         <SubscriptionTiers />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // null}
    // </>
  );
};
