import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Song } from "../song/song.entity.ts";
import { Album } from "../album/album.entity.ts";
import {artistType} from "@shared/src/enums/artistType.enum.ts";

// TODO: Only first letter upper case
// TODO: Different enum file, folder


@Entity()
export class Artist {
  @PrimaryGeneratedColumn('uuid')
  uuid: number;

  @Column({
    type: "enum",
    enum: artistType, // Points to the TS enum
    default: artistType.SINGER,
  })
  artistType: artistType;

  @OneToMany(() => Song, (song) => song.artist)
  songs: Song[];

  @OneToMany(() => Album, (album) => album.artist)
  albums: Album[];
}
