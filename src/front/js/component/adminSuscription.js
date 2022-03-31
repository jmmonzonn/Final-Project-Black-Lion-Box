import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const AdminSuscription = () => {
  const [suscription, setSuscription] = useState({});
  let history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 mx-auto">
          <input
            type="text"
            onChange={(e) => {
              setSuscription({ ...suscription, name: e.target.value });
            }}
            className="form-control py-1 my-2"
            placeholder="Introduce tipo de tarifa"
          ></input>

          <button
            type="button"
            onClick={() => {
              fetch(process.env.BACKEND_URL + "/api/suscription_type", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(suscription),
              })
                .then((resp) => resp.json())
                .then((data) => {
                  console.log(data);
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
