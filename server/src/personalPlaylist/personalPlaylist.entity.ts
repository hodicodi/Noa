import { personalPlaylistType } from "@shared/src/enums/personalPlaylistType.enum.ts";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Song } from "../song/song.entity.ts";
import { User } from "../user/user.entity.ts";

@Entity()
export class PersonalPlaylist extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  
  @Column({ type: "varchar" , unique: true})
  name: string;

  @Column({
    type: "enum",
    enum: personalPlaylistType, // Points to the TS enum
    default: personalPlaylistType.HISTORY,
  })
  type: personalPlaylistType;

  @ManyToMany(() => Song, (song) => song.personalPlaylist)
  @JoinTable()
  songs: Song[];

  @ManyToOne(() => User, (user) => user.personalPlaylists, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: User;
}
