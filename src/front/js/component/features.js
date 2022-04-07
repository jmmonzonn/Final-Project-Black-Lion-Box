import React, { useState } from "react";

export const Features = () => {
  const [rotate, setRotate] = useState({});
  const [rotate2, setRotate2] = useState({});
  const [rotate3, setRotate3] = useState({});

  return (
    <div className="container mt-5">
      <div className="grid grid-cols-3 gap-4">
        <div className="flip-card">
          <div className="flip-card-inner" style={rotate}>
            <div className="flip-card-front">
              <img
                className="image-features"
                src="https://res.cloudinary.com/blacklionbox/image/upload/v1649278645/feat2_cx4eav.jpg"
                alt="Cardio"
              />
              <button
                type="button"
                onClick={() => {
                  setRotate({ transform: "rotateY(180deg)" });
                }}
                className="btn btn-primary btn-features"
              >
                Open box
              </button>
            </div>
            <div className="flip-card-back">
              <p className="lead mt-5">Open box</p>
              <p className="mt-5 px-2">
                Mejora tu resistencia, condición física y capacidad de
                regeneración utilizando cintas de correr, crosstrainers,
                steppers, máquinas de remo y mucho más.
              </p>
              <i
                className="fas fa-chevron-circle-right mt-5"
                onClick={() => {
                  setRotate({});
                }}
              ></i>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner" style={rotate2}>
            <div className="flip-card-front">
              <img
                className="image-features"
                src="https://res.cloudinary.com/blacklionbox/image/upload/v1649278645/feat1_slmcgh.jpg"
                alt="Cardio"
              />
              <button
                type="button"
                onClick={() => {
                  setRotate2({ transform: "rotateY(180deg)" });
                }}
                className="btn btn-primary btn-features"
              >
                Entrenamiento Funcional
              </button>
            </div>
            <div className="flip-card-back">
              <p className="lead mt-5">Entrenamiento Funcional</p>
              <p className="mt-5 px-2">
                El entrenamiento funcional busca trabajar los músculos a través
                de la imitación de la cotidianidad. Para que se pueda considerar
                un entrenamiento como funcional, este debe ser capaz de
                involucrar a todos los músculos del cuerpo y los ejercicios no
                deben trabajar los músculos de forma aislada.
              </p>
              <i
                className="fas fa-chevron-circle-right mt-5"
                onClick={() => {
                  setRotate2({});
                }}
              ></i>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner" style={rotate3}>
            <div className="flip-card-front">
              <img
                className="image-features"
                src="https://res.cloudinary.com/blacklionbox/image/upload/v1649278645/feat3_iwosm9.jpg"
                alt="Cardio"
              />
              <button
                type="button"
                onClick={() => {
                  setRotate3({ transform: "rotateY(180deg)" });
                }}
                className="btn btn-primary btn-features"
              >
                {" "}
                Competicion
              </button>
            </div>
            <div className="flip-card-back">
              <p className="lead mt-5">Competición</p>
              <p className="mt-5 px-2">
                Mejora tu resistencia, condición física y capacidad de
                regeneración utilizando cintas de correr, crosstrainers,
                steppers, máquinas de remo y mucho más.
              </p>
              <i
                className="fas fa-chevron-circle-right mt-5"
                onClick={() => {
                  setRotate3({});
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
