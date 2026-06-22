import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Artist } from "../artist/artist.entity.ts";
import { Song } from "../song/song.entity.ts";

@Entity()
export class Album {
  @PrimaryGeneratedColumn("uuid")
  albumUuid: string;

  @Column({ type: "text", unique: true })
  albumName: string;

  @OneToMany(() => Song, (song) => song.album, {cascade: true})
  songs: Song[];

  @ManyToOne(() => Artist, (artist) => artist.albums, { onDelete: "CASCADE" })
  @JoinColumn()
  artist: Artist;
}
