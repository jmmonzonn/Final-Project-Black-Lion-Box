import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const SubscriptionTiers = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="patternBg dark:patternBgD border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10 rounded-lg border py-8 px-4 mx-8"
      id="Suscripciones"
    >
      <div className="container mx-auto text-center ">
        <div>
          <p className="text-6xl pb-8 text-L-Gray-dark dark:text-D-Gray-light font-bellfort">
            TENEMOS UN PLAN QUE SE ADAPTA A TÍ
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {store.suscriptionList.map((value, index) => {
            return (
              <div
                className="p-1 h-96 w-auto bg-L-Gray-light rounded-lg border shadow-md sm:p-1 dark:bg-D-Gray-dark dark:border-gray-700 hover:bg-M-Lime dark:hover:bg-D-Gray-med"
                key={index}
              >
                {/* Nombre de la sesión */}
                <h5 className="mb-4 text-4xl font-bellfort text-L-Gray-dark dark:text-D-Gray-light">
                  {value.name}
                </h5>
                {/* Precio de la sesión */}
                <div className="items-baseline text-L-Gray-dark dark:text-D-Gray-light">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {value.price}
                  </span>
                  <span className="text-3xl font-semibold">€</span>
                  <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    /al mes
                  </span>
                </div>
                {/* Descripción de la sesión */}
                <div>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    {value.description}
                  </span>
                </div>
                <div>
                  {/* Botón Call-to-action de la suscripción */}
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => {
                      actions.pay(value.stripe_id);
                    }}
                  >
                    Suscríbete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
