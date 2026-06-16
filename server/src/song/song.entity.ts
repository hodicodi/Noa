import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Artist } from "../artist/artist.entity.ts";
import { Playlist } from "../playlist/playlist.entity.ts";
import {songType} from "@shared/src/enums/songType.enum.ts";


@Entity()
export class Song {
  @PrimaryGeneratedColumn('uuid')
  uuid: number;

  @ManyToOne(() => Artist, (artist) => artist.songs, { onDelete: "CASCADE" })
  @JoinColumn({ name: "uuid" })
  artist: Artist;

  @ManyToOne(() => Playlist, (playlist) => playlist.songs, { onDelete: "CASCADE" })
  @JoinColumn()
  playlist: Playlist;

  @Column({ type: "timestamptz", default: () => "CURRENT_DATE" })
  publishDate: string;

  @Column({ type: "int" })
  views: number;

  @Column({ type: "int" })
  length: number;

  @Column({
    type: "enum",
    enum: songType, // Points to the TS enum
    default: songType.ROCK,
  })
  genere: songType;
}
