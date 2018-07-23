import React, { Component } from "react";
import { connect } from "react-redux";
import ServiceCard from "./ServiceCard";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h1 className="display-4">Dashboard</h1>
            <h3 className="lead">Welcome {user.name}!</h3>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <ServiceCard
                title="Hosting and Development"
                cardColor="white"
                subTitle="//TODO: PASS IN NUMBER"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <ServiceCard
                title="Active Websites"
                cardColor="pink"
                subTitle="//TODO: PASS IN NUMBER"
              />
            </div>
            <div className="col-sm-4">
              <ServiceCard
                title="Hosting Only"
                cardColor="lightgreen"
                subTitle="//TODO: PASS IN NUMBER"
              />
            </div>
            <div className="col-sm-4">
              <ServiceCard
                title="Development Only"
                cardColor="lightblue"
                subTitle="//TODO: PASS IN NUMBER"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
