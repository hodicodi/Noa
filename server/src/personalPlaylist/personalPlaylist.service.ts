import { personalPlaylistType } from "@shared/src/enums/personalPlaylistType.enum.ts";
import { AppDataSource } from "../dataSource.ts";
import type { Song } from "../song/song.entity.ts";
import { PersonalPlaylist } from "./personalPlaylist.entity.ts";

export class PersonalPlaylistService {
  private personalPlaylistRepository =
    AppDataSource.getRepository(PersonalPlaylist);

  async getAllPersonalPlaylist() {
    return await this.personalPlaylistRepository.find();
  }

  async getPersonalPlaylistById(personalPlaylistUuid: number) {
    return await this.personalPlaylistRepository.findOneBy({personalPlaylistUuid: personalPlaylistUuid});
  }

  async createPersonalPlaylist(platlistType: personalPlaylistType) {
      const personal_playlist = new PersonalPlaylist();
      personal_playlist.platlistType = platlistType;
      return await this.personalPlaylistRepository.save(personal_playlist);
  }
  
  async addSongToPersonalPlaylist(personalPlaylistUuid: number, song: Song) {
      const personalPlaylist = await this.getPersonalPlaylistById(personalPlaylistUuid);
      personalPlaylist?.songs.push(song);
      return await this.personalPlaylistRepository.save(personalPlaylist!);
    }  
}
