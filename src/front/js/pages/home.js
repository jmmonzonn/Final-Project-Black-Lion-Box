import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/home.css";
import { MainHeader } from "../component/header.js";
import { Maps } from "../component/maps";
import { Contact } from "../component/contact";
import { Features } from "../component/features";
import { SubscriptionTiers } from "../component/subscriptionTiers";
import { HomeFeat1 } from "../component/homeFeat1";
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
      <HomeFeat1 />
      <SubscriptionTiers />
      {/* <Features /> */}
      <Maps />
      <Contact />
    </div>
  );
};
