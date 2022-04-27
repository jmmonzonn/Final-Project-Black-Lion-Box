import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const ThisWeek = () => {
  const [thisWeek, setThisWeek] = useState([]);

  useEffect(() => {
    getThisWeek();
  }, []);

  const getThisWeek = async () => {
    fetch(process.env.BACKEND_URL + "/api/thisweek")
      .then((resp) => resp.json())
      .then((data) => setThisWeek(data));
  };

  return (
    <>
      <div>
        {thisWeek.map((value, index) => {
          return (
            <div className="container" key={index}>
              <div className=" mx-auto">
                {value.label} {value.date}
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="p-4">
                          <div class="flex items-center">
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
                        <th scope="col" class="px-6 py-3">
                          Nombre de la Sesión
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Descripción
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Duración
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Máximos participantes
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Participantes apuntados
                        </th>
                        <th scope="col" class="px-6 py-3">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    {value.sessions.map((value, index) => {
                      return (
                        <tbody key={index}>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                              {value.name}
                            </th>
                            <td class="px-6 py-4">{value.description}</td>
                            <td class="px-6 py-4">{value.duration}</td>
                            <td class="px-6 py-4">{value.max_users}</td>
                            <td class="px-6 py-4">
                              {value.users_per_sessions}
                            </td>
                            <td class="px-6 py-4 text-right">
                              <a
                                href="#"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Apuntarse
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>

              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
};
