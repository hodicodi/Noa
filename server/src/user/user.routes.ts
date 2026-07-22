import { SaveUserReqBody, UserParams, UserRes, UserSearchQueryParams, UsersRes } from "@shared/src/types/user.type.ts";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import userService from "./user.service.ts";

const userRouter = Router();

userRouter.get("/search", async (req: Request<unknown, unknown, unknown>, res: Response<UsersRes>) => {
  const searchQuery = ((req.query.searchQuery as string) || "");

  const users = await userService.getUsersWithQuery(searchQuery);

  res.status(StatusCodes.OK).json({ users });
});

userRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<UsersRes>) => {
  const users = await userService.getAllUsers();

  res.status(StatusCodes.OK).json({ users });
});

userRouter.post("/", async (req: Request<unknown, unknown, SaveUserReqBody>, res: Response<UserRes>) => {
  const { user } = req.body;
  const newUser = await userService.saveUser(user);
  res.status(StatusCodes.CREATED).json({ user: newUser });
});

userRouter.get("/:tz", async (req: Request<UserParams, unknown, unknown>, res: Response<UserRes>) => {
  const { tz } = req.params;
  const user = await userService.getUserByTz(tz);

  res.status(StatusCodes.OK).json({ user });
});

export default userRouter;
