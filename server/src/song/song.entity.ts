import { songType } from "@shared/src/enums/songType.enum.ts";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Album } from "../album/album.entity.ts";
import { PersonalPlaylist } from "../personalPlaylist/personalPlaylist.entity.ts";


@Entity()
export class Song {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "timestamptz", default: () => "CURRENT_DATE" })
  publishDate: string;

  @Column({
    type: "enum",
    enum: songType, // Points to the TS enum
    default: songType.ROCK,
  })
  genre: songType;

  @ManyToMany(() => PersonalPlaylist, (personalPlaylist) => personalPlaylist.songs, { onDelete: "CASCADE" })
  personalPlaylist: PersonalPlaylist;

  @ManyToOne(() => Album, (album) => album.songs, { onDelete: "CASCADE", nullable: false })
  @JoinColumn()
  album: Album;
}
