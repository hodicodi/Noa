import { Artist } from "../artist/artist.entity.ts";
import { artistService } from "../artist/artist.service.ts";
import { AppDataSource } from "../dataSource.ts";
import { Song } from "../song/song.entity.ts";
import { Album } from "./album.entity.ts";

const albumRepository = AppDataSource.getRepository(Album);


export const albumService =  {

  async getAllAlbum() {
    return await albumRepository.find();
  },

  async getAlbumById(uuid: string) {
    return await albumRepository.findOne({  
      where: { uuid: uuid },
      relations: {
        songs: true,
        artist: true,
      },
     });
  },

  
  async createAlbum(name: string,  songs: Song[],  artistUuid: string) {
    const album = new Album();
    const artist =  await artistService.getArtistById(artistUuid);
    album.name = name;
    album.artist = artist!;
    album.songs = songs;
    return await albumRepository.save(album);
  },
  

  async addSongToAlbum(albumUuid: string, song: Song) {
    const album = await this.getAlbumById(albumUuid);
    album?.songs.push(song);
    return await albumRepository.save(album!);
  }
}

