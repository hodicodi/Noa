import { PersonalPlaylistType } from "@shared/src/enums/personalPlaylistType.enum.ts";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { BaseCustomEntity } from "../base-custom-entity/baseCustomEntity.entity.ts";
import { Song } from "../song/song.entity.ts";
import { User } from "../user/user.entity.ts";

@Entity()
export class PersonalPlaylist extends BaseCustomEntity {
  @Column({ type: "varchar", unique: true })
  name: string;

  @Column({
    type: "enum",
    enum: PersonalPlaylistType, 
    default: PersonalPlaylistType.History,
  })
  type: PersonalPlaylistType;

  @ManyToMany(() => Song, (song) => song.personalPlaylist)
  @JoinTable()
  songs: Song[];

  @ManyToOne(() => User, (user) => user.personalPlaylists, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: User;
}
