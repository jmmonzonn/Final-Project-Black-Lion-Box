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
        <p>Agregar suscripciones:</p>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Nombre
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Precio
          </span>
          <input
            type="number"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Beneficios:
          </span>
          <input
            type="number"
            class="form-control"
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
