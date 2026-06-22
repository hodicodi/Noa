import { AppDataSource } from "../dataSource.ts";
import { User } from "./user.entity.ts";

const userRepository = AppDataSource.getRepository(User);

export const userService = {

    async getAllUsers() {
        return await userRepository.find();
    },

    async createUser(isAdministor: boolean, userName: string, id: string) {
        const user = new User();
        user.isAdministor = isAdministor;
        user.userName = userName;
        user.id = id
        return await userRepository.save(user);
    }
}
