import React, { Component } from "react";

export const Footer = () => (
  <footer class="p-4 L-Gray-light shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-D-Gray-dark dark:border-D-Gray-med">
    <span class="text-sm text-L-Gray-dark sm:text-center dark:text-D-Gray-light">
      © 2022{" "}
      <a href="https://flowbite.com" class="hover:underline">
        Black Lion Box
      </a>
      . All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <p className="mr-4 md:mr-6 ">
          Made with 😎🤙 by{" "}
          <a
            href="https://ohi.vetmed.ucdavis.edu/sites/g/files/dgvnsk5251/files/styles/sf_landscape_16x9/public/images/article/3-mountain-gorillas.jpg"
            className=" text-L-Gray-dark dark:text-L-Gray-light"
          >
            Some geeks at 4geeks Academy
          </a>
        </p>
      </li>
    </ul>
  </footer>
);
