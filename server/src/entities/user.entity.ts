import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PersonalPlaylist } from "./personalPlaylist.entity.ts";


@Entity()
export class User {
  @PrimaryGeneratedColumn() 
  uuid!: number;

  @Column({type: "boolean"})
  isAdministor!: boolean;

  toggleStatus() {
    this.isAdministor = !this.isAdministor;
  }

    @OneToMany(() => PersonalPlaylist, (personalPlaylist) => personalPlaylist.user)
    personalPlaylists: PersonalPlaylist[];


}
