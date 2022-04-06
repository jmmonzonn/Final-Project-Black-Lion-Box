import React, { useState } from "react";

export const Features = () => {
  const [rotate, setRotate] = useState({});

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex flip-card">
            <div className="flip-card-inner" style={rotate}>
              <div className="flip-card-front">
                <img
                  onClick={() => {
                    setRotate({ transform: "rotateY(180deg)" });
                  }}
                  className=" image"
                  src="https://res.cloudinary.com/blacklionbox/image/upload/v1648973804/geraete_flip_kachel_02_320x480_msvsji.webp"
                  alt="Cardio"
                />
              </div>

              <div
                className="flip-card-back"
                onClick={() => {
                  setRotate({});
                }}
              >
                <p>
                  Mejora tu resistencia, condición física y capacidad de
                  regeneración utilizando cintas de correr, crosstrainers,
                  steppers, máquinas de remo y mucho más.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
