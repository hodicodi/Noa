import { AppDataSource } from "../dataSource.ts";
import { User } from "./user.entity.ts";

export class UserService {
    private userRepository = AppDataSource.getRepository(User);

    async getAllUsers() {
        return await this.userRepository.find();
    }

    async createUser(isAdministor: boolean, userName: string) {
        const user = new User();
        user.isAdministor = isAdministor;
        user.userName = userName;
        return await this.userRepository.save(user);
    }
}
