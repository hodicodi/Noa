import { SaveUserReqBody, UserParams, UserRes, UsersRes } from "@shared/src/types/user.type.ts";
import { Request, response, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import userService from "./user.service.ts";
import { User } from "./user.entity.ts";


const userRouter = Router();

userRouter.get("/:tz", async (req: Request<UserParams, unknown, unknown>, res: Response<UserRes>) => {
  const { tz } = req.params;
  const user = await userService.getUserByTz(tz);

  res.status(StatusCodes.OK).json({ user });
});

userRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<UsersRes>) => {
  const users = await userService.getAllUsers();

  res.status(StatusCodes.OK).json({ users });
});

userRouter.post("/", async (req: Request<unknown, unknown, SaveUserReqBody>, res: Response<UserRes>) => {
  const { user } = req.body;
  const newUser = await userService.createUser(user);
  res.status(StatusCodes.CREATED).json({ user: newUser });
});

userRouter.patch("/:tz", async (req: Request<UserParams, unknown, SaveUserReqBody>, res: Response<UserRes>) => {
  const { tz } = req.params;
  const {user} = req.body;
    const newUser = await userService.patchUser(tz, user);
  res.status(StatusCodes.OK).json({ user: newUser });

});

export default userRouter;
