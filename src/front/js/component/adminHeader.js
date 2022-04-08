import React from "react";

export const AdminHeader = () => {
  let username = localStorage.getItem("username");
  return (
    <div className="container">
      <p>
        Hola, <span>{username}</span>
      </p>
    </div>
  );
};
