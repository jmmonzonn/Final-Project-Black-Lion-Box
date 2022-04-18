import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

/* Abrimos el componente */
export const Payment = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <img
        src="https://m.media-amazon.com/images/I/61nWszKX1-L._AC_SL1500_.jpg"
        alt="Krom Kluster Keyboard"
        className="img-fluid"
      />
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
