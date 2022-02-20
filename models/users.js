const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
  },
  username: {
    type: String,
    required: [true, "Please enter the username"],
    minlength: 4,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "Email required"],
    validate: {
      validator: function (em) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em);
      },
      message: `Please enter the a valid email`,
    },
  },
  address: {
    street: {
      type: String,
      required: [true, "Please enter the street name"],
    },
    suite: {
      type: String,
      required: [true, "Please enter the suite"],
    },
    city: {
      type: String,
      required: [true, "Please enter the city "],
      match: [/^[a-zA-Z\s]*$/, "City can only have alphabets and space"],
    },
    zipcode: {
      type: String,
      required: [true, "Please enter the zip code"],
      match: [/([0-9]{5}).\-?([0-9]{4})/, "Please enter a valid ZIP code"],
    },
    geo: {
      lat: {
        type: String,
        required: [true, "Please enter the latitude"],
      },
      lng: {
        type: String,
        required: [true, "Please enter the longitude"],
      },
    },
  },
  phone: {
    type: String,
    required: true,
    match: [
      /([0-9]).\-?([0-9]{3}).\-?([0-9]{3}).\-?([0-9]{4})/,
      "Please enter a valid phone number",
    ],
  },
  website: {
    type: String,
    required: true,
    match: [/^(?:(?:(?:http?|https):)?\/\/).+\..+/, "Please enter a valid URL"],
  },
  company: {
    name: {
      type: String,
      required: [true, "Please enter the string"],
    },
    catchPhrase: {
      type: String,
      required: true,
    },
    bs: {
      type: String,
      require: true,
    },
  },
});

const users = mongoose.model("users", userSchema);
module.exports = users;
