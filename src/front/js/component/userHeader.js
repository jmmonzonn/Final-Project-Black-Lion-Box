import React from "react";

export const UserHeader = () => {
  return (
    <div className="container">
      <p>
        Hola, <span>username</span>
      </p>
      <p>youremail@email.com</p>
      <div className="ml-auto bg-secondary text-light">
        <p>
          Tu plan actual es: <span>Plan XXXX</span>
        </p>
        <p>
          Próxima renovación:
          <span>01/02/2020</span>
        </p>
      </div>
    </div>
  );
};
