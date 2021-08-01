const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    msg: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    files: {
        type: Number,
        required: true
    },
    fileDetail: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Information = mongoose.model('Information',infoSchema);

module.exports = Information;