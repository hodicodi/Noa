import { AdministorActionsProps } from "@shared/src/types/administor.types.ts"
import Path from "../../../routes/path.constants.ts";

  const manageUsers:AdministorActionsProps = {
    name: "Handle users",
    path: Path.HandleUser
  }; 
    const manageArtists:AdministorActionsProps = {
    name: "Handle artists",
    path: Path.HandleArtist
  }; 
    const manageSongs:AdministorActionsProps = {
    name: "Handle songs",
    path: Path.HandleSong
  }; 

  export default {manageUsers, manageArtists, manageSongs};