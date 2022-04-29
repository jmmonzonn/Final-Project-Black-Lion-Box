import React, { useState, useEffect } from "react";

export const UserHeader = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    let id = localStorage.getItem("id");

    fetch(process.env.BACKEND_URL + "/api/user/" + id)
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  };

  return (
    <div>
      {user.map((value, index) => {
        return (
          <div className="container">
            <div
              className="w-2/3 mx-auto rounded-xl text-center bg-L-Gray-light border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10 dark:bg-D-Gray-dark"
              key={index}
            >
              <p className="text-2xl text-L-Gray-med dark:text-D-Gray-med pt-3 px-3">
                Hola,{" "}
                <span className="text-L-Gray-dark dark:text-D-Gray-light">
                  {value.first_name}
                </span>
                . Tienes{" "}
                <span className="text-L-Gray-dark dark:text-D-Gray-light">
                  8
                </span>{" "}
                sesiones disponibles
              </p>
              <p className="text-m text-L-Gray-dark dark:text-D-Gray-light px-5 pb-3">
                Actualmente estas suscrito al Plan S y tu próxima fecha de pago
                será el 01/05/2022
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
