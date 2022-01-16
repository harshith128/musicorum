const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    artistName: { type: String },
    email: { type: String },
    password: { type: String },
    artistId: { type: String },
    image: { type: String },
}, {
    versionKey: false,
    timestamps: true
});

const Artist = mongoose.model("artist", artistSchema);

module.exports = Artist;