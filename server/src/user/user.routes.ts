import { Request, Response, Router } from "express";
import { userService, } from "./user.service.ts";
import { SaveUserReqBody, UserRes, UsersRes } from "@shared/src/types/user.type.ts";

const userRouter = Router();

userRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<UsersRes>) => {
    try {
        const users = await userService.getAllUsers();
        res.json({users});
    } catch (error) {
        res.status(500);
    }
});

userRouter.post("/", async (req: Request<unknown, unknown, SaveUserReqBody>, res: Response) => {
    try {
        const { isAdministor, userName, id} = req.body;
        const newUser = await userService.createUser(isAdministor, userName, id);
        res.status(201).json({newUser});
    } catch (error) {
        res.status(500);
    }
});

export default userRouter;
