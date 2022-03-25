import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
              <button type="button" class="btn btn-danger">
                Register
              </button>
            </li>
            <li class="nav-item  me-3">
              <button type="button" class="btn btn-danger">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
