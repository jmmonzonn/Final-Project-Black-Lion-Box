import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const active_class =
  "tab inline-block p-4 rounded-t-lg border-b-2 text-L-Gray-dark hover:text-A-Magenta dark:text-D-Gray-light dark:hover:text-M-Lime border-A-Magenta dark:border-M-Lime";
const deactive_class =
  "tab inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-A-Magenta hover:border-gray-300 dark:hover:text-M-Lime text-L-Gray-dark dark:text-D-Gray-light";

export const UserThisWeek = () => {
  const { store, actions } = useContext(Context);
  const [thisWeek, setThisWeek] = useState([]);

  useEffect(() => {
    window.document.dispatchEvent(
      new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true,
      })
    );
    setThisWeek(store.thisWeek);
  }, [store.thisWeek, store.user, store.userSessionList]);

  // Función que modifica las etiquetas de css de la navegación de tabs para activar y desactivar la pestaña activa.

  const changeTab = (e) => {
    let id = e.target.getAttribute("data-tabs-target");

    document
      .querySelectorAll("#thisweek > div")
      .forEach((el) => el.classList.add("hidden"));

    document.querySelector(id).classList.remove("hidden");

    // Desactiva los botones que no están en foco en la navegación por tabs.

    document
      .querySelectorAll(".tab")
      .forEach((element) => (element.className = deactive_class));

    // Activa los botones al activarse en la navegación por tabs.

    document.querySelector(`#${e.target.id}`).className = active_class;
  };

  return (
    <div className="container mx-auto">
      <div className="mb-4  flex justify-center">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="sessionsTab"
          data-tabs-toggle="#thisweek"
          role="tablist"
        >
          {thisWeek.map((value, index) => {
            return (
              <li key={index} className="mr-2" role="presentation">
                <button
                  className={index == 0 ? active_class : deactive_class}
                  id={`${value.label}-tab`}
                  data-tabs-target={`#${value.label}`}
                  type="button"
                  // role="tab"
                  aria-controls={value.label}
                  aria-selected={index == 0 ? "true" : "false"}
                  onClick={(e) => {
                    changeTab(e);
                  }}
                >
                  {value.labelDate}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div id="thisweek">
        {thisWeek.map((day, index) => {
          return (
            <div
              key={index}
              className={`${
                index != 0 ? "hidden" : ""
              } p-2 L-Gray-light rounded-lg dark:bg-D-Gray-dark`}
              id={day.label}
              role="tabpanel"
              aria-labelledby={`${day.label}-tab`}
            >
              <table className="w-full text-sm text-left D-Gray-light dark:L-Gray-dark">
                <thead className="text-xs text-L-Gray-dark uppercase bg-L-Gray-light dark:bg-D-Gray-dark dark:text-D-Gray-light">
                  <tr>
                    {/* <th scope="col" className="p-4">
                      <div className="hidden flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all-search" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th> */}
                    <th
                      scope="col"
                      className="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Sesión
                    </th>
                    <th
                      scope="col"
                      className="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Descripción
                    </th>
                    <th
                      scope="col"
                      className="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Duración
                    </th>
                    {/* <th
                      scope="col"
                      className="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Máximos participantes
                    </th> */}
                    <th
                      scope="col"
                      className="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Participantes apuntados
                    </th>
                    <th
                      scope="col"
                      className="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>
                {day.sessions.map((value, index) => {
                  return (
                    <tbody key={index}>
                      <tr
                        className={`bg-L-Gray-light/75 border-b dark:bg-D-Gray-dark dark:border-D-Gray-med/25 hover:bg-L-Gray-med dark:hover:bg-D-Gray-med ${
                          value.user_logged
                            ? "bg-gradient-to-r from-transparent to-M-Lime"
                            : ""
                        }`}
                      >
                        {/* <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              className="hidden w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="checkbox-table-search-1"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td> */}
                        <th
                          scope="row"
                          className="px-6 py-4 text-center dark:text-D-Gray-light"
                        >
                          {value.name}
                          {/* {value.id} */}
                        </th>
                        <td className="px-6 py-4 text-center dark:text-D-Gray-light">
                          {value.description}
                        </td>
                        <td className="px-6 py-4 text-center dark:text-D-Gray-light">
                          {value.duration}
                          {" minutos"}
                        </td>
                        <td className="px-6 py-4 text-center dark:text-D-Gray-light">
                          {value.users_per_sessions} {""} / {""}
                          {value.max_users}
                        </td>
                        {/* <td className="px-6 py-4 text-center dark:text-D-Gray-light">
                          {value.users_per_sessions}
                        </td> */}
                        <td className="px-6 py-4 text-center dark:text-D-Gray-light">
                          <button
                            type="button"
                            className="font-bellfort text-l text-A-Magenta dark:text-A-Magenta hover:text-L-Gray-dark dark:hover:text-D-Gray-dark"
                            onClick={() => {
                              if (value.user_logged) {
                                actions.deleteUserSession(
                                  store.user.id,
                                  value.id,
                                  day.date
                                );
                              } else {
                                actions
                                  .postItem(
                                    "joinsession",
                                    { date: day.date, sessions_id: value.id },
                                    "user_sessions",
                                    "userSessionList"
                                  )
                                  .then((data) => {
                                    actions.putItem(
                                      `edit_user/${localStorage.getItem("id")}`,
                                      {
                                        remaining_tokens:
                                          store.user.remaining_tokens - 1,
                                      },
                                      "thisweek",
                                      "thisWeek"
                                    );
                                  })
                                  .then((data) => actions.getUser());
                                // actions.postUserSession(day.date, value.id);
                              }
                            }}
                          >
                            {value.user_logged ? "❌ Cancelar" : "✅ Apuntarse"}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};
