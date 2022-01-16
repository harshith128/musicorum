const express = require("express");

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
app.options('*', cors());

const AlbumController = require("./controllers/album.controller");

app.use("/albums", AlbumController);

module.exports = app;