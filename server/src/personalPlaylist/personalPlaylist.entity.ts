import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { Playlist } from "../playlist/playlist.entity.ts";
import { User } from "../user/user.entity.ts";
import {personalPlaylistType} from "@shared/src/enums/personalPlaylistType.enum.ts"


@Entity()
export class PersonalPlaylist extends Playlist {
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
