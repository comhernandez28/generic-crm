import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authCreator";
import { clearCurrentProfile } from "../../actions/profileCreator";

//asset import
import logo from "./izone-logo.jpg";

class Navbar extends Component {
  constructor() {
    super();

    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>
        <form className="form-inline">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle"
                src={user.avatar}
                alt={user.name}
                style={{
                  width: "40px",
                  marginRight: "5px"
                }}
                title="You must have a Gravtar connected to your email to display an image."
              />
              {user.name}
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <Link to="/create-account" className="dropdown-item">
                Create Account
              </Link>
              <a
                className="dropdown-item"
                onClick={this.onLogoutClick.bind(this)}
              >
                Logout
              </a>
            </div>
          </div>
        </form>
      </div>
    );

    const guestLinks = (
      <div>
        <form className="form-inline">
          <Link className="btn btn-outline-light my-2 my-sm-0" to="/login">
            Login
          </Link>
        </form>
      </div>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
          <Link className="navbar-brand" to="/">
            <img
              style={{
                width: "50px",
                padding: "0",
                margin: "0",
                borderRadius: "3px"
              }}
              src={logo}
              alt="iZone Marketing"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/accounts">
                  Accounts
                </Link>
              </li>
            </ul>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
