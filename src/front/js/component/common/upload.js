import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

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
    <div className="container mx-auto text-center ">
      <div className="p-1 h-24 w-auto bg-L-Gray-light rounded-lg border shadow-md sm:p-1 dark:bg-D-Gray-dark dark:border-D-Gray-light hover:bg-M-Lime dark:hover:bg-D-Gray-med">
        <form onSubmit={uploadImage}>
          <input
            accept=" image/* "
            type="file"
            onChange={(e) => setFiles(e.target.files)}
          />
          <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-M-Lime dark:text-D-Gray-dark dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};
