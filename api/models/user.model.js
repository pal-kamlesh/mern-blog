import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
