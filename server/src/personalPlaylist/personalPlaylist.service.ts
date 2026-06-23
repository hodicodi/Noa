import { personalPlaylistType } from "@shared/src/enums/personalPlaylistType.enum.ts";
import { AppDataSource } from "../dataSource.ts";
import type { Song } from "../song/song.entity.ts";
import { PersonalPlaylist } from "./personalPlaylist.entity.ts";


export const PersonalPlaylistService  = {

  async getAllPersonalPlaylist() {
    return await PersonalPlaylist.find();
  },

  async getPersonalPlaylistById(uuid: string) {
    return await PersonalPlaylist.findOneBy({uuid: uuid});
  },

  async createPersonalPlaylist(type: personalPlaylistType) {
      const personal_playlist = new PersonalPlaylist();
      personal_playlist.type = type;
      return await PersonalPlaylist.save(personal_playlist);
  },
  
  async addSongToPersonalPlaylist(uuid: string, song: Song) {
      const personalPlaylist = await this.getPersonalPlaylistById(uuid);
      personalPlaylist?.songs.push(song);
      return await PersonalPlaylist.save(personalPlaylist!);
    }  
}
