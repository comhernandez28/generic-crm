import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import actions
import { getAccountById } from "../../actions/accountCreator";

//import components
import Spinner from "../common/Spinner";

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
          <div className="col-sm">
            <h1>Account View</h1>
            <p>Account Name: {currentAccount.accountName}</p>
            <p>
              Account Website:
              <a>{currentAccount.accountName}</a>
            </p>
            <p>Account Service: {currentAccount.accountService}</p>
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
