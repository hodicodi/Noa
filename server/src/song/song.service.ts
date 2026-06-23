import { Song } from "./song.entity.ts";

export class SongService {

    async getAllSongs() {
        return await Song.find();
    }

    async getSongByUuid(uuid: string) {
        return await Song.findOneBy({uuid: uuid});
    }
}
