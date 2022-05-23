import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { MainHeader } from "../component/common/header.js";
import { Maps } from "../component/common/maps";
import { Contact } from "../component/common/contact";
import { SubscriptionTiers } from "../component/common/subscriptionTiers";
import { HomeFeat } from "../component/common/homeFeat";
export const Home = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  /* Funcion para cargar getSuscriptions a la Home */

  useEffect(() => {
    // Fix para que Flowbite reinicie los eventos al cargar la página. Sin esto, no funcionan los modals, toggles y botones no funcionan.

    window.document.dispatchEvent(
      new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true,
      })
    );

    actions.getSuscriptions();
  }, []);

  // Componentes del home

  return (
    <div>
      <MainHeader />
      <HomeFeat />
      <SubscriptionTiers />
      <Maps />
      <Contact />
    </div>
  );
};
