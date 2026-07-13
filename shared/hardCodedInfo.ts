import { SongOverviewProps } from "./src/types/song.types";

class Playlist {
  name: string;
  avaterPicture: string;
  artist : string;

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
    "Amgosha"
  ),
    new Playlist(
    "Hevel Havalim",
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999",
    "Amgosha"
  ),
    new Playlist(
    "Hevel Havalim",
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999",
    "Amgosha"
  ),
    new Playlist(
    "Hevel Havalim",
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999",
    "Amgosha"
  ),
    new Playlist(
    "Hevel Havalim",
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999",
    "Amgosha"
  ),
    new Playlist(
    "Hevel Havalim",
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999",
    "Amgosha"
  ),
    new Playlist(
    "Hevel Havalim",
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999",
    "Amgosha"
  ),
    new Playlist(
    "Hevel Havalim",
    "https://images.unsplash.com/photo-1494548162494-384bba4ab999",
    "Amgosha"
  ),
];

export const songsInfo: SongOverviewProps[] = [
  {
    uuid: "ab38b12b-5025-4ca7-bd6f-ed8f795b3527",
    name: "One",
    artistName: "Dudu tasa"
  },
    {
    uuid: "4b687870-6350-4155-bd3d-217f59caddb4",
    name: "Two",
    artistName: "Dudu tasa"
  },
    {
    uuid: "4b687870-6350-4155-bd3d-217f59caddb4",
    name: "Three",
    artistName: "Dudu tasa"
  },
    {
    uuid: "4b687870-6350-4155-bd3d-217f59caddb4",
    name: "Four",
    artistName: "Dudu tasa"
  },
    {
    uuid: "4b687870-6350-4155-bd3d-217f59caddb4",
    name: "Five",
    artistName: "Dudu tasa"
  },
    {
    uuid: "4b687870-6350-4155-bd3d-217f59caddb4",
    name: "Sixxxxx",
    artistName: "Dudu tasa"
  },
    {
    uuid: "4b687870-6350-4155-bd3d-217f59caddb4",
    name: "Sevennnn",
    artistName: "Dudu tasa"
  },
    {
    uuid: "4b687870-6350-4155-bd3d-217f59caddb4",
    name: "Eight",
    artistName: "Dudu tasa"
  },
    {
    uuid: "4b687870-6350-4155-bd3d-217f59caddb4",
    name: "Nine",
    artistName: "Dudu tasa"
  },
]