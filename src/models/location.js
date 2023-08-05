const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
//   picture: {
//     type: String,
//     required: true
//   },
//   note: {
//     type: String,
//     required: true
//   }
});

const Location = mongoose.model('Location', LocationSchema);
module.exports = Location;

// need to figure out what fields we need in this model.