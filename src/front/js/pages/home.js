import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import logo from "../../img/BLB_Logo_512px.png";
import { MainHeader } from "../component/header.js";
import { Maps } from "../component/maps";
import { Contact } from "../component/contact";
import { Features } from "../component/features";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <MainHeader />
      <Features />
      <Maps />
      <Contact />
    </div>
  );
};
