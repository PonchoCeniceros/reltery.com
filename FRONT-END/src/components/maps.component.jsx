import React from "react";
import { GMap } from "primereact/gmap";

const options = {
  center: { lat: 36.890257, lng: 30.707417 },
  zoom: 12,
};

const MapComponent = () => {
  return (
    <div>
      <GMap options={options} style={{ width: "100%", minHeight: "320px" }} />
    </div>
  );
};

export default MapComponent;
