import { ArtistType, SongType } from "./src";
import { Album } from "./src/types/album.types";
import { Song, SongOverviewProps } from "./src/types/song.types";

class Playlist {
  name: string;
  avaterPicture: string;
  artist: string;

  constructor(name: string, avaterPicture: string, artist: string) {
    this.name = name;
    this.avaterPicture = avaterPicture;
    this.artist = artist;
  }
}

export const playlistInfo: Playlist[] = [
  new Playlist(
    "Hevel Havalim",
    "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F890d5a9fbbe79b45c3cee4d7b086accd.1000x563x1.jpg",
    "Amgosha",
  ),
  new Playlist("Hevel Havalim", "https://images.unsplash.com/photo-1494548162494-384bba4ab999", "Amgosha"),
  new Playlist("Hevel Havalim", "https://images.unsplash.com/photo-1494548162494-384bba4ab999", "Amgosha"),
  new Playlist("Hevel Havalim", "https://images.unsplash.com/photo-1494548162494-384bba4ab999", "Amgosha"),
  new Playlist("Hevel Havalim", "https://images.unsplash.com/photo-1494548162494-384bba4ab999", "Amgosha"),
  new Playlist("Hevel Havalim", "https://images.unsplash.com/photo-1494548162494-384bba4ab999", "Amgosha"),
  new Playlist("Hevel Havalim", "https://images.unsplash.com/photo-1494548162494-384bba4ab999", "Amgosha"),
  new Playlist("Hevel Havalim", "https://images.unsplash.com/photo-1494548162494-384bba4ab999", "Amgosha"),
];

export const defaultAlbum: Album = {
  uuid: "20e229f2-9d5b-4a80-b162-304e2d523dcd",
  name: "Ultraviolence",
  imgUrl: "noa/test/Ultraviolence .png",
  artist: {
    uuid: "bc9ff2d8-a020-4f6f-b067-65929596e4b3",
    name: "Lana del rey",
    type: ArtistType.Singer,
  },
};

export const defaultSong: Song = {
  uuid: "1b2811aa-3b7c-48a1-bc9f-7561dc2687b8",
  name: "orange",
  genre: SongType.Pop,
  s3Url: "noa/test/orange.mp3",
  album: defaultAlbum,
};
