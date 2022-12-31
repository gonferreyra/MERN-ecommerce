import React from "react";
import { ClockLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ClockLoader />
    </div>
  );
};

export default Spinner;
