import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PostModal = ({
  id,
  message1,
  message2,
  inputs,
  inputs2,
  route,
  itemToPost,
  itemToGet,
  listToSet,
  message3,
}) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <button
        className="py-2 px-6 text-sm font-medium text-L-Gray-dark focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-A-Magenta hover:text-L-Gray-light focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        type="button"
        data-modal-toggle={id}
      >
        {message1}
      </button>
      <div
        id={id}
        tabindex="-1"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div class="relative p-4 w-full max-w-4xl h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-between items-center p-5 rounded-t">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white text-align-center">
                {message2}
              </h3>

              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle={id}
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="p-6 space-y-6">
              <form
                className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                action="#"
              >
                <div className="columns-2">
                  {inputs.length % 2 == 0 ? (
                    inputs
                  ) : (
                    <div>
                      {inputs}
                      <div className="h-20"></div>
                    </div>
                  )}
                </div>
                <div className="columns-1 w-6/12 !m-1">{inputs2}</div>
                <button
                  data-modal-toggle={id}
                  type="button"
                  className="py-2 px-6 text-sm font-medium text-L-Gray-dark focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-A-Magenta hover:text-L-Gray-light focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => {
                    document
                      .querySelectorAll("[modal-backdrop]")
                      .forEach((element) => {
                        element.remove();
                      });
                    actions.postItem(route, itemToPost, itemToGet, listToSet);
                  }}
                >
                  {message3}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
