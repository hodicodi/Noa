import { AppDataSource } from "../dataSource.ts";
import { User } from "./user.entity.ts";

const userRepository = AppDataSource.getRepository(User);

export const userService = {

    async getUserById(id: string) {
        const user =  await User.findOneBy({id: id});

        return user;
    },

    async getAllUsers() {
        return await User.find();
    },

    async createUser(isAdministor: boolean, userName: string, id: string) {
        const user = User.create();
        user.isAdministor = isAdministor;
        user.userName = userName;
        user.id = id
        return await User.save(user);
    }
}
