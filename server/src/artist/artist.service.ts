import type { artistType } from "@shared/src/enums/artistType.enum.ts";
import { AppDataSource } from "../dataSource.ts";
import { Artist } from "./artist.entity.ts";

const artistRepository = AppDataSource.getRepository(Artist);


export const artistService =  {

    async getAllArtist() {
        return await artistRepository.find();
    }, 

    async getArtistById(uuid: string) {
        const artist =  await artistRepository.findOneBy({uuid: uuid});

        return artist;
    },

    async getArtistByName(artistName: string) {
    return await artistRepository.findOneBy({name: artistName});
    },

    async createArtist(type:  artistType, name: string) {
        const artist = new Artist();
        artist.type = type;
        artist.name = name;
        return await artistRepository.save(artist);
    }
}
