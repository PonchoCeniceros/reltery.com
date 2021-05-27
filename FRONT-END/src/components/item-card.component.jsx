import React, { Fragment } from "react";

const ItemCardComponent = ({ title, adress, id }) => {
  return (
    <Fragment>
      <div className="card bg-light selectable-card m-2 border-0 ">
        <div className="card-body">
          <p className="h4 fw-bold">{title}.</p>
          <p>{adress}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemCardComponent;
