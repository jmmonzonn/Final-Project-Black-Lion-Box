import React, { Component } from "react";

export const Footer = () => (
  <footer className="container mx-auto bg-L-Gray-light dark:bg-D-Gray-dark text-L-Gray-dark dark:text-D-Gray-light pb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="text-center md:text-left">
        <p>© 2022 Black Lion Box. Todos los derechos reservados.</p>
      </div>

      <div className="text-center md:text-right">
        <p className="mr-4 md:mr-6 ">
          Made with 😎🤙 by{" "}
          <a
            href="https://i.guim.co.uk/img/media/509edc7afba167b8adbf22b894f8d56038c996d6/0_0_3504_2102/master/3504.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=63d71a95ec65633c70faeac4847a6ca5"
            className=" text-M-Lime dark:text-M-Lime"
          >
            Some geeks
          </a>{" "}
          <a>at</a>{" "}
          <a
            href="https://4geeksacademy.com/"
            className=" text-A-Magenta dark:text-A-Magenta"
          >
            4Geeks Academy
          </a>
        </p>
      </div>
    </div>
  </footer>
);

// className =
//   "p-4 L-Gray-light md:flex md:items-center md:justify-between md:p-6  bottom-0 w-full";

// className =
//   "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0";
