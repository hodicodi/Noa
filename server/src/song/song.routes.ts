import upload from "@shared/src/routes.ts";
import { GeneralParams } from "@shared/src/types/general.types.ts";
import { SaveSongReqBody, SongRes, SongsRes } from "@shared/src/types/song.types.ts";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import multer from "multer";
import { HttpError } from "../errors/httpError.ts";
import songService from "./song.service.ts";

const songRouter = Router();

songRouter.get("/:uuid", async (req: Request<GeneralParams, unknown, unknown>, res: Response<SongRes>) => {
  const { uuid } = req.params;
  const song = await songService.getSongByUuid(uuid);

  res.status(StatusCodes.OK).json({ song });
});

songRouter.get("/mp3/:uuid", async (req: Request<GeneralParams, unknown, unknown>, res: Response) => {
  const { uuid } = req.params;
  const rawDataStream = await songService.getSongMp3ByUuid(uuid);
  res.setHeader("Content-Type", rawDataStream.contentType);
  const rawData = await rawDataStream.body?.transformToByteArray();
  res.send(Buffer.from(rawData!));
});

songRouter.get("/", async (req: Request, res: Response<SongsRes>) => {
  const songs = await songService.getAllSongs();

  res.status(StatusCodes.OK).json({ songs });
});

songRouter.post("/", async (req: Request<unknown, unknown, SaveSongReqBody>, res: Response) => {
  const { song } = req.body;
  const patchedSong = await songService.addSong(song);
  res.status(StatusCodes.CREATED).json({ patchedSong });
});

const uploadMulter = multer({ storage: multer.memoryStorage() });

songRouter.post(`${upload}`, uploadMulter.single("audioFile"), async (req: Request, res: Response) => {
  const { title } = req.body;

  const file = req.file;

  if (!file) {
    throw new HttpError(StatusCodes.NOT_FOUND, "No audio file provided");
  }

  songService.addMp3File(file, title);

  res.status(StatusCodes.CREATED).json({ message: "File and metadata uploaded successfully" });
});

export default songRouter;
