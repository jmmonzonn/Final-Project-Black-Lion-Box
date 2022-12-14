import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostModal } from "./postModal";
import { PutModal } from "./putModal";
import { DeleteModal } from "./deleteModal";

export const AdminSessions = () => {
  const { store, actions } = useContext(Context);
  const [session, setSession] = useState({});
  const [sessionsList, setSessionsList] = useState([]);
  const [sessionValue, setSessionValue] = useState(null);
  const [sessionsTypeList, setSessionsTypeList] = useState([]);
  const [weekdays, setWeekdays] = useState([]);
  const [itemToPut, setItemToPut] = useState({});
  let history = useHistory();

  useEffect(() => {
    window.document.dispatchEvent(
      new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true,
      })
    );
    setSessionsList(store.sessionList);
    setSessionsTypeList(store.sessionTypeList);
    setWeekdays(store.weekdayList);
  }, [store.sessionList, store.sessionTypeList, store.weekdayList]);

  const tableCelle = (className, value) => {
    return (
      <>
        <div className={className}>{value}</div>
      </>
    );
  };

  const tableCelleClassNameTitles = () => {
    return "table-cell font-bellfort text-center font-bold text-xl text-L-Gray-dark dark:text-D-Gray-light border-b-2 border-A-Magenta dark:border-M-Lime py-2";
  };

  const tableCelleClassNameValues = () => {
    return "table-cell text-center dark:text-D-Gray-light";
  };

  const inputModifySessionModal = (
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
      <>
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
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      </>
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

  const PUT_SESSION_INPUTS = (set, item, defaultValue) => {
    return [
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Modificar sesión
      </h3>,

      inputModifySessionModal(
        "Nombre",
        "text",
        set,
        item,
        "name",
        defaultValue.name
      ),
      inputModifySessionModal(
        "Descripción",
        "text",
        set,
        item,
        "description",
        defaultValue.description
      ),
      inputModifySessionModal(
        "Hora de inicio",
        "time",
        set,
        item,
        "start_time",
        defaultValue.start_time
      ),
      inputModifySessionModal(
        "Duración",
        "number",
        set,
        item,
        "duration",
        defaultValue.duration
      ),
      inputModifySessionModal(
        "Máximos participantes",
        "number",
        set,
        item,
        "max_users",
        defaultValue.max_users
      ),
      selectPut(
        "Tipos de sesión",
        set,
        item,
        "sessions_type_id",
        defaultValue.session_type,
        store.sessionTypeList
      ),
      selectPut(
        "Días de la semana",
        set,
        item,
        "weekdays_id",
        defaultValue.weekdays,
        store.weekdayList
      ),
    ];
  };

  const POST_SESSION_INPUTS = (set, item) => {
    return [
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Introduce los datos de la sesión:
      </h3>,
      input("Nombre", "text", set, item, "name", "Inroduce nombre"),
      input(
        "Descripción",
        "text",
        set,
        item,
        "description",
        "Introduce descripción"
      ),
      input(
        "Hora de inicio",
        "time",
        set,
        item,
        "start_time",
        "Introduce hora de inicio"
      ),
      input("Duración", "number", set, item, "duration", "Introduce duración"),
      input(
        "Máximos participantes",
        "number",
        set,
        item,
        "max_users",
        "Introduce máximos participantes"
      ),
      selectPost(
        "Tipos de sesión",
        set,
        item,
        "sessions_type_id",
        store.sessionTypeList
      ),
      selectPost(
        "Días de la semana",
        set,
        item,
        "weekdays_id",
        store.weekdayList
      ),

      <div className="form-check">
        {inputCheckbox(
          "regular-session",
          "checkbox",
          set,
          item,
          "regular",
          "Sesión regular"
        )}
      </div>,
    ];
  };

  return (
    <>
      <div className="container px-10 py-4">
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row">
              {tableCelle(tableCelleClassNameTitles(), "Nombre")}
              {tableCelle(tableCelleClassNameTitles(), "Descripción")}
              {tableCelle(tableCelleClassNameTitles(), "Hora de inicio")}
              {tableCelle(tableCelleClassNameTitles(), "Duración")}
              {tableCelle(tableCelleClassNameTitles(), "Máximos participantes")}
              {tableCelle(tableCelleClassNameTitles(), "Tipo de sesión")}
              {tableCelle(tableCelleClassNameTitles(), "Días de la semana")}
              {tableCelle(tableCelleClassNameTitles(), "Modificar")}
              {tableCelle(tableCelleClassNameTitles(), "Eliminar")}
            </div>
          </div>

          <div className="table-row-group">
            {sessionsList.map((value, index) => {
              return (
                <div className="table-row" key={value.id}>
                  {tableCelle(tableCelleClassNameValues(), value.name)}
                  {tableCelle(tableCelleClassNameValues(), value.description)}
                  {tableCelle(tableCelleClassNameValues(), value.start_time)}
                  {tableCelle(tableCelleClassNameValues(), value.duration)}
                  {tableCelle(tableCelleClassNameValues(), value.max_users)}
                  {tableCelle(tableCelleClassNameValues(), value.session_type)}
                  {tableCelle(tableCelleClassNameValues(), value.weekdays)}
                  <div className="table-cell text-center dark:text-D-Gray-light">
                    <PutModal
                      id={`put-session-modal-${value.id}`}
                      icon={<FontAwesomeIcon icon={["fas", "pen-to-square"]} />}
                      inputs={PUT_SESSION_INPUTS(
                        setItemToPut,
                        itemToPut,
                        sessionsList[index]
                      )}
                      route={`edit_session/${value.id}`}
                      itemToPut={itemToPut}
                      itemToGet="sessions"
                      message="Modificar sesión"
                      listToSet={"sessionList"}
                    />
                  </div>
                  <div className="table-cell text-center">
                    <DeleteModal
                      id={`delete-session-modal-${value.id}`}
                      icon={<FontAwesomeIcon icon={["fas", "xmark"]} />}
                      message="¿Seguro que quieres eliminar esta sesión?"
                      route={`delete_session/${value.id}`}
                      itemToGet="sessions"
                      listToSet={"sessionList"}
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
          id="post-session-modal"
          message1="Añadir sesión"
          inputs={POST_SESSION_INPUTS(setSession, session)}
          route="postSession"
          itemToPost={session}
          itemToGet="sessions"
          listToSet={"sessionList"}
          message2="Crear sesión"
        />
      </div>
    </>
  );
};
