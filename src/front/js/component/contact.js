import React, { useContext, useState, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import emailjs from "emailjs-com";
import { init } from "@emailjs/browser";
init("75IF0AuPvicgNL5xA");

export const Contact = () => {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lta4l1r",
        "template_uwflltm",
        e.target,
        "75IF0AuPvicgNL5xA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container">
      <div className="row">
        <p className="display-6 mb-4">Formulario de contacto</p>
      </div>
      <form onSubmit={sendEmail}>
        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="from_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="from_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Correo electronico
            </label>
          </div>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="message"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mensaje
          </label>
        </div>
        <button
          type="submit"
          value="ENVIAR MENSAJE"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

{
  /* <form onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              name="from_name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Correo electronico
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="from_email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mensaje
            </label>
            <textarea
              type="text"
              name="message"
              className="form-control"
              placeholder="Mensaje"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success mb-9"
            id="button"
            value="ENVIAR MENSAJE"
            required
          >
            Enviar Mensaje
          </button>
        </form> */
}
