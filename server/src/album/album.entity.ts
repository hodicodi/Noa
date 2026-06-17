import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Artist } from "../artist/artist.entity.ts";
import { Song } from "../song/song.entity.ts";

@Entity()
export class Album {
  @PrimaryGeneratedColumn("uuid")
  uuid: number;

  @OneToMany(() => Song, (song) => song.album)
  songs: Song[];

  @Column({ type: "int" })
  views: number;

  @Column({ type: "int" })
  length: number;

  @ManyToOne(() => Artist, (artist) => artist.albums, { onDelete: "CASCADE" })
  @JoinColumn()
  artist: Artist;
}
