import React, { Component } from "react";
import { Link } from "react-router-dom";
//asset import
import logo from "./ps-code.jpg";

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div
          style={{
            backgroundImage: `url(${logo})`,
            backgroundPosition: "center",
            height: "90vh"
          }}
          className="row d-flex align-items-center"
        >
          <div className="col-sm">
            <div className="trans-black-bg text-center m-5 p-5 text-white">
              <h1 className="display-4">Generic CRM</h1>
              <p className="lead">A simple CRM built in the MERN stack.</p>
              <hr className="my-4" />
              <p>Beta version of CRM.</p>
              <Link
                className="btn btn-outline-light btn-lg"
                to="/register"
                role="button"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
