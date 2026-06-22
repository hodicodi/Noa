import { artistType } from "@shared/src/enums/artistType.enum.ts";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Album } from "../album/album.entity.ts";

// TODO: Only first letter upper case
// TODO: Different enum file, folder

@Entity()
export class Artist {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ type: "varchar" , unique: true})
  name: string;

  @Column({
    enumName: "artist_type",
    type: "enum",
    enum: artistType, // Points to the TS enum
    default: artistType.SINGER,
  })
  type: artistType;

  @OneToMany(() => Album, (album) => album.artist)
  albums: Album[];
}
