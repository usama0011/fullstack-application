var mongoose = require("mongoose");
var Schema = mongoose.Schema;

(userSchema = new Schema(
  {
    unique_id: Number,
    email: String,
    password: String,
    passwordConf: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)),
  (User = mongoose.model("User", userSchema));

module.exports = User;
