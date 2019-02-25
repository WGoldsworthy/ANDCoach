const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, unique: true, required: true },
    notes: { type: String, required: true },
    evidence: { type: String, required: true },
    _id: { type: String, required: true },
    status: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    user_id: { type: String, required: true }
});



module.exports = mongoose.model('Objective', schema);