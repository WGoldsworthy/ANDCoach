// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ObjectiveSchema = new Schema(
  {
    title: { type: String, unique: true, required: true },
    notes: { type: String, required: true },
    evidence: { type: String, required: true },
    status: { type: String, required: true },
    user_id: { type: String, required: true }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Objective", ObjectiveSchema);