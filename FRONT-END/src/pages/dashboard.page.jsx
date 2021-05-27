import React from "react";
import Avatar from "../components/layout/Avatar";
import { Link } from "react-router-dom";
import ItemCardComponent from "../components/item-card.component";

import InfoComponent from "../components/info-component";

const Dashboard = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-none mt-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/dashboard">
              <img src="images/flat-logo-color.svg" alt="" height="30" />
            </Link>
            <div className="d-flex align-items-center">
              <p className="m-0 text-end">
                <span className="h5">Juan Perez</span>
                <br></br>
                <Link className="selectable-link-dark" to="/">
                  Sign Out
                </Link>
              </p>
              <Avatar></Avatar>
            </div>
          </div>
        </nav>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-4 mt-5">
            <div className="container-fluid">
              <div className="title mb-2">
                <p className="h2 m-0">Mis avalúos</p>
                <p className="fw-light">
                  Aqui encuentras todos tus avalúos creados.
                </p>
              </div>

              <div className="list list-container">
                <ItemCardComponent
                  title="Casa Campestre"
                  adress="Calle Arizona 41, Virreyes, Virreyes Adición A Etapa I, 31214 Chihuahua, Chih."
                ></ItemCardComponent>
                <ItemCardComponent
                  title="Departamento D1"
                  adress="Xicoténcatl 2603, Bolívar, Zona Centro, 31000 Chihuahua, Chih."
                ></ItemCardComponent>
                <ItemCardComponent
                  title="Casa centro"
                  adress="Calle Arizona 41, Virreyes, Virreyes Adición A Etapa I, 31214 Chihuahua, Chih."
                ></ItemCardComponent>
                <ItemCardComponent
                  title="Casa centro"
                  adress="Calle Arizona 41, Virreyes, Virreyes Adición A Etapa I, 31214 Chihuahua, Chih."
                ></ItemCardComponent>
                <ItemCardComponent
                  title="Casa centro"
                  adress="Calle Arizona 41, Virreyes, Virreyes Adición A Etapa I, 31214 Chihuahua, Chih."
                ></ItemCardComponent>
                <ItemCardComponent
                  title="Casa centro"
                  adress="Calle Arizona 41, Virreyes, Virreyes Adición A Etapa I, 31214 Chihuahua, Chih."
                ></ItemCardComponent>
              </div>
              <div className="text-center mt-4">
                <Link className="btn btn-primary text-white" to="/sendform">
                  <i className="fas fa-plus-square"></i> Crear nuevo
                </Link>
              </div>
            </div>
          </div>
          <div className="col map-container border-radius">
            <InfoComponent></InfoComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
