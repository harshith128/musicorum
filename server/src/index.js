const express = require("express");

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
app.options('*', cors());

const AlbumController = require("./controllers/album.controller");

const { artistLogin, artistSignUp, getArtists } = require("./controllers/artist.controller");

app.use("/albums", AlbumController);

app.post("/artistlogin", artistLogin);

app.post("/artistsignup", artistSignUp);

app.get("/artists", getArtists);

module.exports = app;