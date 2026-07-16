import { AdministorActionsProps } from "@shared/src/types/administor.types.ts"

  const manageUsers:AdministorActionsProps = {
    name: "Handle users",
    path: "/handleUsers"
  } 
    const manageArtists:AdministorActionsProps = {
    name: "Handle artists",
    path: "/handleArtists"
  } 
    const manageSongs:AdministorActionsProps = {
    name: "Handle songs",
    path: "/handleSongs"
  } 

export default {manageUsers, manageArtists, manageSongs};