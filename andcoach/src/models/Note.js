const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: { type: String, unique: true, required: true },
    body: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },\
    user_id: { type: String, required: true }
});


module.exports = mongoose.model('User', schema);