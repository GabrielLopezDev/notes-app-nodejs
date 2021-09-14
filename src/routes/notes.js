const express = require("express");
const router = express.Router();

const Note = require("../models/Note");


router.get("/notes", async (req, res) => {
	const notes = await Note.find().sort({date: "desc"}).lean();
	res.render("notes/all-notes", { notes: notes });
});

module.exports = router;