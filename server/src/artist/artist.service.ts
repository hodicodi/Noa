import { AppDataSource } from "../dataSource.ts";
import { Artist } from "./artist.entity.ts";

export class ArtistService {
    private artistRepository = AppDataSource.getRepository(Artist);

    async getAllArtist() {
        return await this.artistRepository.find();
    }

}
