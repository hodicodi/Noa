import { DeepPartial, ILike, Repository } from "typeorm";
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

const getUsersWithQuery = async (searchQuery: string) => 
  await User.find({
    where: [{ name: ILike(`%${searchQuery}%`) }, { tz: ILike(`%${searchQuery}%`) }],
  });


const saveUser = (user: DeepPartial<User>) => User.save(user);

export default { getUserByTz, getAllUsers, saveUser, getUsersWithQuery };
