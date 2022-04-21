import React from "react";
import { Link } from "react-router-dom";

export const ViewSessions = () => {
  return (
    <div className="container">
      <p>Próximas sesiones disponibles:</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Día</th>
            <th scope="col">Hora de inicio</th>
            <th scope="col">Duración</th>
            <th scope="col">Nombre de la clase</th>
            <th scope="col">Nombre del profesor</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/01/2020</td>
            <td>15:00</td>
            <td>120 minutos</td>
            <td>Kung Fu 101</td>
            <td>Tesako Tumoko</td>
            <td>
              <button>📝</button>
              <button>❌</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">Apuntarse a una sesión</button>
        </Link>
      </div>
    </div>
  );
};
