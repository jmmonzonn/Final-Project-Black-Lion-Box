import React from "react";
import { Link, useHistory } from "react-router-dom";
import isolight from "../../img/BLB_ISO_Light_64px.png";

export const Navbar = () => {
  let history = useHistory();

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg  bg-L-Gray-dark">
        <div className="h-10 w-10 self-center mr-2">
          <img
            src={isolight}
            className="h-10 w-10 self-center"
            alt="Big Lion Box"
          />
        </div>

        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <a
            href="#"
            className="font-display max-w-sm text-2xl font-bold leading-tight mx-3"
          >
            <span className="link link-underline link-underline-black text-black">
              Sesiones
            </span>
          </a>
          <a
            href="#"
            className="font-display max-w-sm text-2xl font-bold leading-tight mx-3"
          >
            <span className="link link-underline link-underline-black text-black">
              Contacto
            </span>
          </a>
          <a
            href="#"
            className="font-display max-w-sm text-2xl font-bold leading-tight mx-3"
          >
            <span className="link link-underline link-underline-black text-black">
              El gimnasio
            </span>
          </a>
        </div>

        <div class="inline-flex rounded-md shadow-sm">
          <a
            href="#"
            onClick={() => history.push("/home/register")}
            aria-current="page"
            class="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Register
          </a>
          <a
            href="#"
            onClick={() => history.push("/home/login")}
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Login
          </a>
        </div>

        {/* <div class="collapse navbar-collapse" id="navbarNav">
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
        </div> */}
      </nav>
    </div>
  );
};
