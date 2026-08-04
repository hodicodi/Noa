import { AlbumRes, AlbumsRes, SaveAlbumReqBody } from "@shared/src/types/album.types.ts";
import { GeneralParams, SearchQueryParams } from "@shared/src/types/general.types.ts";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import albumService from "./album.service.ts";
import multer from "multer";
import { HttpError } from "../errors/httpError.ts";
import { SEARCH_PATH, UPLOADS_PATH } from "@shared/src/const/paths.const.ts";

const albumRouter = Router();

albumRouter.get(SEARCH_PATH, async (req: Request<unknown, unknown, unknown, SearchQueryParams>, res: Response<AlbumsRes>) => {
  const { searchQuery } = req.query;

  const albums = await albumService.getAlbumsWithQuery(searchQuery);

  res.status(StatusCodes.OK).json({ albums });
});

albumRouter.get("/:uuid", async (req: Request<GeneralParams, unknown, unknown>, res: Response<AlbumRes>) => {
  const { uuid } = req.params;
  const album = await albumService.getAlbumById(uuid);
  res.status(StatusCodes.OK).json({ album });
});

albumRouter.get("/", async (req: Request, res: Response<AlbumsRes>) => {
  const albums = await albumService.getAllAlbums();
  res.status(StatusCodes.OK).json({ albums });
});

albumRouter.post("/", async (req: Request<unknown, unknown, SaveAlbumReqBody>, res: Response) => {
  const { album } = req.body;
  const newAlbum = await albumService.createAlbum(album);
  res.status(StatusCodes.CREATED).json({ newAlbum });
});

const uploadMulter = multer({ storage: multer.memoryStorage() });

albumRouter.post(UPLOADS_PATH, uploadMulter.single("imgFile"), async (req: Request, res: Response) => {
  const { title } = req.body;

  const file = req.file;

  if (!file) {
    throw new HttpError(StatusCodes.NOT_FOUND, "No audio file provided");
  }

  await albumService.addImgFile(file, title);

  res.status(StatusCodes.CREATED).json({ message: "File and metadata uploaded successfully" });
});

export default albumRouter;
