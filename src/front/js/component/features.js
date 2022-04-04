import React from "react";

export const Features = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className=" image"
                  src="https://res.cloudinary.com/blacklionbox/image/upload/v1648973804/geraete_flip_kachel_02_320x480_msvsji.webp"
                  alt="Cardio"
                />
              </div>
              <div className="flip-card-back">
                <p>
                  Mejora tu resistencia, condición física y capacidad de
                  regeneración utilizando cintas de correr, crosstrainers,
                  steppers, máquinas de remo y mucho más.
                </p>
                <button className="fill-button button-block">Máquinas</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
