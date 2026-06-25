import { ArtistType } from "@shared/src/enums/artistType.enum.ts";
import { Column, Entity, OneToMany } from "typeorm";
import { Album } from "../album/album.entity.ts";
import { BaseCustomEntity } from "../base-custom-entity/baseCustomEntity.entity.ts";

@Entity()
export class Artist extends BaseCustomEntity {
  @Column({ type: "varchar", unique: true })
  name: string;

  @Column({
    enumName: "artist_type",
    type: "enum",
    enum: ArtistType, 
    default: ArtistType.Singer,
  })
  type: ArtistType;

  @OneToMany(() => Album, (album) => album.artist)
  albums: Album[];
}
