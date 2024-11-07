import express from "express";
import { addUserToDb } from "../controllers/userController.js";
// import { authUser } from "../middleware/authMiddleware.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
const router = express.Router();

router.route("/add-user").post(ClerkExpressRequireAuth(), addUserToDb);

export default router;
