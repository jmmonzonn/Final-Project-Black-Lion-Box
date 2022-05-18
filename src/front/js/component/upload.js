import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const UploadView = (props) => {
  const { store, actions } = useContext(Context);
  const [files, setFiles] = useState(null);

  const uploadImage = (evt) => {
    evt.preventDefault();
    if (files[0].size / 1024 / 1024 > 2) {
      alert("Archivo de más de dos megas, introduce uno menos pesado!");
    } else {
      let body = new FormData();
      body.append("profile_image", files[0]);
      const options = {
        body,
        method: "POST",
      };
      fetch(process.env.BACKEND_URL + "/api/upload/1", options)
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className="jumbotron">
      <form onSubmit={uploadImage}>
        <input
          accept=" image/* "
          type="file"
          onChange={(e) => setFiles(e.target.files)}
        />
        <button>Upload</button>
      </form>
    </div>
  );
};
