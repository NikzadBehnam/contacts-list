const express = require("express");
const router = express.Router();

// list contacts
router.route("/").get((req, res) => {
  res.status(200).json({ message: "get all contacts..." });
});

// create new contact
router.route("/").post((req, res) => {
  res.status(200).json({ message: "create new contact " });
});

// get a contact
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
});

// update a contact
router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `update contact from ${req.params.id}` });
});

// delete specific contact
router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `delete contact from ${req.params.id}` });
});

module.exports = router;
