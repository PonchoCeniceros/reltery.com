import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const LandingPage = (props) => {
  return (
    <div>
      {" "}
      <Fragment>
        <div className="container-fluid vh-100  d-flex align-content-center ">
          <div className="jumbotron h-full align-self-center w-100 bg-landing m-0 p-4 ">
            <div className="container-fluid ">
              <nav className="navbar navbar-expand-lg navbar-light text-white">
                <div className="container-fluid text-white">
                  <Link className="navbar-brand" to="/">
                    <img src="/images/flat-logo.svg" alt="" height="30" />
                  </Link>

                  <span className="">
                    <Link className="selectable-link mx-2" to="/dashboard">
                      Conocenos
                    </Link>
                    <Link className="selectable-link mx-2" to="/login">
                      Iniciar sesión
                    </Link>
                  </span>
                </div>
              </nav>

              <div className="headline">
                <h1 className="fw-bold  align-self-center display-4">
                  ¿Sabes cuánto vale tu casa?
                </h1>
                <p className="h3 fw-light mx-2 ">
                  Nosotros te podemos ayudar con eso.
                </p>

                <Link
                  className="btn btn-primary btn-lg text-white fw-bold mt-4"
                  to="/sendform"
                >
                  Calcula el valor de tu propiedad
                </Link>
              </div>

              <div className="footer fw-light pe-2">
                <p>Copyright © 2021 Realty.com All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

LandingPage.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
