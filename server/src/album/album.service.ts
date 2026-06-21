import { ArtistService } from "../artist/artist.service.ts";
import { AppDataSource } from "../dataSource.ts";
import { Song } from "../song/song.entity.ts";
import { Album } from "./album.entity.ts";

export class AlbumService {
  private albumRepository = AppDataSource.getRepository(Album);
  artistService = new ArtistService();

  async getAllAlbum() {
    return await this.albumRepository.find();
  }

  async getAlbumById(albumUuid: number) {
    return await this.albumRepository.findOneBy({ albumUuid: albumUuid });
  }

  async getAlbumByName(albumName: string) {
    return await this.albumRepository.findOne({
      where: { albumName: albumName },
      relations: {
        songs: true,
        artist: true,
      },
    });
  }

  async createAlbum(albumName: string, artistUuid: number, songs: Song[]) {
    const album = new Album();
    const artist = await this.artistService.getArtistById(artistUuid);
    album.albumName = albumName;
    album.artist = artist!;
    album.songs = songs;
    return await this.albumRepository.save({ albumName, artist: artist!, songs });
  }

  async addSongToAlbum(albumUuid: number, song: Song) {
    const album = await this.getAlbumById(albumUuid);
    album?.songs.push(song);
    return await this.albumRepository.save(album!);
  }
}
