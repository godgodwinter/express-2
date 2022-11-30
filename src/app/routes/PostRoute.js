import express from "express";
import { getUsers } from "../controllers/PostController.js";

const PostRoute = express.Router();

PostRoute.get("/users", getUsers);
// router.get("/users/:id", getUserById);
// router.post("/users", createUser);
// router.patch("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);

export default PostRoute;
