import React from "react";

export const MainHeader = () => {
  return (
    <div>
      <div className="headerbg">
        <div className="logoheader-container">
          <video
            className="logoheader my-8 py-8"
            src="https://res.cloudinary.com/blacklionbox/video/upload/v1650456379/hola_wtpq01.webm"
            autoPlay
            loop
            muted
          />
        </div>
        {/* <div className="content">
          <svg viewBox="0 0 1 1" className="hideme">
            <defs>
              <clipPath id="logoheadermask">
                <path
                  d="M0,0V512H512V0ZM334.57,67.52c14.83,0,26.5,7,32.76,17.39L353.09,93.2c-3.27-6.34-9.72-10.54-18.52-10.54-12.18,0-20.67,8.91-20.67,20.36a20.51,20.51,0,0,0,20.67,20.78,20.25,20.25,0,0,0,18.33-10.55l14.23,8.18a37.32,37.32,0,0,1-32.54,18.13c-21.8,0-37.67-16-37.67-36.54C296.9,83.7,312.75,67.52,334.57,67.52ZM416.7,243.29V174h27.54V287.52H416.7l-57.44-69.46v69.46H331.72V174h27.54ZM244.33,68.75h18.72l29.89,69.62H275l-4.51-10.86H236.94l-4.59,10.86H214.53ZM264.84,172c32.23,0,58.61,26.55,58.61,58.76A58.61,58.61,0,1,1,264.84,172ZM148.71,68.75h16.78V122.8h36.57v15.57H148.71ZM195.25,171V285.84h-27.7V171ZM66.74,68.75h30.2c20.16,0,26.51,8,26.51,19.15,0,7.16-5,12.18-6.55,13.31a18.09,18.09,0,0,1,10.44,16.89c0,11.36-7.28,20.27-26.31,20.27H66.74Zm0,105.23H94.13v88.17h59.6v25.37h-87ZM127.8,442.25H67.49V319.87h53.1c35.46,0,46.63,14,46.63,33.64,0,12.61-8.82,21.43-11.52,23.39,11.87,6,18.35,16.56,18.35,29.69C174.05,426.6,161.27,442.25,127.8,442.25Zm121,2.17a63.36,63.36,0,0,1,0-126.72c34.73,0,63.19,28.63,63.19,63.36a63.44,63.44,0,0,1-63.19,63.36ZM441.3,423.26l-21.42,21.25-40.3-41.06-40.86,40.68-21.06-21.42,41-40.5-43.2-43.55,21.07-21.07,43.2,43.55,44.45-43.55,21.07,20.87-44.81,44.1ZM423.46,138.35l-19-28.77-12,13.11v15.66H375.67V68.75h16.77V99.37l26.62-30.62h21.09l-24,28.06,29.07,41.56h-21.8Z"
                  transform="translate(0)"
                  fill="#fff"
                />
              </clipPath>
            </defs>
          </svg>
        </div> */}
        <p className="display-2 mb-3 text-D-Gray-light font-bellfort text-6xl opacity-75">
          Especialistas en entrenamiento funcional
        </p>
        <p className="display-5 text-L-Gray-light text-2xl font-medium opacity-75">
          {" "}
          Regístrate hoy y disfruta de la primera sesión gratis:
        </p>
        <button className="mt-5 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-heading font-medium rounded-lg text-xl px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Regístrate ahora!
        </button>
      </div>

      {/* <div className="container-fluid">
        <div className="row">
          <img src={fondoheader} />
          <div className="col-12">
            <div className="logoheader-container d-flex justify-content-center">
              <video
                className="logoheader"
                autoPlay
                muted
                loop
                src="https://res.cloudinary.com/blacklionbox/video/upload/v1649247344/Comp_1_2_yp3ou0.webm"
                alt="videoheader"
              />

              <div className="content"></div>
            </div>
            <svg viewBox="0 0 1 1" className="hideme">
              <defs>
                <clipPath id="logoheadermask">
                  <path
                    d="M0,0V512H512V0ZM334.57,67.52c14.83,0,26.5,7,32.76,17.39L353.09,93.2c-3.27-6.34-9.72-10.54-18.52-10.54-12.18,0-20.67,8.91-20.67,20.36a20.51,20.51,0,0,0,20.67,20.78,20.25,20.25,0,0,0,18.33-10.55l14.23,8.18a37.32,37.32,0,0,1-32.54,18.13c-21.8,0-37.67-16-37.67-36.54C296.9,83.7,312.75,67.52,334.57,67.52ZM416.7,243.29V174h27.54V287.52H416.7l-57.44-69.46v69.46H331.72V174h27.54ZM244.33,68.75h18.72l29.89,69.62H275l-4.51-10.86H236.94l-4.59,10.86H214.53ZM264.84,172c32.23,0,58.61,26.55,58.61,58.76A58.61,58.61,0,1,1,264.84,172ZM148.71,68.75h16.78V122.8h36.57v15.57H148.71ZM195.25,171V285.84h-27.7V171ZM66.74,68.75h30.2c20.16,0,26.51,8,26.51,19.15,0,7.16-5,12.18-6.55,13.31a18.09,18.09,0,0,1,10.44,16.89c0,11.36-7.28,20.27-26.31,20.27H66.74Zm0,105.23H94.13v88.17h59.6v25.37h-87ZM127.8,442.25H67.49V319.87h53.1c35.46,0,46.63,14,46.63,33.64,0,12.61-8.82,21.43-11.52,23.39,11.87,6,18.35,16.56,18.35,29.69C174.05,426.6,161.27,442.25,127.8,442.25Zm121,2.17a63.36,63.36,0,0,1,0-126.72c34.73,0,63.19,28.63,63.19,63.36a63.44,63.44,0,0,1-63.19,63.36ZM441.3,423.26l-21.42,21.25-40.3-41.06-40.86,40.68-21.06-21.42,41-40.5-43.2-43.55,21.07-21.07,43.2,43.55,44.45-43.55,21.07,20.87-44.81,44.1ZM423.46,138.35l-19-28.77-12,13.11v15.66H375.67V68.75h16.77V99.37l26.62-30.62h21.09l-24,28.06,29.07,41.56h-21.8Z"
                    transform="translate(0)"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="display-2 mb-3">
              Especialistas en entrenamiento funcional
            </p>
            <p className="display-5">
              {" "}
              Regístrate hoy y disfruta de la primera sesión gratis:
            </p>
            <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
              Regístrate ahora!
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};
