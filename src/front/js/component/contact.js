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
        <div className="d-flex justify-content-center">
          <h1>Formulario de contacto</h1>
        </div>
        <form onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Apellidos"
              name="Last"
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
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mensaje
            </label>
            <input type="text" className="form-control" placeholder="Mensaje" />
          </div>

          <button
            type="submit"
            className="btn btn-success"
            id="button"
            value="ENVIAR MENSAJE"
            required
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};
