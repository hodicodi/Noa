import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PersonalPlaylist } from "../personalPlaylist/personalPlaylist.entity.ts";


@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid') 
  userUuid: number;

  @Column({type: "boolean"})
  isAdministor: boolean;

  @Column({ type: "text", unique: true })
  userName: string;
  
  toggleStatus() {
    this.isAdministor = !this.isAdministor;
  }

  @OneToMany(() => PersonalPlaylist, (personalPlaylist) => personalPlaylist.user)
  personalPlaylists: PersonalPlaylist[];


}
