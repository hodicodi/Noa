import type { artistType } from "@shared/src/enums/artistType.enum.ts";
import { Artist } from "./artist.entity.ts";


export const artistService =  {

    async getAllArtist() {
        return await Artist.find();
    }, 

    async getArtistById(uuid: string) {
        const artist =  await Artist.findOneBy({uuid: uuid});

        return artist;
    },

    async getArtistByName(artistName: string) {
    return await Artist.findOneBy({name: artistName});
    },

    async createArtist(type:  artistType, name: string) {
        const artist = await Artist.create();
        artist.type = type;
        artist.name = name;
        return await Artist.save(artist);
    }
}
