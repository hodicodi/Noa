import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity.ts";
import { Song } from "./song.entity.ts";
import { Artist } from "./artist.entity.ts";

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  uuid!: number;

  @OneToMany(() => Song, (song) => song.album)
  songs: Song[];

  @Column({ type: "number", default: () => 0 })
  views: number;

  @Column({ type: "number" })
  length: number;

  @ManyToOne(() => Artist, (artist) => artist.albums, { onDelete: "CASCADE" })
  @JoinColumn({ name: "uuid" })
  artist: Artist;
}
