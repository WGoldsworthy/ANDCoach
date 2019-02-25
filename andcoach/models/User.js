// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const UserSchema = new Schema(
  {
    userId: { type: String, required: true },
    firstName: { type: String, unique: true, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    imageUrl: { type: String, required: true }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);