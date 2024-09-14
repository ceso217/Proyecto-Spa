import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
    minLength: [3, "Username must be at least 3 characters"],
    maxLength: [8, "Username must be at most 8 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
      "Email is not valid",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  fullname: {
    type: String,
    required: [true, "Fullname is required"],
  },
  birthdate: {
    type: String,
    required: [true, "Birthday is required"],
  },
});

const User = models.User || model("User", userSchema);
export default User;
