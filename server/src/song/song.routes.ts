import { GeneralParams } from "@shared/src/types/general.types.ts";
import { AddSongToPersonalPlaylistReqBody, SongRes, SongsRes } from "@shared/src/types/song.types.ts";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import multer from "multer";
import { uploadFile } from "../s3-service/s3Service.tsx";
import { initializeCleanerApi, S3File, S3FileDescriptor } from "../s3ServiceTest.ts";
import songService from "./song.service.ts";

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

songRouter.post("/personal-playlist-add-song", async (req: Request<unknown, unknown, AddSongToPersonalPlaylistReqBody>, res: Response<SongRes>) => {
  const { song } = req.body;
  const patchedPersonalPlaylist = await songService.addSongToPersonalPlaylist(song);
  res.status(StatusCodes.CREATED).json({ song: patchedPersonalPlaylist });
});

// Get songFile

const upload = multer({ storage: multer.memoryStorage() });

songRouter.post("/api/upload", upload.single("audioFile"),async (req: Request, res: Response) => {
  try {
    // Access the raw data fields sent from the client
    const { title, artist, genre } = req.body;

    const file = req.file;

    // Access the uploaded file object

    if (!file) {
      return res.status(400).json({ error: "No audio file provided" });
    }


    // Process or save your file + data to the database here
    console.log("Song Metadata:", { title, artist, genre });
    console.log("File Name:", file.originalname);

    const myDescription: S3FileDescriptor = { name: title, extension: "mp3", path: "noa/test", contentType: "audio/mpeg" };
    
      const myfile: S3File = { name: title, extension: "mp3", path: "noa/test", contentType: "audio/mpeg", content: file.buffer };

      const saveUrl = await initializeCleanerApi(myDescription);

    
      await uploadFile(saveUrl , myfile, myfile.contentType);
      

    res.status(200).json({ message: "File and metadata uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default songRouter;
