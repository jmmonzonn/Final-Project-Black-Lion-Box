import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({});

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-3 mx-auto">
          <input
            type="text"
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
            className="form-control py-1 my-2"
            placeholder="Introduce usuario"
          ></input>

          <input
            type="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            className="form-control py-1 my-2"
            placeholder="Introduce contraseña"
          ></input>

          <input
            type="email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            className="form-control py-1 my-2"
            placeholder="Introduce email"
          ></input>

          <input
            type="text"
            onChange={(e) => {
              setUser({ ...user, phone: e.target.value });
            }}
            className="form-control py-1 my-2"
            placeholder="Introduce teléfono"
          ></input>

          <input
            type="text"
            onChange={(e) => {
              setUser({ ...user, first_name: e.target.value });
            }}
            className="form-control py-1 my-2"
            placeholder="Introduce nombre"
          ></input>

          <input
            type="text"
            onChange={(e) => {
              setUser({ ...user, last_name: e.target.value });
            }}
            className="form-control py-1 my-2"
            placeholder="Introduce apellido"
          ></input>

          <input
            type="text"
            onChange={(e) => {
              setUser({ ...user, adress: e.target.value });
            }}
            className="form-control py-1 my-2"
            placeholder="Introduce dirección"
          ></input>

          <input
            type="text"
            onChange={(e) => {
              setUser({ ...user, avatar_url: e.target.value });
            }}
            className="form-control py-1 my-2"
            placeholder="Introduce url de tu avatar"
          ></input>

          <input
            type="text"
            onChange={(e) => {
              setUser({ ...user, info: e.target.value });
            }}
            className="form-control py-1 my-2"
            placeholder="Introduce info"
          ></input>
          <button
            type="button"
            onClick={() => {
              fetch;
            }}
            className="btn btn-danger mx-auto px-auto"
          >
            Dale marico
          </button>
        </div>
      </div>
    </div>
  );
};
