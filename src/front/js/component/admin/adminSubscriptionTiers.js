import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PutModal } from "./putModal";
import { DeleteModal } from "./deleteModal";
import { PostModal } from "./postModal";

export const SubscriptionTiers = () => {
  const { store, actions } = useContext(Context);
  const [suscription, setSuscription] = useState({});
  const [oldSuscription, setOldSuscription] = useState({});
  const [suscriptionList, setSuscriptionList] = useState([]);
  const [subscriptionValue, setSubscriptionValue] = useState(null);
  const [suscriptionTypeList, setSuscriptionTypeList] = useState([]);
  const [itemToPut, setItemToPut] = useState({});
  let history = useHistory();

  useEffect(() => {
    window.document.dispatchEvent(
      new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true,
      })
    );
    setSuscriptionList(store.suscriptionList);
    setSuscriptionTypeList(store.suscriptionTypeList);
  }, [store.suscriptionList, store.suscriptionTypeList]);

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

  const inputModifySuscriptionModal = (
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

  const POST_SUSCRIPTION_INPUTS = [
    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
      Introduce los datos de la nueva tarifa:
    </h3>,
    input(
      "Nombre",
      "text",
      setSuscription,
      suscription,
      "name",
      "Introduce nombre"
    ),
    input(
      "Descripción",
      "text",
      setSuscription,
      suscription,
      "description",
      "Introduce descripción"
    ),
    input(
      "Precio",
      "number",
      setSuscription,
      suscription,
      "price",
      "Introduce precio"
    ),
    input(
      "Sesiones",
      "number",
      setSuscription,
      suscription,
      "tokens",
      "Introduce número de sesiones"
    ),
    selectPost(
      "Tipos de entrenamiento",
      setSuscription,
      suscription,
      "suscription_type_id",
      store.suscriptionTypeList
    ),
  ];

  const PUT_SUSCRIPTION_INPUTS = (set, item, defaultValue) => {
    return [
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Modificar tarifa
      </h3>,

      inputModifySuscriptionModal(
        "Nombre",
        "text",
        set,
        item,
        "name",
        defaultValue.name
      ),
      inputModifySuscriptionModal(
        "Descripción",
        "text",
        set,
        item,
        "description",
        defaultValue.description
      ),
      inputModifySuscriptionModal(
        "Precio",
        "number",
        set,
        item,
        "price",
        defaultValue.price
      ),
      inputModifySuscriptionModal(
        "Número de sesiones",
        "number",
        set,
        item,
        "tokens",
        defaultValue.tokens
      ),
      selectPut(
        "Tipo de tarifa",
        set,
        item,
        "suscription_type_id",
        defaultValue.suscription_type,
        store.suscriptionTypeList
      ),
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
              {tableCelle(tableCelleClassNameTitles(), "Precio")}
              {tableCelle(tableCelleClassNameTitles(), "Sesiones")}
              {tableCelle(tableCelleClassNameTitles(), "Tipo de entrenamiento")}
              {tableCelle(tableCelleClassNameTitles(), "Modificar")}
              {tableCelle(tableCelleClassNameTitles(), "Eliminar")}
            </div>
          </div>
          <div className="table-row-group">
            {suscriptionList.map((value, index) => {
              return (
                <div className="table-row" key={value.id}>
                  {tableCelle(tableCelleClassNameValues(), value.name)}
                  {tableCelle(tableCelleClassNameValues(), value.description)}
                  {tableCelle(tableCelleClassNameValues(), value.price)}
                  {tableCelle(tableCelleClassNameValues(), value.tokens)}
                  {tableCelle(
                    tableCelleClassNameValues(),
                    value.suscription_type
                  )}
                  <div className="table-cell text-center">
                    <PutModal
                      id={`put-suscription-modal-${value.id}`}
                      icon={<FontAwesomeIcon icon={["fas", "pen-to-square"]} />}
                      inputs={PUT_SUSCRIPTION_INPUTS(
                        setItemToPut,
                        itemToPut,
                        suscriptionList[index]
                      )}
                      route={`edit_suscriptions/${value.id}`}
                      itemToPut={itemToPut}
                      itemToGet="suscriptions"
                      message="Modificar tarifa"
                      listToSet={"suscriptionList"}
                    />
                  </div>
                  <div className="table-cell text-center">
                    <DeleteModal
                      id={`delete-suscription-modal-${value.id}`}
                      icon={<FontAwesomeIcon icon={["fas", "xmark"]} />}
                      message="¿Seguro que quieres eliminar esta tarifa?"
                      route={`delete_suscriptions/${value.id}`}
                      itemToGet="suscriptions"
                      listToSet={"suscriptionList"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="container flex items-center justify-center mx-auto my-8">
          <PostModal
            id="post-suscription-modal"
            message1="Añadir tarifa"
            inputs={POST_SUSCRIPTION_INPUTS}
            route="suscription"
            itemToPost={suscription}
            itemToGet="suscriptions"
            listToSet={"suscriptionList"}
            message2="Añadir tarifa"
          />
        </div>
      </div>
    </>
  );
};
