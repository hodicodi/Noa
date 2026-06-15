import { Repository } from "typeorm";
import { User } from "../entities/user.entity.ts";

export class UserService {
  constructor(private userRepository: Repository<User>) {}

    async toggleIsAdministor(uuid: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ uuid: uuid });
    
    if (!user) throw new Error("User not found");

    // Invoke domain logic encapsulated in the Entity
    user.toggleStatus(); 

    // Persist changes
    return await this.userRepository.save(user);
  }
}