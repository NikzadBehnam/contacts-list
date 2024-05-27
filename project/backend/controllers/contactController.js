// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getAllContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts..." });
};

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {  
  const { name, email, phone } = req.body;

  if ((!name, !email, !phone)) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  res.status(201).json({ message: "create new contact " });
};

// @desc GET a contact
// @route POST /api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

// @desc Delete Contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact from ${req.params.id}` });
};

// @desc Update contact
// @route put /api/contacts/:id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `put contact for ${req.params.id}` });
};

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
