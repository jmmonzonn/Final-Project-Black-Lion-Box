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
            href="https://ohi.vetmed.ucdavis.edu/sites/g/files/dgvnsk5251/files/styles/sf_landscape_16x9/public/images/article/3-mountain-gorillas.jpg"
            className=" text-L-Gray-dark dark:text-L-Gray-light"
          >
            Some geeks
          </a>
          at{" "}
          <a
            href="https://4geeksacademy.com/"
            className=" text-L-Gray-dark dark:text-L-Gray-light"
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
