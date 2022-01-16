const mongoose = require("mongoose");

module.exports = (req, res) => {
    return mongoose.connect("mongodb+srv://musicorum:MUS93ORUM@cluster0.03vmp.mongodb.net/musicorumdb?retryWrites=true&w=majority")
}