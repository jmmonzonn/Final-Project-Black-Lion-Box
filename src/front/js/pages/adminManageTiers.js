import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { AdminHeader } from "../component/adminHeader";
import { AdminUserList } from "../component/adminUserlist";
import { SubscriptionTiers } from "../component/adminSubscriptionTiers";
import "../../styles/home.css";

export const AdminDashboard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <AdminHeader />
      <SubscriptionTiers />
      <AdminUserList />
    </div>
  );
};
