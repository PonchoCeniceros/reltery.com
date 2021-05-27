import React from "react";

const Spiner = () => {
  return (
    <div className="d-flex justify-content-center  align-items-center h-100 mt-4 pt-4">
      <div className="d-flex justify-content-center  align-items-center">
        <div
          className="spinner-border text-primary mr-2"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        ></div>
        <span className=" h2 m-0 ps-4 text-white">Cargando resultados...</span>
      </div>
    </div>
  );
};

export default Spiner;
