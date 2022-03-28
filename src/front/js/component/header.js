import React from "react";

export const MainHeader = () => {
  return (
    <div className="container">
      <header>
        <div>Welcome to my site!</div>
        <video className="w-100 h-100" autoPlay muted loop>
          <source
            src="https://res.cloudinary.com/jorgepardor/video/upload/v1648485644/pexels-tima-miroshnichenko-6388436_2_x8rkwx.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
};
