import { Artist } from "../artist/artist.entity.ts";
import { ArtistService } from "../artist/artist.service.ts";
import { AppDataSource } from "../dataSource.ts";
import type { Song } from "../song/song.entity.ts";
import { Album } from "./album.entity.ts";

export class AlbumService {
  private albumRepository = AppDataSource.getRepository(Album);
  artistService = new ArtistService();

  async getAllAlbum() {
    return await this.albumRepository.find();
  }

  async getAlbumById(albumUuid: number) {
    return await this.albumRepository.findOneBy({albumUuid: albumUuid});
  }

  async createAlbum(artistUuid: number, songs: Song[]) {
    const album = new Album();
    const artist = await this.artistService.getArtistById(artistUuid);
    album.artist = artist!;
    album.songs = songs;
    return await this.albumRepository.save(album);
  }

  async addSongToAlbum(albumUuid: number, song: Song) {
    const album = await this.getAlbumById(albumUuid);
    album?.songs.push(song);
    return await this.albumRepository.save(album!);
  }  
}