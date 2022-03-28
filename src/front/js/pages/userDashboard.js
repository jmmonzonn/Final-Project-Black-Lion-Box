import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserHeader } from "../component/userHeader";
import { ViewSessions } from "../component/userViewSessions";
import { UpcomingSessions } from "../component/upcomingSessions";
import "../../styles/home.css";

export const UserDashboard = () => {
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
          <UserHeader />
          <ViewSessions />
          <UpcomingSessions />
        </div>
      ) : null}
    </>
  );
};
