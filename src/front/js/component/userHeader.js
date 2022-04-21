import React, { useState, useEffect } from "react";

export const UserHeader = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    let id = localStorage.getItem("id");

    fetch(process.env.BACKEND_URL + "/api/user/" + id)
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  };

  return (
    <div className="container">
      <p>Hola, tuculo:</p>
      <p>{user.username}</p>
    </div>
  );
};

{
  /* <p>
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
</div> */
}
