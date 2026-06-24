import { Request, Response, Router } from "express";
import albumService from "./album.service.ts";
import { AlbumParams, AlbumRes, AlbumsRes, SaveAlbumReqBody } from "@shared/src/types/album.types.ts";
import { AddSongToAlbumReqBody } from "@shared/src/types/song.types.ts";
import { StatusCodes } from "http-status-codes";
import { HttpError } from "../errors/httpError.ts";

const albumRouter = Router();

albumRouter.get("/:uuid", async (req: Request<AlbumParams, unknown, unknown>, res: Response<AlbumRes>, next) => {
  const { uuid } = req.params;
  const album = await albumService.getAlbumById(uuid);
  res.status(StatusCodes.OK).json({ album });
});

albumRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<AlbumsRes>, next) => {
  const albums = await albumService.getAllAlbums();
  res.status(StatusCodes.OK).json({ albums });
});

albumRouter.post("/", async (req: Request<unknown, unknown, SaveAlbumReqBody>, res: Response, next) => {
  const { album } = req.body;
  const newAlbum = await albumService.createAlbum(album);
  res.status(StatusCodes.CREATED).json({ newAlbum });
});

export default albumRouter;
