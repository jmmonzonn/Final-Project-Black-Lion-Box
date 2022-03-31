import React, { Component } from "react";

export const Footer = () => (
  <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2022{" "}
      <a href="https://4geeksacademy.com" className="hover:underline">
        Black Lion Box
      </a>
    </span>
    <ul className="flex flex-wrap items-center mt-2 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="#" className="mr-4 hover:underline md:mr-6 ">
          Nosotros
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline">
          Contacto
        </a>
      </li>
    </ul>
  </footer>
);
{
  /* <footer className="footer mt-auto py-3 text-center">
    <p>
      Made with 😎🤙 by{" "}
      <a href="https://ohi.vetmed.ucdavis.edu/sites/g/files/dgvnsk5251/files/styles/sf_landscape_16x9/public/images/article/3-mountain-gorillas.jpg">
        Some geeks at 4geeks Academy
      </a>
    </p>
  </footer> */
}
