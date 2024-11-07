import { verifyToken } from "@clerk/clerk-sdk-node";
import asyncHandler from "./asyncHandler.js";

const authUser = asyncHandler(async (req, res, next) => {
  let token;

  token = req.headers.authorization.split(" ")[1];

  if (token) {
    try {
      const decodedToken = await verifyToken(token);
      console.log(decodedToken);
      if (!decodedToken) {
        res.status(401);
        throw new Error("Not authorized, token failed");
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { authUser };
