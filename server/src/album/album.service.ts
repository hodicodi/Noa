import { AppDataSource } from "../dataSource.ts";
import { Album } from "./album.entity.ts";

export class AlbumService {
    private albumRepository = AppDataSource.getRepository(Album);

    async getAllAlbum() {
        return await this.albumRepository.find();
    }
}
