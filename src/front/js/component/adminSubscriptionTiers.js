import React from "react";
import { Link } from "react-router-dom";

export const SubscriptionTiers = () => {
  return (
    <div className="container">
      <p>Planes disponibles:</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Activo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Beneficios</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🟢</td>
            <td>Plan S</td>
            <td>3000 euros</td>
            <td>
              Una paliza a la semana en boxeo y podrás usar el baño 2 veces al
              mes.
            </td>
            <td>
              <button>📝</button>
              <button>❌</button>
            </td>
          </tr>
          <tr>
            <td>🟢</td>
            <td>Plan M</td>
            <td>70000 euros</td>
            <td>
              Una visita en persona a 4Geeks a la semana, con una charla
              motivacional de 6 horas incluida (obligatoria).
            </td>
            <td>
              <button>📝</button>
              <button>❌</button>
            </td>
          </tr>
        </tbody>
      </table>
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
