import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PutModal = ({
  id,
  // buttonAction,
  icon,
  message,
  inputs,
  route,
  itemToPut,
  itemToGet,
  listToSet,
}) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <button
        className="py-2.5 border-b-2 border-transparent text-L-Gray-dark dark:text-D-Gray-light hover:text-A-Magenta dark:hover:text-M-Lime mx-1.5 sm:mx-2"
        type="button"
        data-modal-toggle={id}
        // onClick={buttonAction}
      >
        {icon}
      </button>
      <div
        id={id}
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-L-Gray-light rounded-lg shadow dark:bg-D-Gray-dark">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={() => {
                  document
                    .querySelectorAll("[modal-backdrop]")
                    .forEach((element) => {
                      element.remove();
                    });
                }}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle={id}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <form
              className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
              action="#"
            >
              <div>
                {inputs.map((input) => {
                  return input;
                })}
              </div>

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
                  actions.putItem(route, itemToPut, itemToGet, listToSet);
                }}
              >
                {message}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
