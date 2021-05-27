import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null && alerts.length ? (
    <div className="div position-fixed alert">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={` m-4 text-white font-weight-bold card p-3 zoomInRight animated faster bg-${alert.alertType}`}
        >
          {alert.msg}
        </div>
      ))}
    </div>
  ) : (
    <div></div>
  );

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
