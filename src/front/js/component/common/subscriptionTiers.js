import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext.js";
import { useHistory } from "react-router-dom";

export const SubscriptionTiers = (props) => {
  const { store, actions } = useContext(Context);
  let history = useHistory();

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {store.suscriptionList.map((value, index) => {
            return (
              <div
                className="p-1 h-96 w-auto bg-L-Gray-light rounded-lg border shadow-md sm:p-1 dark:bg-D-Gray-dark dark:border-gray-700 hover:bg-M-Lime dark:hover:bg-D-Gray-med"
                key={index}
              >
                {/* Nombre de la sesión */}
                <h5 className="mb-4 pt-8 text-6xl font-bellfort text-L-Gray-dark dark:text-D-Gray-light">
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
                <div className="pt-4">
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    {value.description}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Uso ilimitado de las instalaciones
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Asesoría personalizada{" "}
                  </span>
                </div>
                <div div className="pt-4">
                  {/* Botón Call-to-action de la suscripción */}
                  <form
                    action={`${process.env.BACKEND_URL}/api/stripe_pay/${value.id}/${store.user.id}`}
                    method="POST"
                  >
                    <button
                      type="submit"
                      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      onClick={() => {
                        if (
                          !localStorage.getItem("email") &&
                          !localStorage.getItem("token")
                        ) {
                          history.push("/register");
                        }
                        actions.setSubscription_id(value.id);
                      }}
                    >
                      Suscríbete
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
