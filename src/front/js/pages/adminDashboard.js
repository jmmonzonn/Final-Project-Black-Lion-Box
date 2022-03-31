import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { AdminHeader } from "../component/adminHeader";
import { AdminUserList } from "../component/adminUserlist";
import { AdminSuscription } from "../component/adminSuscription";
import { AdminRole } from "../component/adminRole.js";
import { SubscriptionTiers } from "../component/adminSubscriptionTiers";
import "../../styles/home.css";

export const AdminDashboard = () => {
  const { store, actions } = useContext(Context);
  const [checkValidate, setCheckValidate] = useState(false);
  let history = useHistory();

  useEffect(() => {
    validate();
  }, []);

  const validate = async () => {
    if (!(await actions.validate())) {
      history.push("/");
    } else {
      setCheckValidate(true);
    }
  };

  return (
    <>
      {checkValidate ? (
        <div className="text-center mt-5">
          {/* <AdminHeader /> */}
          <AdminSuscription />
          <AdminRole />
          {/* <SubscriptionTiers /> */}
          {/* <AdminUserList /> */}
        </div>
      ) : null}
    </>
  );
};
