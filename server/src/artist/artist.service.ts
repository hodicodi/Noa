import type { artistType } from "@shared/src/enums/artistType.enum.ts";
import { AppDataSource } from "../dataSource.ts";
import { Artist } from "./artist.entity.ts";

export class ArtistService {
    private artistRepository = AppDataSource.getRepository(Artist);

    async getAllArtist() {
        return await this.artistRepository.find();
    }

    async getArtistById(artistUuid: number) {
    return await this.artistRepository.findOneBy({artistUuid: artistUuid});
    }

    async getArtistByName(artistName: string) {
    return await this.artistRepository.findOneBy({artistName: artistName});
    }

    async createArtist(artistType:  artistType, artistName: string) {
        const artist = new Artist();
        artist.artistType = artistType;
        artist.artistName = artistName;
        return await this.artistRepository.save(artist);
    }
}
