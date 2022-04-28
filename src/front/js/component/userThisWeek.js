import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserThisWeek = () => {
  const [thisWeek, setThisWeek] = useState([]);

  useEffect(() => {
    getThisWeek();
  }, []);

  const getThisWeek = async () => {
    fetch(process.env.BACKEND_URL + "/api/thisweek", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setThisWeek(data);
        // refresh events dom NO DELETE
        window.document.dispatchEvent(
          new Event("DOMContentLoaded", {
            bubbles: true,
            cancelable: true,
          })
        );
      });
  };

  // Función que modifica las etiquetas de css de la navegación de tabs para activar y desactivar la pestaña activa.

  const changeTab = (e) => {
    let id = e.target.getAttribute("data-tabs-target");

    document
      .querySelectorAll("#thisWeek > div")
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
    <div className="container mx-auto ">
      <div class="mb-4 border-b border-gray-200 flex justify-center">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="sessionsTab"
          data-tabs-toggle="#sessionsTabContent"
          role="tablist"
        >
          {thisWeek.map((value, index) => {
            return (
              <li key={index} class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2"
                  id={`${value.label}-tab`}
                  data-tabs-target={`#${value.label}`}
                  type="button"
                  role="tab"
                  aria-controls={value.label}
                  aria-selected="false"
                >
                  {value.labelDate}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div id="sessionsTabContent">
        {thisWeek.map((day, index) => {
          return (
            <div
              key={index}
              class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
              id={day.label}
              role="tabpanel"
              aria-labelledby={`${day.label}-tab`}
            >
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class=" hidden flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all-search" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Nombre de la Sesión
                    </th>
                    <th
                      scope="col"
                      class="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Descripción
                    </th>
                    <th
                      scope="col"
                      class="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Duración
                    </th>
                    <th
                      scope="col"
                      class="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Máximos participantes
                    </th>
                    <th
                      scope="col"
                      class="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Participantes apuntados
                    </th>
                    <th
                      scope="col"
                      class="font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2"
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>
                {day.sessions.map((value, index) => {
                  return (
                    <tbody key={index}>
                      <tr
                        class={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ${
                          value.user_logged ? "bg-A-Magenta" : ""
                        }`}
                      >
                        <td class="w-4 p-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              class="hidden w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="checkbox-table-search-1"
                              class="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          class="px-6 py-4 text-center dark:text-D-Gray-light"
                        >
                          {value.name} {value.id}
                        </th>
                        <td class="px-6 py-4 text-center dark:text-D-Gray-light">
                          {value.description}
                        </td>
                        <td class="px-6 py-4 text-center dark:text-D-Gray-light">
                          {value.duration}
                        </td>
                        <td class="px-6 py-4 text-center dark:text-D-Gray-light">
                          {value.max_users}
                        </td>
                        <td class="px-6 py-4 text-center dark:text-D-Gray-light">
                          {value.users_per_sessions}
                        </td>
                        <td class="px-6 py-4 text-center dark:text-D-Gray-light">
                          <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            data-id={value.id}
                            data-date={day.date}
                            onClick={(e) => {
                              if (value.user_logged) {
                                fetch(
                                  process.env.BACKEND_URL +
                                    "/api/user_sessions2/" +
                                    localStorage.getItem("id") +
                                    "/" +
                                    value.id,
                                  {
                                    method: "GET",
                                    headers: {
                                      Authorization:
                                        "Bearer " +
                                        localStorage.getItem("token"),
                                    },
                                  }
                                )
                                  .then((resp) => resp.json())
                                  .then((data) =>
                                    fetch(
                                      process.env.BACKEND_URL +
                                        "/api/delete_session/" +
                                        data[0].id,
                                      {
                                        method: "DELETE",
                                        headers: {
                                          Authorization:
                                            "Bearer " +
                                            localStorage.getItem("token"),
                                        },
                                      }
                                    )
                                      .then((resp) => resp.json())
                                      .then((data) => location.reload())
                                  );
                              } else {
                                fetch(
                                  process.env.BACKEND_URL + "/api/joinsession",
                                  {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                      Authorization:
                                        "Bearer " +
                                        localStorage.getItem("token"),
                                    },
                                    body: JSON.stringify({
                                      date: e.target.getAttribute("data-date"),
                                      sessions_id:
                                        e.target.getAttribute("data-id"),
                                    }),
                                  }
                                )
                                  .then((resp) => resp.json())
                                  .then((data) => location.reload());
                              }
                            }}
                          >
                            {value.user_logged ? "Cancelar" : "Apuntarse"}
                          </a>
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

// {value.user_logged ? (
//   <FontAwesomeIcon icon={["fas", "user-x-mark"]} />
// ) : (
//   <FontAwesomeIcon icon={["fas", "user-plus"]} />
// )}
