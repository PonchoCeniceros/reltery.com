import React, { Fragment } from "react";

const Main = () => {
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple Boilerplate to start developing a react application{" "}
          </p>
          <hr className="my-4" />
          <p>
            It uses Bootstrap as it main style framework, and uses SCSS to
            customize it.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
