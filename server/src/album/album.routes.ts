import { AlbumRes, AlbumsRes, SaveAlbumReqBody } from "@shared/src/types/album.types.ts";
import { GeneralParams } from "@shared/src/types/general.types.ts";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import albumService from "./album.service.ts";

const albumRouter = Router();

albumRouter.get("/:uuid", async (req: Request<GeneralParams, unknown, unknown>, res: Response<AlbumRes>) => {
  const { uuid } = req.params;
  const album = await albumService.getAlbumById(uuid);
  res.status(StatusCodes.OK).json({ album });
});

albumRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<AlbumsRes>) => {
  const albums = await albumService.getAllAlbums();
  res.status(StatusCodes.OK).json({ albums });
});

albumRouter.post("/", async (req: Request<unknown, unknown, SaveAlbumReqBody>, res: Response) => {
  const { album } = req.body;
  const newAlbum = await albumService.createAlbum(album);
  res.status(StatusCodes.CREATED).json({ newAlbum });
});

export default albumRouter;
