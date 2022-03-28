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

          <div class="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            ></input>
            <label className="form-check-label" for="exampleCheck1">
              tuculo
            </label>
          </div>

          <button
            type="button"
            onClick={() => {
              fetch(
                "https://3001-4geeksacademy-reactflask-n3j8neui2wu.ws-eu38.gitpod.io/api/login",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(user),
                }
              )
                .then((resp) => resp.json())
                .then((data) => {
                  if (data.token) {
                    localStorage.setItem("token", data.token);
                    history.push("/user/dashboard");
                  } else {
                    history.push("/register");
                  }
                });
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