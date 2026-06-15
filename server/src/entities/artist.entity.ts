import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Song } from "./song.entity.ts";
import { Album } from "./album.entity.ts";

export enum artistType {
  SINGER = "singer",
  BAND = "band",
  PAIR = "pair",
}

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  uuid!: number;

  @Column({
    type: "enum",
    enum: artistType, // Points to the TS enum
    default: artistType.SINGER,
  })
  artistType!: string;

  @OneToMany(() => Song, (song) => song.artist)
  songs: Song[];

  @OneToMany(() => Album, (album) => album.artist)
  albums: Album[];
}
