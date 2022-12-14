import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";

export const UserModifyProfile = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [oldUser, setOldUser] = useState({});

  useEffect(() => {
    window.document.dispatchEvent(
      new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true,
      })
    );
    setOldUser(store.user);
  }, [store.user]);

  const input = (type, userValue, name, label) => {
    return (
      <>
        <input
          type={type}
          onChange={(e) => {
            setUser({ ...user, [userValue]: e.target.value });
          }}
          name={name}
          className="block py-2.5 px-0 w-full text-sm text-L-Gray-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-M-Lime focus:outline-none focus:ring-0 focus:border-M-Lime peer"
          defaultValue={`oldUser.${userValue}`}
          required
        />
        <label
          htmlFor={name}
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-L-Gray-dark peer-focus:dark:text-M-Lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </>
    );
  };

  return (
    <div className="container items-center justify-center mx-auto">
      <div className="relative z-0 mb-6 w-full group ">
        {input("user", "username", "floating_user", "Nombre de usuario:")}
      </div>

      <div className="relative z-0 mb-6 w-full group">
        {input("email", "email", "floating_email", "Correo electrónico")}
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          {input("text", "first_name", "floating_first_name", "Nombre")}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          {input("text", "last_name", "floating_last_name", "Apellido")}
        </div>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        {input("direction", "adress", "floating_direction", "Dirección")}
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          {input("tel", "phone", "floating_phone", "Teléfono")}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          {input("text", "info", "floating_info", "Información adicional")}
        </div>
        <button
          type="submit"
          onClick={() => {
            actions.putUser(user);
          }}
          className="py-2 px-2 text-sm font-medium text-L-Gray-dark focus:outline-none bg-M-Lime rounded-lg border border-gray-200 hover:bg-A-Magenta hover:text-L-Gray-light focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Actualizar datos
        </button>
      </div>
    </div>
  );
};
