import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./user.entity.ts";
import { Artist } from "./artist.entity.ts";
import { Album } from "./album.entity.ts";

export enum artistType {
  ROCK = "rock",
  POP = "pop",
  HIP_HOP = "hip-hop",
  COUNTRY = "country",
}

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  uuid!: number;

  @ManyToOne(() => Artist, (artist) => artist.songs, { onDelete: "CASCADE" })
  @JoinColumn({ name: "uuid" })
  artist: Artist;

  @ManyToOne(() => Album, (album) => album.songs, { onDelete: "CASCADE" })
  @JoinColumn({ name: "album" })
  album: Album;

  @Column({ type: "date", default: () => "CURRENT_DATE" })
  publishDate: string;

  @Column({ type: "number", default: () => 0 })
  views: number;

  @Column({ type: "number"})
  length: number;
}
