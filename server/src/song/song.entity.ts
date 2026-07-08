import { SongType } from "@shared/src/enums/songType.enum.ts";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Album } from "../album/album.entity.ts";
import { BaseCustomEntity } from "../base-custom-entity/baseCustomEntity.entity.ts";
import { PersonalPlaylist } from "../personal-playlist/personalPlaylist.entity.ts";

@Entity()
export class Song extends BaseCustomEntity {
  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "timestamptz", default: () => "CURRENT_DATE" })
  publishDate: string;

  @Column({
    type: "enum",
    enum: SongType,
    default: SongType.Rock,
  })
  genre: SongType;

  @Column({ type: "varchar" , unique: true})
  s3Url: string;


  @ManyToMany(() => PersonalPlaylist, (personalPlaylist) => personalPlaylist.songs, { onDelete: "CASCADE" })
  personalPlaylist: PersonalPlaylist;

  @ManyToOne(() => Album, (album) => album.songs, { onDelete: "CASCADE", nullable: false })
  @JoinColumn()
  album: Album;
}
