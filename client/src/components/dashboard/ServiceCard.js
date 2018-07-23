import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div>
      <div
        className="card"
        style={{ backgroundColor: props.cardColor, color: "black" }}
      >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2">{props.subTitle}</h6>
          <p className="card-text">TODO: ADD GRAPH</p>
          <Link to="/accounts" className="btn btn-outline-dark">
            Accounts
          </Link>
        </div>
      </div>
    </div>
  );
};
