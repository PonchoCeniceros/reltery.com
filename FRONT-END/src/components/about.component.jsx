import React from "react";
import { connect } from "react-redux";

import { removeResult } from "../services/api.service";
import PropTypes from "prop-types";
import Spiner from "./layout/Spiner";
import { GMap } from "primereact/gmap";

const About = ({
  show,
  handleClose,
  removeResult,
  info: { result, loading, error },
}) => {
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

  const clearAndClose = () => {
    removeResult();
    handleClose(!show);
  };

  console.log(result);
  return (
    <div className={show ? "modal-main blur" : "invisible"}>
      <i
        className="fa fa-times float-end text-dark p-4 cursor-clickable "
        aria-hidden="true"
        onClick={() => clearAndClose()}
      ></i>

      <div>
        {loading ? (
          <Spiner></Spiner>
        ) : !loading && error ? (
          <div className="text-center mt-4">
            Algo salió mal, Intentalo de nuevo
          </div>
        ) : (
          <div>
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
                          <button
                            type="button"
                            className="btn btn-secondary text-white"
                            onClick={() => clearAndClose()}
                          >
                            Crear nuevo avaluo
                          </button>
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
          </div>
        )}
      </div>
    </div>
  );
};

About.propTypes = {
  info: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  info: state.results,
});

export default connect(mapStateToProps, { removeResult })(About);
