import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PersonalPlaylist } from "../personalPlaylist/personalPlaylist.entity.ts";


@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn('uuid') 
  uuid: string;

  @Column({type: "boolean"})
  isAdministor: boolean;

  @Column({ type: "varchar", unique: true })
  userName: string;

  @Column({ type: "varchar", unique: true })
  id: string;
  
  @OneToMany(() => PersonalPlaylist, (personalPlaylist) => personalPlaylist.user)
  personalPlaylists: PersonalPlaylist[];  
}
