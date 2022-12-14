import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";

export const AdminHeader = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(store.user);
  }, [store.user]);

  return (
    <div className="container">
      <div className="w-2/3 mx-auto rounded-xl text-center bg-L-Gray-light border border-L-Gray-dark border-opacity-30 dark:border-D-Gray-light dark:border-opacity-10 dark:bg-D-Gray-dark">
        <p className="text-2xl text-L-Gray-med dark:text-D-Gray-med pt-3 px-3">
          Hola,{" "}
          <span className="text-L-Gray-dark dark:text-D-Gray-light">
            {user.first_name}
          </span>
        </p>
        <p className="text-m text-L-Gray-dark dark:text-D-Gray-light px-5 pb-3">
          Actualmente estas logueado como Administrador
        </p>
        <div className="w-full h-2"></div>
      </div>
    </div>
  );
};
