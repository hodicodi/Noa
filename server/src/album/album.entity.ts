import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../user/user.entity.ts";
import { Song } from "../song/song.entity.ts";
import { Artist } from "../artist/artist.entity.ts";
import { Playlist } from "../playlist/playlist.entity.ts";


@Entity()
export class Album extends Playlist{

  @Column({ type: "int" })
  views: number;

  @Column({ type: "int" })
  length: number;

  @ManyToOne(() => Artist, (artist) => artist.albums, { onDelete: "CASCADE" })
  @JoinColumn()
  artist: Artist;
}
