import { AppDataSource } from "../dataSource.ts";
import { PersonalPlaylist } from "./personalPlaylist.entity.ts";

export class PersonalPlaylistService {
  private personalPlaylistRepository =
    AppDataSource.getRepository(PersonalPlaylist);

  async getAllPersonalPlaylist() {
    return await this.personalPlaylistRepository.find();
  }

}
