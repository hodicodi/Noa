import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Song } from "./song.entity.ts";
import { User } from "./user.entity.ts";

export enum playlist_type {
  USER_PLAYLIST = "userPlaylist",
  HISTORY = "history",
  LIKED_SONGS = "likedSongs",
}

@Entity()
export class PersonalPlaylist {
  @PrimaryGeneratedColumn()
  uuid!: number;

  @OneToMany(() => Song, (song) => song.album)
  songs: Song[];

  @Column({ type: "number", default: () => 0 })
  views: number;

  @Column({ type: "number" })
  length: number;

  @ManyToOne(() => User, (user) => user.personalPlaylists, { onDelete: "CASCADE" })
  @JoinColumn({ name: "uuid" })
  user: User;

    @Column({
      type: "enum",
      enum: playlist_type, // Points to the TS enum
      default: playlist_type.USER_PLAYLIST,
    })
    platlistType!: string;
}
