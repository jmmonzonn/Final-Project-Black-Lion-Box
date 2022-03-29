import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import emailjs from "emailjs-com";

export const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_lta4l1r", "template_d5v9dc8", e.target, "blacklionbox")
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
        <div className="col">
          <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" placeholder="Email Address" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input
              type="submit"
              className="btn btn-info"
              value="Send Message"
            />
          </form>
        </div>
        <button type="button"></button>
      </div>
    </div>
  );
};
