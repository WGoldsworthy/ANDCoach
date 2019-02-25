const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    googleUid: { type: String, required: true },
    firstName: { type: String, unique: true, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});



module.exports = mongoose.model('User', schema);