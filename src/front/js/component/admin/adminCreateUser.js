import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostModal } from "./postModal";
import { DeleteModal } from "./deleteModal";
import { PutModal } from "./putModal";

export const AdminCreateUser = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([]);
  const [itemToPut, setItemToPut] = useState({});
  let history = useHistory();

  useEffect(() => {
    window.document.dispatchEvent(
      new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true,
      })
    );
    setUserList(store.userList);
  }, [store.userList]);

  const tableCelle = (className, value) => {
    return (
      <>
        <div className={className}>{value}</div>
      </>
    );
  };

  const tableCelleTitles = [
    "Nombre",
    "Apellidos",
    "Nombre de usuario",
    "Email",
    "Teléfono",
    "Dirección",
    "Rol",
    "Modificar",
    "Eliminar",
  ];

  const tableCelleValues = [
    "first_name",
    "last_name",
    "username",
    "email",
    "phone",
    "adress",
    "role",
  ];

  const tableCelleClassNameTitles =
    "table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2";

  const tableCelleClassNameValues =
    "table-cell text-center dark:text-D-Gray-light";

  const input = (label, type, set, list, userValue, placeholder) => {
    return (
      <>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          {label}
        </label>
        <input
          type={type}
          onChange={(e) => {
            set({ ...list, [userValue]: e.target.value });
          }}
          className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder={placeholder}
        ></input>
      </>
    );
  };

  const inputCheckbox = (id, type, set, list, userValue, label) => {
    return (
      <div className="m-2">
        <input
          id={id}
          aria-describedby={id}
          type={type}
          onClick={() => {
            `${list}.${userValue}`
              ? `${list}.${userValue}` == true
                ? set({ ...list, [userValue]: false })
                : set({ ...list, [userValue]: true })
              : set({ ...list, [userValue]: true });
          }}
          className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-A-Magenta dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-M-Lime dark:ring-offset-gray-800"
          required
        ></input>
        <label className="form-check-label mx-2" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  };

  const selectPost = (label, set, list, userValue, storeList) => {
    return (
      <>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          {label}
        </label>
        <select
          onChange={(e) => {
            set({ ...list, [userValue]: e.target.value });
          }}
          id={userValue}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled selected value="">
            Selecciona {label.toLowerCase()}
          </option>
          {storeList.map((value, index) => {
            return (
              <option key={index} value={value.id}>
                {value.name}
              </option>
            );
          })}
        </select>
      </>
    );
  };

  const selectPut = (label, set, list, userValue, disabledValue, storeList) => {
    return (
      <>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          {label}
        </label>
        <select
          onChange={(e) => {
            set({ ...list, [userValue]: e.target.value });
          }}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled selected value={disabledValue}>
            Cambiar {label.toLowerCase()} ({disabledValue ? disabledValue : ""})
          </option>
          {storeList.map((value, index) => {
            return (
              <option key={index} value={value.id}>
                {value.name}
              </option>
            );
          })}
        </select>
      </>
    );
  };

  const inputModifyUserModal = (
    label,
    type,
    set,
    list,
    userValue,
    defaultValue
  ) => {
    return (
      <>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          {label}
        </label>
        <input
          type={type}
          onChange={(e) => {
            set({
              ...list,
              [userValue]: e.target.value,
            });
          }}
          className="my-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          defaultValue={defaultValue ? defaultValue : ""}
        ></input>
      </>
    );
  };

  const OTHER_INPUTS = [
    selectPost("Rol", setUser, user, "role_id", store.roleList),
    <div className="form-check">
      {inputCheckbox(
        "conditions-terms",
        "checkbox",
        setUser,
        user,
        "conditions_terms",
        "Aceptar términos y condiciones."
      )}
    </div>,
    <div className="form-check">
      {inputCheckbox(
        "marketing-comunication",
        "checkbox",
        setUser,
        user,
        "marketing_comunication",
        "Marketing y comunicaciones"
      )}
    </div>,
  ];

  const POST_USER_INPUTS = (set, list, otherInputs) => {
    let inputs = postUserInputsValues.map((value, index) => {
      return input(
        value.label,
        value.type,
        set,
        list,
        value.userValue,
        value.placeholder
      );
    });

    return inputs;
  };

  const postUserInputsValues = [
    {
      label: "Nombre",
      type: "text",
      userValue: "first_name",
      placeholder: "Introduce nombre",
    },
    {
      label: "Apellidos",
      type: "text",
      userValue: "last_name",
      placeholder: "Introduce apellido",
    },
    {
      label: "Nombre de usuario",
      type: "text",
      userValue: "username",
      placeholder: "Introduce usuario",
    },
    {
      label: "Contraseña",
      type: "password",
      userValue: "password",
      placeholder: "Introduce contraseña",
    },
    {
      label: "Email",
      type: "email",
      userValue: "email",
      placeholder: "Introduce email",
    },
    {
      label: "Teléfono",
      type: "tel",
      userValue: "phone",
      placeholder: "Introduce teléfono",
    },
    {
      label: "Dirección",
      type: "text",
      userValue: "adress",
      placeholder: "Introduce dirección",
    },
    {
      label: "Avatar",
      type: "text",
      userValue: "avatar_url",
      placeholder: "Introduce url de tu avatar",
    },
    {
      label: "Info",
      type: "text",
      userValue: "info",
      placeholder: "Introduce info",
    },
  ];
  const PUT_USER_INPUTS = (set, item, defaultValue) => {
    return [
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Modificar usuario
      </h3>,

      inputModifyUserModal(
        "Nombre",
        "text",
        set,
        item,
        "first_name",
        defaultValue.first_name
      ),
      inputModifyUserModal(
        "Apellidos",
        "text",
        set,
        item,
        "last_name",
        defaultValue.last_name
      ),
      inputModifyUserModal(
        "Nombre de usuario",
        "text",
        set,
        item,
        "username",
        defaultValue.username
      ),
      inputModifyUserModal(
        "Email",
        "email",
        set,
        item,
        "email",
        defaultValue.email
      ),
      inputModifyUserModal(
        "Teléfono",
        "tel",
        set,
        item,
        "phone",
        defaultValue.phone
      ),
      inputModifyUserModal(
        "Dirección",
        "text",
        set,
        item,
        "adress",
        defaultValue.adress
      ),
      inputModifyUserModal(
        "Avatar",
        "text",
        set,
        item,
        "avatar_url",
        defaultValue.avatar_url
      ),
      inputModifyUserModal(
        "Info",
        "text",
        set,
        item,
        "info",
        defaultValue.info
      ),
      selectPut("Rol", set, item, "role_id", defaultValue.role, store.roleList),
    ];
  };

  return (
    <>
      <div className="container px-10 py-4">
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row">
              {tableCelleTitles.map((value, index) => {
                return tableCelle(tableCelleClassNameTitles, value);
              })}
            </div>
          </div>
          <div className="table-row-group">
            {userList.map((user, index) => {
              return (
                <div className="table-row" key={user.id}>
                  {tableCelleValues.map((value, index) => {
                    return tableCelle(tableCelleClassNameValues, user[value]);
                  })}
                  <div className="table-cell text-center">
                    <PutModal
                      id={`put-user-modal-${user.id}`}
                      icon={<FontAwesomeIcon icon={["fas", "pen-to-square"]} />}
                      inputs={PUT_USER_INPUTS(
                        setItemToPut,
                        itemToPut,
                        userList[index]
                      )}
                      route={`edit_user/${user.id}`}
                      itemToPut={itemToPut}
                      itemToGet="users"
                      message="Modificar usuario"
                      listToSet={"userList"}
                    />
                  </div>
                  <div className="table-cell text-center">
                    <DeleteModal
                      id={`delete-user-modal-${user.id}`}
                      icon={<FontAwesomeIcon icon={["fas", "xmark"]} />}
                      message="¿Seguro que quieres eliminar este usuario?"
                      route={`delete_user/${user.id}`}
                      itemToGet="users"
                      listToSet={"userList"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center mx-auto my-8">
        <PostModal
          id="post-user-modal"
          message1="Añadir usuario"
          message2="Introduce los datos del nuevo usuario"
          inputs={POST_USER_INPUTS(setUser, user)}
          inputs2={OTHER_INPUTS}
          route="postUser"
          itemToPost={user}
          itemToGet="users"
          listToSet={"userList"}
          message3="Registrar usuario"
        />
      </div>
    </>
  );
};
