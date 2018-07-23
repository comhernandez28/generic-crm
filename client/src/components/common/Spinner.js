import React from "react";
import spinner from "./doubleringspinner.gif";

export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
