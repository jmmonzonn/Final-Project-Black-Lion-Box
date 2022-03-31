import React, { useState } from "react";

export const AdminRole = () => {
  const [role, setRole] = useState({});

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 mx-auto">
          <input
            type="text"
            className="form-control py-1 my-2"
            placeholder="Introduce nuevo rol"
            onChange={(event) => {
              setRole({ ...role, name: event.target.value });
            }}
          ></input>
          <button
            type="button"
            className="btn btn-danger mx-auto px-auto"
            onClick={() => {
              fetch(process.env.BACKEND_URL + "/api/role", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(role),
              })
                .then((resp) => resp.json())
                .then((data) => {
                  console.log(data);
                });
            }}
          >
            Añadir rol
          </button>
        </div>
      </div>
    </div>
  );
};
