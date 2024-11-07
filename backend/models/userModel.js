import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true }, // Clerk's unique user ID
  email: { type: String, required: true, unique: true },
  name: { type: String },
  avatarUrl: { type: String },
});

const User = mongoose.model("User", userSchema);
export default User;
