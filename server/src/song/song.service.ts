import { AppDataSource } from "../dataSource.ts";
import { Song } from "./song.entity.ts";

export class SongService {
    private songRepository = AppDataSource.getRepository(Song);

    async getAllSongs() {
        return await this.songRepository.find();
    }
}
