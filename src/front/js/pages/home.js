import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import logo from "../../img/BLB_Logo_512px.png";
import { MainHeader } from "../component/header.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <MainHeader />
      <img src={logo} className="mx-auto mb-5 h-48" alt="Big Lion Box logo" />
      <h1 className="text-3xl text-L-Gray-dark mb-2">Coming soon!</h1>
      <p className=" text-L-Gray-med">
        Please be patient, we are working on the project right now
      </p>
    </div>
  );
};
