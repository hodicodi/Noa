import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Unique } from "typeorm";
import { Artist } from "../artist/artist.entity.ts";
import { BaseCustomEntity } from "../base-custom-entity/baseCustomEntity.entity.ts";
import { Song } from "../song/song.entity.ts";

@Entity()
@Unique(['name', 'artist'])
export class Album extends BaseCustomEntity {
  @Column({ type: "varchar"})
  name: string;

  @OneToMany(() => Song, (song) => song.album, { cascade: true })
  songs: Song[];

  @ManyToOne(() => Artist, (artist) => artist.albums, { onDelete: "CASCADE" })
  @JoinColumn()
  artist: Artist;
}
