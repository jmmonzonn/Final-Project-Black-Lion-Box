import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({});
  let history = useHistory();

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

          <button
            type="button"
            onClick={() => {
              fetch(process.env.BACKEND_URL + "/api/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((resp) => resp.json())
                .then((data) => {
                  if (data.token) {
                    localStorage.setItem("token", data.token);
                    if (data.role == "admin") {
                      history.push("/admin/dashboard");
                    } else {
                      history.push("/user/dashboard");
                    }
                  } else {
                    history.push("/register");
                  }
                });
            }}
            className="btn btn-danger mx-auto px-auto"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
