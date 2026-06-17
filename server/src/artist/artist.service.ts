import type { artistType } from "@shared/src/enums/artistType.enum.ts";
import { AppDataSource } from "../dataSource.ts";
import { Artist } from "./artist.entity.ts";

export class ArtistService {
    private artistRepository = AppDataSource.getRepository(Artist);

    async getAllArtist() {
        return await this.artistRepository.find();
    }

    async createArtist(artistType:  artistType) {
        const artist = new Artist();
        artist.artistType = artistType;
        return await this.artistRepository.save(artist);
    }
}
