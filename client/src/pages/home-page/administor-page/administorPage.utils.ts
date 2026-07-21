import { AdministorActionsProps } from "@shared/src/types/administor.types.ts"
import {HADNLE_USERS, HANDLE_ARTISTS, HANDLE_SONGS} from "../../../routes/path.constants.ts";

  const manageUsers:AdministorActionsProps = {
    name: "Handle users",
    path: HADNLE_USERS,
  } 
    const manageArtists:AdministorActionsProps = {
    name: "Handle artists",
    path: HANDLE_ARTISTS,
  } 
    const manageSongs:AdministorActionsProps = {
    name: "Handle songs",
    path: HANDLE_SONGS
  } 

export default {manageUsers, manageArtists, manageSongs};