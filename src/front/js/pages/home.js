import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { MainHeader } from "../component/header.js";
import { Maps } from "../component/maps";
import { Contact } from "../component/contact";
import { Features } from "../component/features";
import { SubscriptionTiers } from "../component/subscriptionTiers";
import { HomeFeat1 } from "../component/homeFeat1";
import { HomeFeat2 } from "../component/homeFeat2";
export const Home = () => {
  const { store, actions } = useContext(Context);
  /* Funcion para cargar getSuscriptions a la Home */

  useEffect(() => {
    actions.getSuscriptions();
  }, []);

  // Componentes del home

  return (
    <div>
      <MainHeader />
      <HomeFeat1 />
      <HomeFeat2 />
      <SubscriptionTiers />
      {/* <Features /> */}
      <Maps />
      <Contact />
    </div>
  );
};
