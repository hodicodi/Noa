import { DeepPartial } from "typeorm";
import { User } from "./user.entity.ts";
import { HttpError } from "../errors/httpError.ts";
import { StatusCodes } from "http-status-codes";

const getUserByTz = async (tz: string) => {
  const user = await User.findOneBy({ tz });

  if (!user) {
    throw new HttpError(StatusCodes.NOT_FOUND, "user not found");
  }

  return user;
};

const getAllUsers = () => User.find();

const saveUser = (user: DeepPartial<User>) => User.save(user);

/*
const patchUser = async (tz: string, user: DeepPartial<User>) => {
  const existingUser = await User.findOneBy({ tz });

  if (!existingUser) {
    throw new HttpError(StatusCodes.NOT_FOUND, "user not found");
  }

  const updatedUser = User.merge(existingUser, user);

  return await User.save(updatedUser);
};
*/

export default { getUserByTz, getAllUsers, saveUser };
