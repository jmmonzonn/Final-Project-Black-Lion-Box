import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const AdminCreateUser = () => {
  const { store, actions } = useContext(Context);
  const [checkValidate, setCheckValidate] = useState(false);
  const [user, setUser] = useState({});
  const [usersList, setUsersList] = useState([]);
  let history = useHistory();

  useEffect(async () => {
    await validate();
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [usersList]);

  const validate = async () => {
    if (!(await actions.validate())) {
      history.push("/");
    } else {
      setCheckValidate(true);
    }
  };

  const getUsers = () => {
    fetch(process.env.BACKEND_URL + "/api/get_users")
      .then((resp) => resp.json())
      .then((data) => setUsersList(data));
  };

  return (
    <>
      {checkValidate ? (
        <>
          <div className="container">
            <div className="row">
              <div className="col-3 mx-auto">
                <h1>
                  <strong>Crear usuario</strong>
                </h1>
                <input
                  type="text"
                  onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                  }}
                  className="form-control py-1 my-2"
                  placeholder="Introduce usuario"
                ></input>

                <button
                  type="button"
                  onClick={() => {
                    fetch(process.env.BACKEND_URL + "/api/suscription_type", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization:
                          "Bearer " + localStorage.getItem("token"),
                      },
                      body: JSON.stringify(user),
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
          <div>
            {usersList.map((value, index) => {
              return (
                <div className="container" key={index}>
                  <div className="row">
                    <div className="col-6 mx-auto">{value.username}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};
