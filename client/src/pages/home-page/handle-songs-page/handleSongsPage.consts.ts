import { SongType } from "@shared/src/enums/songType.enum.ts";
import { Song } from "@shared/src/types/song.types.ts";
import newAlbum from "../handle-albums-page/handleAlbumsPage.consts.ts";

const newSong: Song = {
  name: "",
  genre: SongType.Rock,
  album: newAlbum
};

export default newSong;
