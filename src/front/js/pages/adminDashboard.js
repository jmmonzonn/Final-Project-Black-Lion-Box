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
  const [checkValidate, setCheckValidate] = useState(false);
  let history = useHistory();

  useEffect(() => {
    validate();
  }, []);

  const validate = async () => {
    let token = await localStorage.getItem("token");
    if (!token) {
      history.push("/");
    } else {
      setCheckValidate(true);
    }
  };

  return (
    <>
      {checkValidate ? (
        <div>
          <div class="border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li class="mr-2">
                <Link to="/" component={<SubscriptionTiers />}>
                  tuculo
                </Link>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
                  aria-current="page"
                >
                  <svg
                    class="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  Dashboard
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <svg
                    class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  Settings
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <svg
                    class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Contacts
                </a>
              </li>
              <li>
                <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : // <div className="text-center mt-5">
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
      null}
    </>
  );
};
