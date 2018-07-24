import React, { Component } from "react";
import { connect } from "react-redux";
import { createAccount } from "../../actions/accountCreator";

//import components
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import TextArea from "../common/TextArea";
import DateInput from "../common/DateInput";

//to redirect on creation
import { withRouter } from "react-router-dom";

class EditAccount extends Component {
  constructor() {
    super();
    this.state = {
      accountName: "",
      accountWebsite: "",
      accountService: "",
      accountStatus: "",
      accountLiveDate: "",
      accountServer: "",
      accountContact: "",
      contactEmail: "",
      contactPhone: "",
      techStack: "",
      googleAssetsLink: "",
      jiraEpic: "",
      loginPortal: "",
      portalUsername: "",
      portalPassword: "",
      registrarPortal: "",
      registrarUsername: "",
      registrarPassword: "",
      notes: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    //set newAccount to local state
    const newAccount = {
      accountName: this.state.accountName,
      accountWebsite: this.state.accountWebsite,
      accountService: this.state.accountService,
      accountStatus: this.state.accountStatus,
      accountLiveDate: this.state.accountLiveDate,
      accountServer: this.state.accountServer,
      accountContact: this.state.accountContact,
      contactEmail: this.state.contactEmail,
      contactPhone: this.state.contactPhone,
      techStack: this.state.techStack,
      googleAssetsLink: this.state.googleAssetsLink,
      jiraEpic: this.state.jiraEpic,
      loginPortal: this.state.loginPortal,
      portalUsername: this.state.portalUsername,
      portalPassword: this.state.portalPassword,
      registrarPortal: this.state.registrarPortal,
      registrarUsername: this.state.registrarUsername,
      registrarPassword: this.state.registrarPassword,
      notes: this.state.notes
    };

    //dispatch registerUser with account and pass in history so action creator can use it
    this.props.createAccount(newAccount, this.props.history);
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      console.log(this.props.match.params.id);
      this.props.getAccountById(this.props.match.params.id);
    }
  }
  render() {
    const { errors } = this.props;

    const serviceTypeOptions = [
      { label: "Service Type (required)", value: "None" },
      { label: "Hosting and Development", value: "Hosting and Development" },
      { label: "Hosting Only", value: "Hosting Only" },
      { label: "Development Only", value: "Development Only" },
      { label: "Other", value: "Other" }
    ];

    const statusOptions = [
      { label: "Status (required)", value: "None" },
      { label: "New", value: "New" },
      { label: "In Progress", value: "In Progress" },
      { label: "Active", value: "Active" },
      { label: "On hold", value: "On hold" },
      { label: "Cancelled", value: "Cancelled" }
    ];

    const techStackOptions = [
      { label: "Tech Stack", value: "None" },
      { label: "WordPress", value: "WordPress" },
      { label: "Bootstrap", value: "Bootstrap" },
      { label: "Yardi", value: "Yardi" },
      { label: "React/Node", value: "React/Node" },
      { label: "Other", value: "Other" }
    ];

    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-4">Create Account</h1>
            </div>
          </div>
        </div>

        {/*GENERAL INFO*/}

        <div className="container">
          <div className="row">
            <div className="col">
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <h1 className="lead">General Account Info</h1>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Name (required)"
                        name="accountName"
                        value={this.state.accountName}
                        onChange={this.onChange}
                        errors={errors.accountName}
                      />
                    </div>

                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Website URL (required)"
                        name="accountWebsite"
                        value={this.state.accountWebsite}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="col-sm">
                      <SelectInput
                        placeholder="Service Type (required)"
                        name="accountService"
                        value={this.state.accountService}
                        options={serviceTypeOptions}
                        onChange={this.onChange}
                        info=""
                      />
                    </div>
                  </div>
                </div>

                {/* GENERAL 2*/}

                <div className="form-group">
                  <br />
                  <div className="row">
                    <div className="col-sm">
                      <SelectInput
                        placeholder="Status (required)"
                        name="accountStatus"
                        value={this.state.accountStatus}
                        options={statusOptions}
                        onChange={this.onChange}
                        info=""
                      />
                    </div>

                    <div className="col-sm">
                      <DateInput
                        type="date"
                        placeholder="Live Date"
                        name="accountLiveDate"
                        value={this.state.accountLiveDate}
                        onChange={this.onChange}
                        info="Live Date"
                      />
                    </div>

                    <div className="col-sm">
                      <TextInput
                        placeholder="Server"
                        name="accountServer"
                        value={this.state.accountServer}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                {/*CONTACT INFO*/}

                <div className="form-group">
                  <br />
                  <h1 className="lead">Contact Info</h1>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Contact Name"
                        name="accountContact"
                        value={this.state.accountContact}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Contact Email"
                        name="contactEmail"
                        value={this.state.contactEmail}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Contact Phone"
                        name="contactPhone"
                        value={this.state.contactPhone}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                {/*ASSET INFO*/}

                <div className="form-group">
                  <br />
                  <h1 className="lead">Asset Info</h1>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                      <SelectInput
                        placeholder="Tech Stack"
                        name="techStack"
                        value={this.state.techStack}
                        options={techStackOptions}
                        onChange={this.onChange}
                        info=""
                      />
                    </div>

                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Google Assets Link"
                        name="googleAssetsLink"
                        value={this.state.googleAssetsLink}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Jira Epic"
                        name="jiraEpic"
                        value={this.state.jiraEpic}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                {/*LOGIN PORTAL INFO*/}

                <div className="form-group">
                  <br />
                  <h1 className="lead">Login Portal Info</h1>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Login Portal"
                        name="loginPortal"
                        value={this.state.loginPortal}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Portal Username"
                        name="portalUsername"
                        value={this.state.portalUsername}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Portal Password"
                        name="portalPassword"
                        value={this.state.portalPassword}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                {/*REGISTRAR PORTAL INFO*/}

                <div className="form-group">
                  <br />
                  <h1 className="lead">Registrar Portal Info</h1>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Registrar Portal"
                        name="registrarPortal"
                        value={this.state.registrarPortal}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Registrar Username"
                        name="registrarUsername"
                        value={this.state.registrarUsername}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="col-sm">
                      <TextInput
                        type="text"
                        placeholder="Registrar Password"
                        name="registrarPassword"
                        value={this.state.registrarPassword}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                {/*NOTES*/}

                <div className="form-group">
                  <br />
                  <h1 className="lead">Notes</h1>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                      <TextArea
                        type="text"
                        placeholder="Notes"
                        name="notes"
                        value={this.state.notes}
                        onChange={this.onChange}
                        errors={errors.notes}
                      />
                    </div>
                  </div>
                </div>

                <input
                  value="Create Account"
                  type="submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createAccount, getAccountById }
)(withRouter(CreateAccount));
