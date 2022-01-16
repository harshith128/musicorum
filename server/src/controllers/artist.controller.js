const express = require("express");
// const router = express.Router();
const { nanoid } = require("nanoid");

const Artist = require("../models/artist.model");

const artistSignUp = async(req, res) => {

        let artist = await Artist.findOne({email: req.body.email});
        if(artist) {
            return res.status(400).send({message: "email found"});
        }
        
        artist = await Artist.create({
            ...req.body,
            artistId: nanoid(8),
        });

        return res.status(201).send({ artist });
}

const artistLogin = async(req, res) => {
    let artist;
    try {
        artist = await Artist.findOne({email: req.body.email});
        if(!artist) {
            return res.status(400).send({message: "Please check your email ot password"});
        }

        return res.status(201).send({ artist });

    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
}

module.exports = { artistSignUp, artistLogin };