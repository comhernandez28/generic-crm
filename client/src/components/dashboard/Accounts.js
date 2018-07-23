import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

//import actions
import { getAccounts } from "../../actions/accountCreator";

//import components
import Spinner from "../common/Spinner";

class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    //do something on load
    this.props.getAccounts();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const data = this.props.account.accounts;
    /*[
      {
        name: "StarCrowd",
        url: "http://example.com",
        contact: {
          name: "John Doe",
          email: "johndoe@gmail.com"
        }
      }
    ];*/

    const columns = [
      {
        Header: "Account Name",
        accessor: "accountName",
        //row is the object being passed
        //value is the value that would be in this column
        Cell: row => (
          <div className="text-center">
            <Link
              className="black-link"
              to={`/accounts/${row.value.toLowerCase().replace(/\s+/g, "")}`}
            >
              {row.value}
            </Link>
          </div>
        )
      },
      {
        Header: "URL",
        accessor: "accountWebsite",
        Cell: props => (
          <div className="text-center">
            <a href={`${props.value}`} target="_blank" className="black-link">
              {props.value}
            </a>
          </div>
        )
      },
      {
        Header: "Portal Username",
        accessor: "portalUsername",
        Cell: props => (
          <div className="text-center">
            <span className="">{props.value}</span>
          </div>
        )
      },
      {
        Header: "Portal Password",
        accessor: "portalPassword",
        Cell: props => (
          <div className="text-center">
            <span className="">{props.value}</span>
          </div>
        )
      }
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1 className="display-4">Account Table</h1>
          </div>
          <div className="col-sm text-right">
            <Button className="btn btn-outline-dark m-2" onClick={this.toggle}>
              Help
            </Button>
            <Link to="/create-account" className="btn btn-outline-dark m-2">
              Create Account
            </Link>
          </div>
        </div>

        {this.props.account.tableLoading ? (
          <Spinner />
        ) : (
          <ReactTable
            className="-striped -highlight"
            filterable
            data={data}
            columns={columns}
          />
        )}

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>How to use the table</ModalHeader>

          <ModalBody>
            <p>Click on the account name to go to the account page.</p>
            <p>Click on the account URL to go to the account website.</p>
            <br />
            <p>
              Hold Shift + Click to sort: <br /> Alphabetically <br /> Reverse{" "}
              <br /> Unsort
            </p>
          </ModalBody>

          <ModalFooter>
            <Button className="btn btn-outline-dark" onClick={this.toggle}>
              Thanks!
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Accounts.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  account: state.account
});

export default connect(
  mapStateToProps,
  { getAccounts }
)(Accounts);
