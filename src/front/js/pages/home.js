import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { MainHeader } from "../component/header.js";
import { Maps } from "../component/maps";
import { Contact } from "../component/contact";
import { Features } from "../component/features";
import { SubscriptionTiers } from "../component/subscriptionTiers";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getSuscriptions();
  }, []);

  // Componentes del home

  return (
    <div className="text-center">
      <MainHeader />
      {/* MAP Y PROPTAIS DE LAS CARDS DE TARIFAS */}
      {store.suscriptionList.map((value) => {
        return <SubscriptionTiers key={value.id} cards={value} />;
      })}

      <Features />
      <Maps />
      <Contact />
    </div>
  );
};
