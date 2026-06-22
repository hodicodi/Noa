import { SongParams, SongRes, SongsRes } from "@shared/src/types/song.types.ts";
import { Request, Response, Router } from "express";
import { SongService } from "./song.service.ts";


const songRouter = Router();
const songService = new SongService();

songRouter.get("/", async (req: Request<unknown, unknown, unknown>, res: Response<SongsRes>) => {
    try {
        const songs = await songService.getAllSongs();
        res.json({songs});
    } catch (error) {
        res.status(500);
    }
});

songRouter.get('/:uuid', async (req: Request<SongParams, unknown, unknown>, res: Response<SongRes>) => {
    try {
        const {uuid} = req.params;
        const song = await songService.getSongByUuid(uuid);
        res.json({song});
    } catch (error) {
        res.status(500);
    }
});


export default songRouter;
