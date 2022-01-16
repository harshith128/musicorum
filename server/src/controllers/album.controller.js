const express = require("express");
const router = express.Router();

const { nanoid } = require("nanoid");

router.post("", async(req, res) => {
    console.log(req.body);
    return res.status(201).json({ hello : "hello" });
})

module.exports = router;