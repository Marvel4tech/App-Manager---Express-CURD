const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler (async (req, res) => {
    res.status(200).json({ message: "Get all the contacts" })
})

//@desc Post new contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler (async (req, res) => {
    console.log("user details : ", req.body)
    const { name, email, job } = req.body
    if(!name || !email || !job) {
        res.status(400)
        throw new Error("All fields are mandatory!")
    }
    res.status(201).json({ message: "Create new contact" })
})

//@desc Get single contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`})
})

//@desc update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`})
})

//@desc delete new contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`})
})





module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}


