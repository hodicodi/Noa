import { AdministorActionsProps } from "@shared/src/types/administor.types.ts"
import {HADNLE_USERS_PATH, HANDLE_ARTISTS_PATH, HANDLE_SONGS_PATH} from "../../../routes/path.constants.ts";

  const manageUsers:AdministorActionsProps = {
    name: "Handle users",
    path: HADNLE_USERS_PATH,
  } 
    const manageArtists:AdministorActionsProps = {
    name: "Handle artists",
    path: HANDLE_ARTISTS_PATH,
  } 
    const manageSongs:AdministorActionsProps = {
    name: "Handle songs",
    path: HANDLE_SONGS_PATH
  } 

export default {manageUsers, manageArtists, manageSongs};