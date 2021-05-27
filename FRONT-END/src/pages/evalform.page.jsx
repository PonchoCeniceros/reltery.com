import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { usePlacesWidget } from "react-google-autocomplete";
import { Link } from "react-router-dom";
import Avatar from "../components/layout/Avatar";
import { calculatePropertyValue } from "../services/api.service";
import { connect } from "react-redux";
import About from "../components/about.component";

const EvalFormPage = ({ calculatePropertyValue }) => {
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyDfL0xvg16IRk_BwLl_r4M5DydWG-rWBz0",
    onPlaceSelected: (place) => {
      setFormData({
        ...formData,
        address: place.formatted_address,
        geometry: place.geometry,
      });
    },
    options: {
      types: ["address"],
      componentRestrictions: { country: "mx" },
    },
  });

  const [formData, setFormData] = useState({
    name: "Casa Campestre",
    address: "",
    geometry: null,
    Nr: "",
    Nb: "",
    Sb: "",
    Ee: "",
    See: "",
    Tfr: "",
    Tfo: "",
    St: "",
    Ed: "",
    $M: "",
    $Mn: "",
    Vm: "",
    Vmn: "",
  });

  const { name, Nr, Nb, Sb, Ee, See, Tfr, Tfo, St, Ed, $M, $Mn, Vm, Vmn } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData.geometry) {
      calculatePropertyValue(formData);
      setshowModal(true);
    }
  };

  const [showModal, setshowModal] = useState(false);

  return (
    <Fragment>
      <div className="container-fluid sticky-top bg-white">
        <About handleClose={setshowModal} show={showModal}></About>
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
        <div className="">
          <div className="card border-0 bg-none">
            <div className="card-body">
              <div className="title mt-2 mb-4 text-center">
                <h1 className="display-4 fw-normal m-0">Solicitar avalúo</h1>
                <p className="fw-light">
                  Porfavor propociona la infomración que nececitamos
                </p>
              </div>
              <form className="row  pb-4 g-3">
                <div className="form-section row">
                  <div className="col-3 pt-4 d-none d-md-block">
                    <h3 className="m-0">Información</h3>
                    <p className="fw-light">Datos generales de la propiedad</p>
                  </div>
                  <div className="col form row row-cols-1 row-cols-md-2">
                    <div className="col my-3 ">
                      <label htmlFor="inputAddress" className="form-label">
                        Dirección
                      </label>
                      <input ref={ref} className="form-control" />
                    </div>
                    <div className="col my-3 ">
                      <label htmlFor="inputName" className="form-label">
                        Nombre
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>

                    <div className="col my-3">
                      <label htmlFor="inputAddress" className="form-label">
                        Edad aproximada de la construccion en meses
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="Ed"
                        value={Ed}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section row">
                  <div className="col-3 pt-4 d-none d-md-block">
                    <h3 className="m-0">Detalles en la construcción</h3>
                    <p className="fw-light">
                      Datos que describen la construccion, con cuantos cuartos
                      en general cuenta la propiedad
                    </p>
                  </div>
                  <div className="col form row row-cols-1 row-cols-md-2">
                    <div className="col my-3">
                      <label htmlFor="totalState" className="form-label">
                        Número de recamaras
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="Nr"
                        value={Nr}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col my-3">
                      <label htmlFor="totalBuilded" className="form-label">
                        Número de baños completos
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="Nb"
                        value={Nb}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>

                    <div className="col my-3">
                      <label htmlFor="totalBuilded" className="form-label">
                        Suma de baños
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="Sb"
                        value={Sb}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section row">
                  <div className="col-3 pt-4 d-none d-md-block">
                    <h3 className="m-0">Estacionamentos & terrenos</h3>
                    <p className="fw-light">
                      Detalles en el terreno disponible en la propiedad,
                      estacionamentos y superficies
                    </p>
                  </div>
                  <div className="col form row row-cols-1 row-cols-md-2">
                    <div className="col my-3">
                      <label htmlFor="totalState" className="form-label">
                        Estacionamiento descubiertos
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="Ee"
                        value={Ee}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col my-3">
                      <label htmlFor="totalBuilded" className="form-label">
                        Suma de estacionamientos
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="See"
                        value={See}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>

                    <div className="col my-3">
                      <label htmlFor="inputAddress" className="form-label">
                        Tamaño del terreno en frente
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="Tfr"
                        value={Tfr}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col my-3">
                      <label htmlFor="inputAddress" className="form-label">
                        Tamaño del terremo en fondo
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="Tfo"
                        value={Tfo}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col my-3">
                      <label htmlFor="inputAddress" className="form-label">
                        Superficie del terreno en el estudio
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="St"
                        value={St}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section row">
                  <div className="col-3 pt-4 d-none d-md-block">
                    <h3 className="m-0">Aspecto financiero</h3>
                    <p className="fw-light">
                      Detalles en los aspectos financieros, son utilizados para
                      obtener el calculo final
                    </p>
                  </div>
                  <div className="col form row row-cols-1 row-cols-md-2">
                    <div className="col my-3">
                      <label htmlFor="inputAddress" className="form-label">
                        Monto unitario aplicable para el valor de mercado
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="$M"
                        value={$M}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>

                    <div className="col my-3">
                      <label htmlFor="inputAddress" className="form-label">
                        Monto unitario de mercado sin areas y elementos
                        adicionales
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="$Mn"
                        value={$Mn}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col my-3">
                      <label htmlFor="inputAddress" className="form-label">
                        Valor comparatvo de mercado
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="Vm"
                        value={Vm}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col my-3">
                      <label htmlFor="inputAddress" className="form-label">
                        Valor de mercado -Areas y elementos adicionales-
                      </label>
                      <input
                        required
                        type="number"
                        placeholder="ej. 3"
                        name="Vmn"
                        value={Vmn}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <button
                    type="button"
                    onClick={onSubmit}
                    className="btn btn-primary text-white btn-lg my-3"
                  >
                    Solicitar
                  </button>
                  <div className="text ">
                    *tus datos no seran guardados en la base de datos hasta que
                    presiones guardar
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EvalFormPage.propTypes = {
  calculatePropertyValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { calculatePropertyValue })(
  EvalFormPage
);
