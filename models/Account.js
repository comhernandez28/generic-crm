const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
Account Name
Account Website
Account Service
Account Status
Account Live Date
Account Server
Account Contact
Contact Email
Contact Phone
Tech Stack
Google Assets Link
Jira Epic
Login Portal
Portal Username
Portal Password
Registrar Portal
Registrar Username
Registrar Password
Notes
Date Created
*/

// Create Schema
const AccountSchema = new Schema({
  accountName: {
    type: String,
    required: true
  },
  accountId: {
    type: String,
    required: true
  },
  accountWebsite: {
    type: String,
    required: true
  },
  accountService: {
    type: String,
    required: true
  },
  accountStatus: {
    type: String,
    required: true
  },
  accountLiveDate: {
    type: Date
  },
  accountServer: {
    type: String
  },
  accountContact: {
    type: String
  },
  contactEmail: {
    type: String
  },
  contactPhone: {
    type: String
  },
  techStack: {
    type: String
  },
  googleAssetsLink: {
    type: String
  },
  jiraEpic: {
    type: String
  },
  loginPortal: {
    type: String
  },
  portalUsername: {
    type: String
  },
  portalPassword: {
    type: String
  },
  registrarPortal: {
    type: String
  },
  registrarUsername: {
    type: String
  },
  registrarPassword: {
    type: String
  },
  notes: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Account = mongoose.model("account", AccountSchema);
