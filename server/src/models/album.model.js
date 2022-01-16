const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    albumName: { type: String },
    albumId: { type: String, unique: true },
    artistName: [{ type: String }],
    artistId: { type: String, unique: true }
}, {
    versionKey: false,
    timestamps: true
});

const Album = mongoose.model("album", albumSchema);

module.exports = Album;