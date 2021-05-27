import { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import Avatar from "../components/layout/Avatar";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { GMap } from "primereact/gmap";
import { GoogleMap } from "@react-google-maps/api";
import Spiner from "../components/layout/Spiner";

const InformationPage = ({ info: { result, loading } }) => {
  const google = window.google;

  const getMarker = () => {
    var marker = new google.maps.Marker({
      position: {
        lat: result.geometry.location.lat(),
        lng: result.geometry.location.lng(),
      },
      title: "Your house",
    });
    return [marker];
  };

  const getOptions = () => {
    const options = {
      center: {
        lat: result.geometry.location.lat(),
        lng: result.geometry.location.lng(),
      },

      zoom: 20,
    };

    return options;
  };

  // function currencyFormat(num) {
  //   return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  // }

  return (
    <Fragment>
      {result === null && !loading ? (
        <Redirect to="/sendform" />
      ) : loading ? (
        <Spiner></Spiner>
      ) : (
        <Fragment>
          <div className="container-fluid sticky-top bg-white">
            <nav className="navbar navbar-light bg-none  ">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/sendform">
                  <img src="images/flat-logo-color.svg" alt="" height="30" />
                </Link>
                <div className="d-flex align-items-center">
                  <p className="m-0 text-end">
                    <span className="fw-bold">Juan Perez</span>
                    <br></br>
                    <Link className="selectable-link-dark fs-7" to="/">
                      Sign Out
                    </Link>
                  </p>
                  <Avatar></Avatar>
                </div>
              </div>
            </nav>
          </div>

          <div className="container">
            <div className="border-0 h-100 mb-2 p-4">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="info">
                    <h2 className="">{result.name}</h2>
                    <p className="m-0">{result.address}</p>
                  </div>
                  <div className="price">
                    <p className="m-0 h1">
                      {result.answer.answer}
                      <small className="lead fw-normal"> MXN</small>
                    </p>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-3">
                    <div className="mt-5 text-center">
                      <div className="list mb-5">
                        <div className="item mt-3 d-flex align-items-center ">
                          <i className="fa-lg fas fa-home m-0"></i>
                          <h5 className="m-0 fw-light ps-2">
                            {result.St} m² Construido
                          </h5>
                        </div>
                        <div className="item mt-3 d-flex align-items-center">
                          <i className="fa-lg fas fa-ruler"></i>
                          <h5 className="m-0 fw-light ps-2">
                            {result.Tfr} m² Terreno al fente
                          </h5>
                        </div>
                        <div className="item mt-3 d-flex align-items-center">
                          <i className="fa-lg fas fa-ruler"></i>
                          <h5 className="m-0 fw-light ps-2">
                            {result.Tfo} m² Terreno al fondo
                          </h5>
                        </div>
                        <div className="item mt-3 d-flex align-items-center">
                          <i className="fa-lg fas fa-bed"></i>
                          <h5 className="m-0 fw-light ps-2">
                            {" "}
                            {result.Nr} Recámaras
                          </h5>
                        </div>
                        <div className="item mt-3 d-flex align-items-center">
                          <i className="fa-lg fas fa-bath"></i>
                          <h5 className="m-0 fw-light ps-2">
                            {result.Sb} Baños
                          </h5>
                        </div>
                        <div className="item mt-3 d-flex align-items-center">
                          <i className="fa-lg fas fa-car"></i>
                          <h5 className="m-0 fw-light ps-2">
                            {result.See} Estacionamientos
                          </h5>
                        </div>
                      </div>
                      <div className="text-center">
                        <Link
                          className="btn btn-secondary text-white"
                          to="/sendform"
                        >
                          Crear nuevo avaluo
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    {
                      <GMap
                        overlays={getMarker()}
                        options={getOptions()}
                        style={{ width: "100%", minHeight: "500px" }}
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

InformationPage.propTypes = {
  info: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  info: state.results,
});

export default connect(mapStateToProps, {})(InformationPage);
