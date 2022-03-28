import React from "react";
import video from "./../../video/headervideob.mp4";

export const MainHeader = () => {
  return (
    <div className="container">
      <header>
        <div>Welcome to my site!</div>
        <video autoPlay loop muted>
          <source src={video} />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
};
