import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1 className="text-warning">Coming soon!</h1>
      <p className="text-warning">
        Please be patient, we are working on the project right now
      </p>
    </div>
  );
};
