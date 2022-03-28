import React from "react";

export const MainHeader = () => {
  return (
    <div className="container">
      <header>
        <img
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1648495274/logo_alpha_zamw4v.svg"
          className="mx-auto h-96"
        />
        <video className="w-100 h-100" autoPlay muted loop>
          <source
            src="https://res.cloudinary.com/jorgepardor/video/upload/v1648494451/Comp_1_1_nhq8pr.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
};
