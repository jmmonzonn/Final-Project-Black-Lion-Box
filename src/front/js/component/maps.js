import React from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Maps = () => {
  return (
    <div className="container-fluid">
      <p className="text-5xl my-8 py-8">¿Dónde estamos?</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.742910383067!2d-5.680530284638588!3d43.50769847912654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd367d99c79b32d9%3A0xd121ce325c520c1!2sBlack%20Lion%20Box!5e0!3m2!1ses!2ses!4v1648589570010!5m2!1ses!2ses"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
