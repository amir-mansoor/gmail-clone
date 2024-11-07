import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

const addUserToDb = asyncHandler(async (req, res) => {
  const { id, name, email, avatarUrl } = req.body;

  console.log("helloworld");

  const userExist = await User.findOne({ clerkId: id });
  if (userExist) {
    res.status(200).json({ message: "User already exists" });
  } else {
    const user = await User.create({
      clerkId: id,
      name,
      email,
      avatarUrl,
    });

    res.status(200).json({ message: "user added to database successfully." });
  }
});

export { addUserToDb };
