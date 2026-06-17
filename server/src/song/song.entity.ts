import { songType } from "@shared/src/enums/songType.enum.ts";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Album } from "../album/album.entity.ts";
import { PersonalPlaylist } from "../personalPlaylist/personalPlaylist.entity.ts";


@Entity()
export class Song {
  @PrimaryGeneratedColumn('uuid')
  uuid: number;

  @ManyToOne(() => PersonalPlaylist, (personalPlaylist) => personalPlaylist.songs, { onDelete: "CASCADE" })
  @JoinColumn()
  personalPlaylist: PersonalPlaylist;

  @ManyToOne(() => Album, (album) => album.songs, { onDelete: "CASCADE"})
  @JoinColumn()
  album: Album;

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
