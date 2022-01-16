const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    albumName: { type: String },
    albumId: { type: String, unique: true },
    cover: { type: String },
    artistName: { type: String },
    artistId: { type: String, unique: true },
    genre: { type: String },
    year: { type: Number },
    songs: [ { name: String, duration: String } ]
}, {
    versionKey: false,
    timestamps: true
});

const Album = mongoose.model("album", albumSchema);

module.exports = Album;