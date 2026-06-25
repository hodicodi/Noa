import { Column, Entity, OneToMany } from "typeorm";
import { BaseCustomEntity } from "../base-custom-entity/baseCustomEntity.entity.ts";
import { PersonalPlaylist } from "../personal-playlist/personalPlaylist.entity.ts";

@Entity()
export class User extends BaseCustomEntity {
  @Column({ type: "boolean" })
  isAdministor: boolean;

  @Column({ type: "varchar", unique: true })
  name: string;

  @Column({ type: "varchar", unique: true })
  tz: string;

  @OneToMany(() => PersonalPlaylist, (personalPlaylist) => personalPlaylist.user)
  personalPlaylists: PersonalPlaylist[];
}
