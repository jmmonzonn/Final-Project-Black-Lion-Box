import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const ThisWeek = () => {
  const [thisWeek, setThisWeek] = useState([]);

  useEffect(() => {
    getThisWeek();
  }, []);

  const getThisWeek = async () => {
    fetch(process.env.BACKEND_URL + "/api/thisweek")
      .then((resp) => resp.json())
      .then((data) => setThisWeek(data));
  };

  return (
    <>
      <div>
        {thisWeek.map((value, index) => {
          return (
            <div className="container" key={index}>
              <div className=" mx-auto">
                {value.label} {value.date}
                <div>
                  {value.sessions.map((value, index) => {
                    return (
                      <div className="container" key={index}>
                        <div className="mx-auto">
                          {value.description} {value.duration}{" "}
                          {value.start_time}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="container">
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
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                  body: JSON.stringify(role),
                })
                  .then((resp) => resp.json())
                  .then((data) => {
                    getRoles();
                  });
              }}
            >
              Añadir rol
            </button>
          </div>
          <div>
            {roleList.map((value, index) => {
              return (
                <div className="container" key={index}>
                  <div className="row">
                    <div className="col-6 mx-auto">{value.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
};
