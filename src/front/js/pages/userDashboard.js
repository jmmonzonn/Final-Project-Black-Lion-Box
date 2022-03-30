import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserHeader } from "../component/userHeader";
import { ViewSessions } from "../component/userViewSessions";
import { UpcomingSessions } from "../component/upcomingSessions";
import "../../styles/home.css";

export const UserDashboard = () => {
  const { store, actions } = useContext(Context);
  const [checkValidate, setCheckValidate] = useState(false);
  let history = useHistory();

  useEffect(() => {
    validate();
  }, []);

  const validate = async () => {
    if (!(await actions.validate())) {
      history.push("/");
    } else {
      setCheckValidate(true);
    }
  };

  return (
    <>
      {checkValidate ? (
        <div className="text-center mt-5">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div>
              <UserHeader />
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <UpcomingSessions />
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <ViewSessions />
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      ) : // <div className="text-center mt-5">
      //   <div class="border-b border-gray-200 dark:border-gray-700">
      //     <div>
      //       <UserHeader />
      //     </div>
      //     <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      //       <li className="mr-2">
      //         <a
      //           href={<ViewSessions />}
      //           className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
      //         >
      //           <svg
      //             className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
      //             fill="currentColor"
      //             viewBox="0 0 20 20"
      //             xmlns="http://www.w3.org/2000/svg"
      //           >
      //             <path
      //               fill-rule="evenodd"
      //               d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
      //               clip-rule="evenodd"
      //             ></path>
      //           </svg>
      //           Sesiones Confirmadas
      //         </a>
      //       </li>
      //       <li class="mr-2">
      //         <a
      //           href={<UpcomingSessions />}
      //           className="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
      //           aria-current="page"
      //         >
      //           <svg
      //             className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500"
      //             fill="currentColor"
      //             viewBox="0 0 20 20"
      //             xmlns="http://www.w3.org/2000/svg"
      //           >
      //             <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
      //           </svg>
      //           Próximas Sesiones
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      // </div>
      null}
    </>
  );
};
