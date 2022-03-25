import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { UserHeader } from "../component/userHeader";
import { ViewSessions } from "../component/userViewSessions";
import { UpcomingSessions } from "../component/upcomingSessions";
import "../../styles/home.css";

export const UserDashboard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <UserHeader />
      <ViewSessions />
      <UpcomingSessions />
    </div>
  );
};
