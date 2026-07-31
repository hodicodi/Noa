import { songsInfo } from "@shared/hardCodedInfo.ts";
}import { Song } from "@shared/src/types/song.types.ts";

export const defaultSong: Song = {
        uuid: songsInfo[0]?.uuid!,
        name: songsInfo[0]?.name!,
        artistName: songsInfo[0]?.artistName!
