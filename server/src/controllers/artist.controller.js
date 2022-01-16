const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");

const Artist = require("../models/artist.model");

const artistSignUp = async(req, res) => {

        let artist = await Artist.findOne({artistName: req.body.artistName});
        if(artist) {
            return res.status(400).send({message: "artistName found"});
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
        artist = await Artist.findOne({ $and: [ {artistName: req.body.artistName}, {password: req.body.password} ] });
        if(!artist) {
            return res.status(400).send({message: "Please check artistName or password"});
        }

        return res.status(201).send({ artist });

    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
}

const getArtists = async(req, res) => {
    let artists = await Artist.find().lean().exec();
    return res.status(200).send({ artists });
}

module.exports = { artistSignUp, artistLogin, getArtists };