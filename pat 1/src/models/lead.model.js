const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
    id: {type: Number, require: true, unique: true}, 
    first_name: {type: String, require: true, unique: true},
    last_name: {type: String, require: true},
    mobile: {type: Number, require: true, unique: true},
    email: {type: String, require: true},
    location_type: {type: String, require: true, unique: true},
    location_string: {type: String, require: true},
    communication: {type: String, require: true, unique: true},
    status: {type: Boolean, require: true},
    
});

const Lead = mongoose.model("lead", leadSchema)

module.exports = Lead;