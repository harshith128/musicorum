const express = require("express");
const router = express.Router();

const { nanoid } = require("nanoid");
const Album = require("../models/album.model");

router.post("", async(req, res) => {
    let album = await Album.create({
        ...req.body,
        albumId: nanoid(8),
    });
    return res.status(201).json({ album });
})

module.exports = router;