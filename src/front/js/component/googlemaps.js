import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";

export const Map = () => {
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);

  return (
    <div className="mt-32" id="Contacto">
      <p className="text-center text-6xl pb-24 text-L-Gray-dark dark:text-D-Gray-light font-bellfort">
        ¿Dónde estamos?
      </p>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyAfoKnYiRfN7MxjeuwxlkX8g9b6gZHD57E"
        language={"es"}
        region={"ES"}
        version={"weekly"}
        loadingElement={<div>Loading...</div>}
      >
        <GoogleMap
          mapContainerStyle={{
            height: "400px",
            width: "100%",
          }}
          zoom={17}
          center={{ lat: 43.50779, lng: -5.67832 }}
          options={
            localStorage.getItem("color-theme") === "light"
              ? { mapId: "89f93664f5bd0e09" }
              : { mapId: "29b565884fcffc84" }
          }
        >
          <InfoWindow position={{ lat: 43.50779, lng: -5.67832 }}>
            <div>
              <img
                src="https://res.cloudinary.com/blacklionbox/image/upload/v1653068350/BLB_Logo_512px_osjacy.png"
                className="h-30 sm:h-36 mx-auto pl-1 pt-2"
                alt="Black Lion Box"
              />
              <p className="text-center text-L-Gray-dark dark:text-D-Gray-light pt-3">
                Tr.ª San Juan 33211, Gijón
              </p>
              <p className="text-center text-L-Gray-dark dark:text-D-Gray-light">
                Asturias, Spain
              </p>
              <p className="text-center text-L-Gray-dark dark:text-D-Gray-light pb-2">
                Ver en{" "}
                <a
                  href="https://g.page/blacklionbox"
                  target={"_blank"}
                  className="text-A-Magenta"
                >
                  google maps
                </a>
              </p>
            </div>
          </InfoWindow>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
