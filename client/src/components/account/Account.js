import React, { Component } from "react";
import { connect } from "react-redux";
//import actions
import { getAccountById } from "../../actions/accountCreator";

//import components

class Account extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      console.log(this.props.match.params.id);
      this.props.getAccountById(this.props.match.params.id);
    }
  }
  render() {
    const { currentAccount } = this.props.account;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">General Account Info</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Account Name:</b> <br />
                  {currentAccount.accountName}
                </li>
                <li className="list-group-item">
                  <b>Account Website:</b> <br />
                  <a
                    href={`${currentAccount.accountWebsite}`}
                    target="_blank"
                    className="black-link"
                  >
                    {currentAccount.accountWebsite}
                  </a>
                </li>
                <li className="list-group-item">
                  <b>Service Type:</b> <br />
                  {currentAccount.accountService}
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">
                General Account Info (continued)
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Account Status:</b> <br />
                  {currentAccount.accountStatus}
                </li>
                <li className="list-group-item">
                  <b>Account Live Date:</b> <br />
                  {new Date(currentAccount.accountLiveDate).toDateString()}
                </li>
                <li className="list-group-item">
                  <b>Account Server:</b> <br />
                  {currentAccount.accountServer}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">Contact Info</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Account Contact:</b> <br />
                  {currentAccount.accountContact}
                </li>
                <li className="list-group-item">
                  <b>Contact Email:</b> <br />
                  {currentAccount.contactEmail}
                </li>
                <li className="list-group-item">
                  <b>Contact Phone:</b> <br />
                  {currentAccount.contactPhone}
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">Asset Info</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Tech Stack:</b> <br />
                  {currentAccount.techStack}
                </li>
                <li className="list-group-item">
                  <b>Google Assets Link:</b> <br />
                  {currentAccount.googleAssetsLink}
                </li>
                <li className="list-group-item">
                  <b>Jira Epic:</b> <br />
                  {currentAccount.jiraEpic}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">Login Portal Info</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Login Portal:</b> <br />
                  {currentAccount.loginPortal}
                </li>
                <li className="list-group-item">
                  <b>Portal Username:</b> <br />
                  {currentAccount.portalUsername}
                </li>
                <li className="list-group-item">
                  <b>Portal Password:</b> <br />
                  {currentAccount.portalPassword}
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">Registrar Portal Info</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Registrar Portal:</b> <br />
                  {currentAccount.registrarPortal}
                </li>
                <li className="list-group-item">
                  <b>Registrar Username:</b> <br />
                  {currentAccount.registrarUsername}
                </li>
                <li className="list-group-item">
                  <b>Registrar Password:</b> <br />
                  {currentAccount.registrarPassword}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-sm">
            <div className="card">
              <div className="card-header">Notes</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Notes:</b> <br />
                  {currentAccount.notes}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  account: state.account
});

export default connect(
  mapStateToProps,
  { getAccountById }
)(Account);
