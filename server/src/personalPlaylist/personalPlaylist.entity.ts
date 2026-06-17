import { personalPlaylistType } from "@shared/src/enums/personalPlaylistType.enum.ts";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Song } from "../song/song.entity.ts";
import { User } from "../user/user.entity.ts";

@Entity()
export class PersonalPlaylist {
  @PrimaryGeneratedColumn("uuid")
  uuid: number;

  @OneToMany(() => Song, (song) => song.personalPlaylist)
  songs: Song[];

  // TODO make note virtual columns

  /*
  @Column({ type: "int" })
  length: number;
  */

  @ManyToOne(() => User, (user) => user.personalPlaylists, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: User;

  @Column({
    type: "enum",
    enum: personalPlaylistType, // Points to the TS enum
    default: personalPlaylistType.HISTORY,
  })
  platlistType: personalPlaylistType;
}
