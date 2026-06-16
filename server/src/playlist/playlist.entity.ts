import { OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Song } from "../song/song.entity.ts";

export abstract class Playlist {
  @PrimaryGeneratedColumn('uuid')
  uuid: number;

  @OneToMany(() => Song, (song) => song.playlist)
  songs: Song[];
}
