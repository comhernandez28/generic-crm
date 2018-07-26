import React, { Component } from "react";
import { connect } from "react-redux";
import ServiceCard from "./ServiceCard";
import BarChart from "../common/BarChart";
import DoughnutChart from "../common/DoughnutChart";

//import actions
import { getAccounts } from "../../actions/accountCreator";

class Dashboard extends Component {
  componentDidMount() {
    //do something on load
    this.props.getAccounts();
  }

  render() {
    const { user } = this.props.auth;
    const { accounts } = this.props.account;

    const totalAccountData = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Accounts Launched",
          data: [3, 6, 3, 1, 1, 3, 5, 5, 3, 2, 1, 1],
          backgroundColor: "rgba(77, 147, 200, 0.6)"
        }
      ]
    };

    const accountServiceData = {
      labels: [
        "Hosting and Development",
        "Hosting Only",
        "Development Only",
        "Other"
      ],
      datasets: [
        {
          label: "Service Types",
          data: [4, 8, 9, 2],
          backgroundColor: [
            "rgba(12, 181, 181, 0.6)",
            "rgba(247, 252, 93, 0.6)",
            "rgba(32, 44, 108, 0.6)"
          ]
        }
      ]
    };

    const accountStatusData = {
      labels: ["New", "Active", "In Progress", "On Hold", "Cancelled"],
      datasets: [
        {
          label: "Status Types",
          data: [9, 4, 8, 2, 6],
          backgroundColor: [
            "rgba(12, 181, 181, 0.6)",
            "rgba(247, 252, 93, 0.6)",
            "rgba(32, 44, 108, 0.6)",
            "rgba(240, 70, 70, 0.6)"
          ]
        }
      ]
    };

    const techStackData = {
      labels: ["WordPress", "Bootstrap", "Yardi", "React/Node", "Other"],
      datasets: [
        {
          label: "Tech Stacks",
          data: [2, 4, 8, 2, 3],
          backgroundColor: [
            "rgba(12, 181, 181, 0.6)",
            "rgba(247, 252, 93, 0.6)",
            "rgba(32, 44, 108, 0.6)",
            "rgba(240, 70, 70, 0.6)"
          ]
        }
      ]
    };

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
              <BarChart
                chartData={totalAccountData}
                options={{
                  title: {
                    display: true,
                    text: "Accounts Launched",
                    fontSize: 20
                  },
                  maintainAspectRatio: true
                }}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <DoughnutChart
                chartData={accountServiceData}
                options={{
                  title: {
                    display: false
                  },
                  maintainAspectRatio: true
                }}
              />
              <br />
              <h4 className="text-center">Service Type</h4>
            </div>
            <div className="col-sm-4">
              <DoughnutChart chartData={accountStatusData} />
              <br />
              <h4 className="text-center">Account Status</h4>
            </div>
            <div className="col-sm-4">
              <DoughnutChart chartData={techStackData} />
              <br />
              <h4 className="text-center">Tech Stacks</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account
});

export default connect(
  mapStateToProps,
  { getAccounts }
)(Dashboard);
