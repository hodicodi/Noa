import { songType } from "@shared/src/enums/songType.enum.ts";
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
    enum: songType, // Points to the TS enum
    default: songType.Rock,
  })
  genre: songType;

  @ManyToMany(() => PersonalPlaylist, (personalPlaylist) => personalPlaylist.songs, { onDelete: "CASCADE" })
  personalPlaylist: PersonalPlaylist;

  @ManyToOne(() => Album, (album) => album.songs, { onDelete: "CASCADE", nullable: false })
  @JoinColumn()
  album: Album;
}
