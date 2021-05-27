import React, { Fragment } from "react";
import Spiner from "./Spiner";

const LoadingScreen = () => {
  return (
    <Fragment>
      <div className="loading-container">
        <Spiner></Spiner>
      </div>
    </Fragment>
  );
};

export default LoadingScreen;
