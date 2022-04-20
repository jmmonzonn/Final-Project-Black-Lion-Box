import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { MainHeader } from "../component/header.js";
import { Maps } from "../component/maps";
import { Contact } from "../component/contact";
import { Features } from "../component/features";
import { SubscriptionTiers } from "../component/subscriptionTiers";

export const Home = () => {
  const { store, actions } = useContext(Context);

  // Componentes del home

  return (
    <div className="text-center">
      <MainHeader />
      <SubscriptionTiers />
      <Features />
      <Maps />
      <Contact />
    </div>
  );
};
