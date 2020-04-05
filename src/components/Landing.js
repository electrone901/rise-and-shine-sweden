import React from "react";
import Slider from "./carousel/Slider";
import FB from "./FB";

const Landing = () => {
  return (
    <>
      <Slider />

      <h2 className="text-center display-4 mt-4">Facebook News Feed</h2>
      <FB />
    </>
  );
};

export default Landing;
