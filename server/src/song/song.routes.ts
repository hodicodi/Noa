import { SongParams, SongRes, SongsRes } from "@shared/src/types/song.types.ts";
import { Request, Response, Router } from "express";
import { SongService } from "./song.service.ts";
import { StatusCodes } from "http-status-codes";
import { HttpError } from "../errors/httpError.ts";


const songRouter = Router();
const songService = new SongService();

songRouter.get('/:uuid', async (req: Request<SongParams, unknown, unknown>, res: Response<SongRes>, next) => {
    try {
        const {uuid} = req.params;
        const song = await songService.getSongByUuid(uuid);
        if(!song) {
            throw new HttpError(StatusCodes.NOT_FOUND, "song not found");
        }
        res.status(StatusCodes.OK).json({song});
    } catch (error) {
        next(error)
    }
});

songRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<SongsRes>, next) => {
    try {
        const songs = await songService.getAllSongs();
        if(!songs) {
            throw new HttpError(StatusCodes.NOT_FOUND, "none songs were found");
        }
        res.status(StatusCodes.OK).json({songs});
    } catch (error) {
        next(error)
    }
});


export default songRouter;
