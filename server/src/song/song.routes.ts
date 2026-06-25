import { AddSongToPersonalPlaylistReqBody, SongRes, SongsRes } from "@shared/src/types/song.types.ts";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import songService from "./song.service.ts";
import {GeneralParams} from "@shared/src/types/general.types.ts";


const songRouter = Router();

songRouter.get("/:uuid", async (req: Request<GeneralParams, unknown, unknown>, res: Response<SongRes>, next) => {
  const { uuid } = req.params;
  const song = await songService.getSongByUuid(uuid);

  res.status(StatusCodes.OK).json({ song });
});

songRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<SongsRes>) => {
  const songs = await songService.getAllSongs();

  res.status(StatusCodes.OK).json({ songs });
});

songRouter.post(
  "/personal-playlist-add-song",
  async (req: Request<unknown, unknown, AddSongToPersonalPlaylistReqBody>, res: Response<SongRes>) => {
    const { song } = req.body;
    const patchedPersonalPlaylist = await songService.addSongToPersonalPlaylist(song);
    res.status(StatusCodes.CREATED).json({song: patchedPersonalPlaylist});
  },
);

export default songRouter;
