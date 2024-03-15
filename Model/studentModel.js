const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    }
},{timestamps: true})

module.exports = mongoose.model("student",studentSchema);