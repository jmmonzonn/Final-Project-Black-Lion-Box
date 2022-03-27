import React from "react";
import { Link, useHistory } from "react-router-dom";

export const Navbar = () => {
  let history = useHistory();

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <img
          src="/docs/5.1/assets/brand/bootstrap-logo.svg"
          alt=""
          width="30"
          height="24"
        />
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item me-3">
              <button type="button" class="btn btn-danger">
                Gym
              </button>
            </li>
            <li class="nav-item  me-3">
              <button type="button" class="btn btn-danger">
                Sesiones
              </button>
            </li>
            <li class="nav-item  me-3 ">
              <button type="button" class="btn btn-danger">
                Contacto
              </button>
            </li>
            <li class="nav-item  me-3">
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => history.push("/home/register")}
              >
                Register
              </button>
            </li>
            <li class="nav-item  me-3">
              <button type="button" class="btn btn-danger">
                Login
              </button>
            </li>
            <li class="nav-item  me-3">
              <button type="button" class="btn btn-danger">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
