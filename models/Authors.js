const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type:Number,
    },
    past_articles: {
      type:Number,
      default:0
    },
    dob: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//tell mongo about model
const savedmodel = mongoose.model("author", userSchema);

module.exports = savedmodel;

//models are nothing but names and description of types of fields in a document of a collection
