import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const SubscriptionTiers = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mx-auto" id="Suscripciones">
      <div className="grid grid-rows-4 grid-flow-col gap-0">
        {/* Este componente imprime una "card" leyendo los tipos de suscripciones desde la DB y lo imprime tantas veces como entradas tenga diosponibles */}

        <div className="p-4 max-w-sm bg-L-Gray-light rounded-lg border shadow-md sm:p-8 dark:bg-D-Gray-dark dark:border-gray-700 mx-auto">
          {/* Nombre de la sesión */}
          <h5 className="mb-4 text-4xl font-bellfort text-L-Gray-dark dark:text-D-Gray-light">
            {props.cards.name}
          </h5>
          {/* Precio de la sesión */}
          <div className="flex items-baseline text-L-Gray-dark dark:text-D-Gray-light">
            <span className="text-5xl font-extrabold tracking-tight">
              {props.cards.price}
            </span>
            <span className="text-3xl font-semibold">€</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /al mes
            </span>
          </div>
          {/* Descripción de la sesión */}
          <div>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {props.cards.description}
            </span>
          </div>
          <div>
            {/* Botón Call-to-action de la suscripción */}
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => {
                actions.pay(props.cards.stripe_id);
              }}
            >
              Suscríbete
            </button>
          </div>

          {/* <ul role="list" className="my-7 space-y-5">
            <li className="flex space-x-3">
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
          </ul> */}
        </div>
      </div>
    </div>
  );
};
SubscriptionTiers.propTypes = {
  cards: PropTypes.object,
};
