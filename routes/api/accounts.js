const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Account Model
const Account = require("../../models/Account");

// @route   GET api/accounts/test
// @desc    Tests account route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Accounts Works" }));

// @route   GET api/accounts/all
// @desc    Get all accounts
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};

  Account.find()
    .then(accounts => {
      if (!accounts) {
        errors.noaccounts = "There are no accounts";
        return res.status(404).json(errors);
      }
      res.json(accounts);
    })
    .catch(err =>
      res.status(404).json({ accounts: "There are no accounts " + accounts })
    );
});

// @route   GET api/accounts/:id
// @desc    Get accounts by id
// @access  Public

router.get("/:id", (req, res) => {
  const errors = {};

  Account.findOne({ accountId: req.params.id })
    .then(account => {
      if (!account) {
        errors.noaccount = "There is no account with this id";
        res.status(404).json(errors);
      }

      res.json(account);
    })
    .catch(err => res.status(404).json(err));
});

// @route   POST api/accounts/create
// @desc    Make a new account
// @access  Private
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get fields
    const accountFields = {};
    if (req.body.accountName) {
      accountFields.accountName = req.body.accountName;
      accountFields.accountId = req.body.accountName
        .toLowerCase()
        .replace(/\s+/g, "");
    }

    if (req.body.accountWebsite) {
      accountFields.accountWebsite = req.body.accountWebsite;
    }

    if (req.body.accountService) {
      accountFields.accountService = req.body.accountService;
    }

    if (req.body.accountStatus) {
      accountFields.accountStatus = req.body.accountStatus;
    }

    if (req.body.accountLiveDate) {
      accountFields.accountLiveDate = req.body.accountLiveDate;
    }

    if (req.body.accountServer) {
      accountFields.accountServer = req.body.accountServer;
    }

    if (req.body.accountContact) {
      accountFields.accountContact = req.body.accountContact;
    }

    if (req.body.contactEmail) {
      accountFields.contactEmail = req.body.contactEmail;
    }

    if (req.body.contactPhone) {
      accountFields.contactPhone = req.body.contactPhone;
    }

    if (req.body.techStack) {
      accountFields.techStack = req.body.techStack;
    }

    if (req.body.googleAssetsLink) {
      accountFields.googleAssetsLink = req.body.googleAssetsLink;
    }

    if (req.body.jiraEpic) {
      accountFields.jiraEpic = req.body.jiraEpic;
    }

    if (req.body.loginPortal) {
      accountFields.loginPortal = req.body.loginPortal;
    }

    if (req.body.portalUsername) {
      accountFields.portalUsername = req.body.portalUsername;
    }

    if (req.body.portalPassword) {
      accountFields.portalPassword = req.body.portalPassword;
    }

    if (req.body.registrarPortal) {
      accountFields.registrarPortal = req.body.registrarPortal;
    }

    if (req.body.registrarUsername) {
      accountFields.registrarUsername = req.body.registrarUsername;
    }

    if (req.body.registrarPassword) {
      accountFields.registrarPassword = req.body.registrarPassword;
    }

    if (req.body.notes) {
      accountFields.notes = req.body.notes;
    }

    if (req.body.dateCreated) {
      accountFields.dateCreated = req.body.dateCreated;
    }

    // Track changes in the future here

    Account.findOne({ accountName: req.body.accountName }).then(account => {
      if (account) {
        // Update
        Account.findOneAndUpdate({ $set: accountFields }, { new: true }).then(
          account => res.json(account)
        );
      } else {
        // Create

        // Check if account name exists
        Account.findOne({ accountName: accountFields.accountName }).then(
          account => {
            if (account) {
              errors.accountName = "That Account Name already exists";
              res.status(400).json(errors);
            }

            // Save Account
            new Account(accountFields)
              .save()
              .then(account => res.json(account));
          }
        );
      }
    });
  }
);

module.exports = router;
