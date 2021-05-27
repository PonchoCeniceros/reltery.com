import React, { Fragment } from "react";
import MapComponent from "./maps.component";

const InfoComponent = () => {
  return (
    <Fragment>
      <div className="card bg-light border-0 h-100 mb-2 p-4">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="info">
              <h2 className="">Casa Campestre</h2>
              <p className="m-0">
                Xicoténcatl 2603, Bolívar, Zona Centro, 31000 Chihuahua, Chih.
              </p>
            </div>
            <div className="price">
              <p className="m-0 h1">
                $5,800,000<small className="lead fw-normal">.00 MXN</small>
              </p>
            </div>
          </div>
          <div className="row mt-5 h-75">
            <div className="col-4 text-center">
              <div className="list mb-5">
                <div className="item mt-3 d-flex align-items-center ">
                  <i className="fa-lg fas fa-home m-0"></i>
                  <h5 className="m-0 fw-light ps-2">334 m² Construido</h5>
                </div>
                <div className="item mt-3 d-flex align-items-center">
                  <i className="fa-lg fas fa-ruler"></i>
                  <h5 className="m-0 fw-light ps-2">625 m² Terreno</h5>
                </div>
                <div className="item mt-3 d-flex align-items-center">
                  <i className="fa-lg fas fa-bed"></i>
                  <h5 className="m-0 fw-light ps-2">3 Recámaras</h5>
                </div>
                <div className="item mt-3 d-flex align-items-center">
                  <i className="fa-lg fas fa-bath"></i>
                  <h5 className="m-0 fw-light ps-2">3 y 1/2 Baños</h5>
                </div>
                <div className="item mt-3 d-flex align-items-center">
                  <i className="fa-lg fas fa-car"></i>
                  <h5 className="m-0 fw-light ps-2">3 Estacionamientos</h5>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-secondary text-white">
                  <i className="fas fa-download"></i> Descargar
                </button>
              </div>
            </div>
            <div className="col-8 card p-0"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoComponent;
