const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ClientProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  gender: {
    type: String,
    required: true
  },
  State: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  image: {
    type: String,
    data: Buffer
  },
  description: {
    type: String
  }
});
