import { SongType } from "@shared/src/enums/songType.enum.ts";
import { Song } from "@shared/src/types/song.types.ts";
import { NEW_ALBUM_DEFAULT_VALUES } from "../handle-albums-page/handleAlbumsPage.consts.ts";

const NEW_SONG_DEFAULT_VALUES: Song = {
  name: "",
  genre: SongType.Rock,
  album: NEW_ALBUM_DEFAULT_VALUES
};

export default NEW_SONG_DEFAULT_VALUES;
