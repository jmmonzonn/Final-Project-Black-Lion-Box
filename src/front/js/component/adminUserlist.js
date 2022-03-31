import React from "react";
import { Link } from "react-router-dom";

export const AdminUserList = () => {
  return (
    <div className="container">
      <p>Listado de usuarios:</p>

      <div>
        <p>username</p>
        <p>firstname,lastname</p>
        <p>currentsubscription</p>
        <p>subscriptiondue</p>
        <p>availablegrouptokens</p>
      </div>
      <div>
        <button>Contact user</button>
      </div>
      <div>
        <button>📝</button>
        <button>❌</button>
      </div>

      <div>
        <p>Agregar nuevo usuario:</p>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Nombre
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Precio
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Beneficios:
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <button>Agregar Suscripción</button>
        </div>
      </div>
    </div>
  );
};
