const mongoose = require("mongoose"); 
require("mongoose-type-email");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: mongoose.SchemaTypes.Email, required: true }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
