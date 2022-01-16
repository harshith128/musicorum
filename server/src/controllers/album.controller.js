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

router.get("/newest", async(req, res) => {
    try {
        const genre = req.query.genre;
        // console.log(genre)
        const page = req.query.page || 1;
        const size = 4;
        const offset = (page - 1) * size;
        let albums

        if(genre === undefined) {
            albums = await Album.find().limit(size).skip(offset).sort({"year":-1}).lean().exec();
            return res.status(200).send({ albums });
        }

        albums = await Album.find({ genre: { $elemMatch: { $eq: genre } } }).collation( { locale: 'en', strength: 1 } ).sort({"year":-1}).limit(size).skip(offset).lean().exec();
        return res.status(200).send({ albums });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.get("/oldest", async(req, res) => {
    try {
        const genre = req.query.genre;
        // console.log(genre)
        const page = req.query.page || 1;
        const size = 4;
        const offset = (page - 1) * size;
        let albums

        if(genre === undefined) {
            albums = await Album.find().limit(size).skip(offset).sort({"year": 1}).lean().exec();
            return res.status(200).send({ albums });
        }

        albums = await Album.find({ genre: { $elemMatch: { $eq: genre } } }).collation( { locale: 'en', strength: 1 } ).sort({"year": 1}).limit(size).skip(offset).lean().exec();
        return res.status(200).send({ albums });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.get("/:name", async(req, res) => {
    try{
        let name = req.params.name;
        console.log(name)
        if(!name) {
            return res.status(404).send({ err: "missing params" });
        }
        let album = await Album.findOne({ albumName: name }).collation( { locale: 'en', strength: 1 } );
        if(!album){
            return res.status(400).json({album});
        }
        return res.status(200).send({album});
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.get("", async(req, res) => {
    try {
        const genre = req.query.genre;
        // console.log(genre)
        const page = req.query.page || 1;
        const size = 4;
        const offset = (page - 1) * size;
        let albums

        if(genre === undefined) {
            albums = await Album.find().limit(size).skip(offset).lean().exec();
            return res.status(200).send({ albums });
        }

        albums = await Album.find({ genre: { $elemMatch: { $eq: genre } } }).collation( { locale: 'en', strength: 1 } ).limit(size).skip(offset).lean().exec();
        return res.status(200).send({ albums });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

module.exports = router;