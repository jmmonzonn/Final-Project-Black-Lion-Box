import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { SubscriptionTiers } from "../component/subscriptionTiers";
import { useHistory } from "react-router-dom";

export const FirstSubscription = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("role") == "admin"
    ) {
      history.push("/admin/dashboard");
    } else if (
      localStorage.getItem("token") &&
      localStorage.getItem("role") == "user"
    ) {
      history.push("/user/dashboard");
    }

    actions.getSuscriptions();
  }, []);

  return (
    <div>
      <SubscriptionTiers />
    </div>
  );
};
