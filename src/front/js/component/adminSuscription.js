import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const AdminSuscription = () => {
  const { store, actions } = useContext(Context);
  const [checkValidate, setCheckValidate] = useState(false);
  const [suscription, setSuscription] = useState({});
  const [suscriptionList, setSuscriptionList] = useState([]);
  let history = useHistory();

  useEffect(async () => {
    await validate();
    getSuscriptions();
  }, []);

  const validate = async () => {
    if (!(await actions.validate())) {
      history.push("/");
    } else {
      setCheckValidate(true);
    }
  };

  const getSuscriptions = () => {
    fetch(process.env.BACKEND_URL + "/api/get_suscription_types")
      .then((resp) => resp.json())
      .then((data) => setSuscriptionList(data));
  };

  return (
    <>
      {checkValidate ? (
        <>
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
                        Authorization:
                          "Bearer " + localStorage.getItem("token"),
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
          <div>
            {suscriptionList.map((value, index) => {
              return (
                <div className="container" key={index}>
                  <div className="row">
                    <div className="col-6 mx-auto">{value.name}</div>
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
