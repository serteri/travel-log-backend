const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
    name: String,

});

const Role = mongoose.model('Role', RoleSchema,'role');

module.exports = {Role};