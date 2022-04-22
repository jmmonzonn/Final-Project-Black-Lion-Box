import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  let history = useHistory();
  let login = () => {
    fetch(process.env.BACKEND_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.username);
          localStorage.setItem("id", data.id);
          if (data.role == "admin") {
            history.push("/admin/dashboard");
          } else {
            history.push("/user/dashboard");
          }
        } else {
          history.push("/register");
        }
      });
  };

  return (
    <div className="container items-center justify-center mx-auto h-[100vh]">
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
            onKeyDown={(e) => {
              e.key === "Enter" ? login() : null;
            }}
            name="floating_user"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_user"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Usuario:
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            onKeyDown={(e) => {
              e.key === "Enter" ? login() : null;
            }}
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Contraseña
          </label>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => {
          login();
        }}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Entrar
      </button>
    </div>
  );
};

// <div className="container">
// <div className="row justify-content-center">
//   <div className="col-3 mx-auto">
//     <input
//       type="text"
//       onChange={(e) => {
//         setUser({ ...user, username: e.target.value });
//       }}
//       className="form-control py-1 my-2"
//       placeholder="Introduce usuario"
//     ></input>

//     <input
//       type="password"
//       onChange={(e) => {
//         setUser({ ...user, password: e.target.value });
//       }}
//       className="form-control py-1 my-2"
//       placeholder="Introduce contraseña"
//     ></input>

//     <button
//       type="button"
//       onClick={() => {
//         fetch(process.env.BACKEND_URL + "/api/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(user),
//         })
//           .then((resp) => resp.json())
//           .then((data) => {
//             if (data.token) {
//               localStorage.setItem("token", data.token);
//               localStorage.setItem("username", data.username);
//               if (data.role == "admin") {
//                 history.push("/admin/dashboard");
//               } else {
//                 history.push("/user/dashboard");
//               }
//             } else {
//               history.push("/register");
//             }
//           });
//       }}
//       className="btn btn-danger mx-auto px-auto"
//     >
//       Entrar
//     </button>
//   </div>
// </div>
// </div>
