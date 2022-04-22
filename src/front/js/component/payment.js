import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

/* Abrimos el componente */
export const Payment = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          actions.pay(store.user_id);
        }}
        className="btn btn-success"
        id="pay"
      >
        Comprar
      </button>
    </div>
  );
};
