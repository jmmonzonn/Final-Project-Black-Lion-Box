import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { MainHeader } from "../component/header.js";
import { Maps } from "../component/maps";
import { Contact } from "../component/contact";
import { Features } from "../component/features";
import { SubscriptionTiers } from "../component/subscriptionTiers";
import { HomeFeats } from "../component/homeFeats";

export const Home = () => {
  const { store, actions } = useContext(Context);
  /* Funcion para cargar getSuscriptions a la Home */

  useEffect(() => {
    actions.getSuscriptions();
  }, []);

  // Componentes del home

  return (
    <div className="text-center">
      <MainHeader />
      {/* Enseña la sección de tipos de tarifa, que recoge de la tabla subscripcions y subscription_types*/}
      {store.suscriptionList.map((value) => {
        return <SubscriptionTiers key={value.id} cards={value} />;
      })}

      <Features />
      <Maps />
      <Contact />
    </div>
  );
};
