import { Router } from "express";
import { UserService } from "./user.service.ts";

const userRouter = Router();
const userService = new UserService();

userRouter.get("/", async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

userRouter.post("/", async (req, res) => {
    try {
        const {isAdministor, userName } = req.body;
        const newUser = await userService.createUser(isAdministor, userName);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Failed to create user" });
    }
});

export default userRouter;
