import { AppDataSource } from "../dataSource.ts";
import { Song } from "./song.entity.ts";

export class SongService {
    private songRepository = AppDataSource.getRepository(Song);

    async getAllSongs() {
        return await this.songRepository.find();
    }

    async getSongByUuid(uuid: string) {
        return await this.songRepository.findOneBy({uuid: uuid});
    }
}
