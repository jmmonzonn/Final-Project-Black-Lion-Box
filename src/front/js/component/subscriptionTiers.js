import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const SubscriptionTiers = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container items-center justify-center mx-auto">
      <div className="grid grid-cols-4 gap-0">
        {/* Primer tier de suscripciones */}

        <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            {props.cards.name}
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-5xl font-extrabold tracking-tight">
              {props.cards.price}
            </span>
            <span className="text-3xl font-semibold">€</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /al mes
            </span>
          </div>

          <ul role="list" className="my-7 space-y-5">
            <li className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {props.cards.description}
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                8 sesiones de entrenamiento funcional
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            onClick={() => {
              actions.pay(props.cards.stripe_id);
            }}
          >
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};
SubscriptionTiers.propTypes = {
  cards: PropTypes.object,
};
