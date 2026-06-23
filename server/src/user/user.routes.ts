import { SaveUserReqBody, UserParams, UserRes, UsersRes } from "@shared/src/types/user.type.ts";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { HttpError } from "../errors/httpError.ts";
import { userService, } from "./user.service.ts";

const userRouter = Router();

userRouter.get('/:uuid', async (req: Request<UserParams, unknown, unknown>, res: Response<UserRes>, next) => {
    try {
        const {id} = req.params;
        const user = await userService.getUserById(id);
        if(!user) {
            throw new HttpError(StatusCodes.NOT_FOUND, "user not found");
        }
        res.status(StatusCodes.OK).json({user});
    } catch (error) {
        next(error)
    }
});

userRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<UsersRes>, next) => {
    try {
        const users = await userService.getAllUsers();
        if(!users) {
            throw new HttpError(StatusCodes.NOT_FOUND, "none users were found");
        }
        res.status(StatusCodes.OK).json({users});
    } catch (error) {
        next(error)
    }
});

userRouter.post("/", async (req: Request<unknown, unknown, SaveUserReqBody>, res: Response, next) => {
    try {
        const { isAdministor, userName, id} = req.body;
        const newUser = await userService.createUser(isAdministor, userName, id);
        res.status(StatusCodes.CREATED).json({newUser});
    } catch (error) {
        next(error)
    }
});

export default userRouter;
